import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  

  const url = `https://realty-in-us.p.rapidapi.com/properties/v3/detail?property_id=${id}`;
  const rapidApiKey = process.env.RAPIDAPI_KEY;

  if (!rapidApiKey) {
    console.error('RAPIDAPI_KEY is not defined');
    return NextResponse.json(
      { error: 'API key is not configured' },
      { status: 500 }
    );
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      console.error('API response not ok:', response.status, response.statusText);
      return NextResponse.json(
        { error: `API responded with status ${response.status}` },
        { status: response.status }
      );
    }
    
    const result = await response.json();
    
    if (!result.data || !result.data.home) {
      console.error('No property data in API response');
      return NextResponse.json({ error: 'Property not found' }, { status: 404 });
    }
    
    const propertyData = {
      property_id: result.data.home.property_id || id,
      list_price: result.data.home.list_price || 0,
      description: {
        text: result.data.home.description?.text || 'No description available'
      },
      location: {
        address: {
          line: result.data.home.location?.address?.line || 'Address not available',
          city: result.data.home.location?.address?.city || 'City not available',
          state: result.data.home.location?.address?.state || 'State not available',
          postal_code: result.data.home.location?.address?.postal_code || 'Postal code not available'
        }
      },
      photos: result.data.home.photos || [],
      agents: result.data.home.agents || []
    };

    return NextResponse.json(propertyData);
  } catch (error) {
    console.error('Error fetching property details:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching property data' },
      { status: 500 }
    );
  }
}