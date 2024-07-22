import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

const DesktopNavbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 w-full z-50 hidden lg:block">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Image src={'/logo.png'} width={100} height={100} alt='logo' className="text-3xl font-bold text-gray-900"/>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="/listings" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Listings
          </Link>
          <Link href="#" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="#" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </nav>

      </div>
      <div className="  fixed top-8  z-40  right-4  h-[100px] "> <UserButton /></div>
    </header>
  );
};

export default DesktopNavbar;
