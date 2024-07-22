import { Suspense } from 'react';
import PropertyList from '@/components/PropertyList'
import Welcome from '@/components/Welcome';
import DesktopNavbar from '@/components/DesktopNavbar';
export default function Home() {
  return (
    <>
      <DesktopNavbar />
    <div className=" bg-gradient-to-r from-white to-gray-50 pt-20 lg:pt-0 mx-auto ">
      <h1 className="lg:text-4xl text-2xl font-bold  my-8 max-w-[1200px] mx-auto">Real Estate Listings</h1>
      <Suspense fallback={<div>Loading...</div>}>
        
        <Welcome/>
        <PropertyList/>
      </Suspense>
    </div>
    </>
  );
}