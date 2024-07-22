'use client'

import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';

const Welcome: NextPage = () => {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="min-h-[200px] flex max-w-[1000px] mx-auto items-center justify-center bg-gray-100">
      <p className="text-xl text-gray-600">Loading...</p>
    </div>;
  }

  if (!isSignedIn) {
    // Redirect to sign-in page if not signed in
    router.push('/sign-in');
    return null;
  }

  return (
    <div className="min-h-[200px] mb-4 shadow-md flex flex-col items-center justify-center bg-white max-w-[1200px] mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome, {user?.firstName || user?.username || 'User'}!
      </h1>
      <p className="mt-4 lg:text-xl text-gray-600">
        Explore our listings to find your perfect property!
      </p>
    </div>
  );
};

export default Welcome;