import Image from "next/image";
import { notFound } from "next/navigation";

interface PropertyDetail {
  property_id: string;
  list_price: number;
  description: {
    text: string;
  };
  location: {
    address: {
      line: string;
      city: string;
      state: string;
      postal_code: string;
    };
  };
  photos: Array<{ href: string }>;
  agents?: Array<{
    name: string;
    email: string;
    phone: string;
  }>;
}

async function getProperty(id: string): Promise<PropertyDetail> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("API URL is not configured");
  }

  const url = `${apiUrl}/api/property/${id}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `Error fetching property ${id}:`,
        res.status,
        res.statusText
      );
      if (res.status === 404) notFound();
      throw new Error("Failed to fetch property data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export default async function PropertyDetail({
  params,
}: {
  params: { id: string };
}) {
  let property: PropertyDetail;

  try {
    property = await getProperty(params.id);
  } catch (error) {
    notFound();
  }

  if (!property) {
    notFound();
  }

  return (
    <div className=" mx-auto px-4 md:px-16 lg:px-32 min-h-screen py-8 bg-gray-50">
      <h1 className="lg:text-3xl font-bold mb-4 pt-24 text-red-600">
        Address: {property.location.address.line}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative w-full h-96">
            <Image
              src={property.photos?.[0]?.href || "/placeholder.jpg"}
              alt={property.location.address.line}
              fill
              className="object-cover rounded-lg shadow-lg p-4 bg-white"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 p-2 bg-white">
            {property.photos?.slice(1, 5).map((photo, index) => (
              <div key={index} className="relative w-full h-20">
                <Image
                  src={photo.href}
                  alt={`Additional view ${index + 1}`}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" bg-white p-4 shadow-md">
          <p className="md:text-2xl font-bold text-green-600 mb-4">
            ${property.list_price.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-4 font-bold">
            {property.location.address.city}, {property.location.address.state}{" "}
            {property.location.address.postal_code}
          </p>
          <p className="text-gray-700 mb-6">{property.description.text}</p>
          {property.agents && property.agents.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2">Agent Information</h2>
              {property.agents.map((agent, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{agent.name}</p>
                  <p>{agent.email}</p>
                  <p>{agent.phone}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
