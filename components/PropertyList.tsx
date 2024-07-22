"use client";

import { useState, useEffect } from "react";
import PropertyGrid from "./PropertyGrid";
import LoadMoreButton from "./LoadMoreButton";
import { Property } from "@/app/types/property";
import SearchBar from "./ui/SearchBar";

export default function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({
    searchTerm: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
    propertyName: "",
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    filterProperties();
  }, [properties, searchCriteria]);

  const fetchProperties = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/properties?page=${page}&limit=10`);
      const newProperties = await res.json();
      setProperties((prev) => [...prev, ...newProperties]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterProperties = () => {
    const { searchTerm, minPrice, maxPrice, propertyType, propertyName } = searchCriteria;

    let filtered = properties.filter((property) => {
      const locationMatch =
        property.location.address.line.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.address.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.address.postal_code.toLowerCase().includes(searchTerm.toLowerCase());

      const priceMatch =
        (!minPrice || property.list_price >= parseInt(minPrice)) &&
        (!maxPrice || property.list_price <= parseInt(maxPrice));

      const typeMatch =
        !propertyType ||
        property.property_type.toLowerCase() === propertyType.toLowerCase();

      const nameMatch =
        !propertyName ||
        (property.description.text &&
          property.description.text.toLowerCase().includes(propertyName.toLowerCase()));

      return locationMatch && priceMatch && typeMatch && nameMatch;
    });

    setFilteredProperties(filtered);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchCriteria(prev => ({ ...prev, searchTerm }));
    setPage(1);
    setProperties([]);
    fetchProperties();
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <PropertyGrid properties={filteredProperties} />
      <LoadMoreButton
        onClick={fetchProperties}
        visible={filteredProperties.length > 0 && filteredProperties.length % 10 === 0}
        isLoading={isLoading}
      />
    </div>
  );
}