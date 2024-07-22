'use client'
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { Property } from '../types/property';
import PropertyCard from '@/components/PropertyCard';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const [favorites, setFavorites] = useState<Property[]>([]);

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      // Fetch user profile data, including favorite properties
      fetchFavoriteProperties();
    }
  }, [isLoaded, isSignedIn, user]);

  const fetchFavoriteProperties = async () => {
    // Fetch favorite properties from your backend or Clerk custom attributes
    // Example using Clerk custom attributes:
    if (user && user.publicMetadata.favorites) {
      // setFavorites(user.publicMetadata.favorites);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Your Profile</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Favorite Properties</h3>
        {favorites.length === 0 ? (
          <p className="text-gray-600">You have no favorite properties.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {favorites.map((property, index) => (
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
        )}
      </div>
    </div>
  );
};

export default Profile;
