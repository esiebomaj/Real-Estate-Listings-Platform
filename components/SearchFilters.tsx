import React from 'react';

interface SearchFiltersProps {
  searchCriteria: {
    searchTerm: string;
    minPrice: string;
    maxPrice: string;
    propertyType: string;
    propertyName: string; 
  };
  setSearchCriteria: React.Dispatch<React.SetStateAction<{
    searchTerm: string;
    minPrice: string;
    maxPrice: string;
    propertyType: string;
    propertyName: string; 
  }>>;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ searchCriteria, setSearchCriteria }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchCriteria(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4 mx-auto max-w-[1200px]">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search location"
        value={searchCriteria.searchTerm}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="propertyName"
        placeholder="Search by name"
        value={searchCriteria.propertyName}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={searchCriteria.minPrice}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={searchCriteria.maxPrice}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="propertyType"
        placeholder="Property Type"
        value={searchCriteria.propertyType}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchFilters;
