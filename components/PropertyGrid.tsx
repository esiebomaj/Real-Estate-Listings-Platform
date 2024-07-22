import React from 'react';
import PropertyCard from './PropertyCard';

import { motion } from 'framer-motion';
import Skeleton from './Skeleton';
import { Property } from '@/app/types/property';

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  if (properties.length === 0) {
    return <div className="text-center text-gray-600 max-w-[1200px] mx-auto"><Skeleton number={10}/></div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto p-4">
      {properties.map((property, index) => (
        <motion.div
          key={property.property_id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PropertyCard property={property} />
        </motion.div>
      ))}
    </div>
  );
};

export default PropertyGrid;
