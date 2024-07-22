import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const limit = 20;
  const offset = (Number(page) - 1) * limit;

  const url = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    },
    body: JSON.stringify({
      limit: limit,
      offset: offset,
      postal_code: '90004',
      status: ['for_sale', 'ready_to_build'],
      sort: {
        direction: 'desc',
        field: 'list_date'
      }
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return NextResponse.json(result.data.home_search.results);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching data' }, { status: 500 });
  }
}