export interface Property {
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
  property_type: string;
}