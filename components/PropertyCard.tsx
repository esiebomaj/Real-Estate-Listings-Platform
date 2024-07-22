import Link from 'next/link';
import Image from 'next/image';

interface Property {
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
  primary_photo: {
    href: string;
  };
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.property_id}`} passHref>
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-48">
          <Image
            src={property.primary_photo?.href || '/placeholder.jpg'}
            alt={property.location.address.line}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{property.location.address.line}</h2>
          <p className="text-gray-600 mb-2">
            {property.location.address.city}, {property.location.address.state} {property.location.address.postal_code}
          </p>
          <p className="text-green-600 font-bold">${property.list_price.toLocaleString()}</p>
          <p className="text-gray-700 mt-2 truncate">{property.description.text}</p>
        </div>
      </div>
    </Link>
  );
}