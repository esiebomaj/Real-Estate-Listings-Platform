/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DesktopNavbar from "@/components/DesktopNavbar";

const Home = () => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push("/listings");
      } else {
        router.push("/sign-in");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DesktopNavbar />
      
      <main>
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <motion.main
                className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="sm:text-center lg:text-left pt-16 lg:pt-0">
                  <motion.h1
                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="block xl:inline lg:leading-[80px] leading-[60px]">
                      Find your perfect home with{" "}
                    </span>
                    <span className="block text-green-600 xl:inline">
                      PropertyFinder
                    </span>
                  </motion.h1>
                  <motion.p
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Discover a place you'll love to live. Browse our exclusive
                    listings and find your dream home today.
                  </motion.p>
                  <motion.div
                    className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className="rounded-md shadow">
                      <button
                        onClick={handleGetStarted}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              width={1000}
              height={1000}
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/home2.jpg"
              alt="Dream home"
            />
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Featured Listings
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {["/home3.jpg", "/home.jpg", "/home2.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  <div className="flow-root bg-white shadow-md transition-all hover:scale-105 rounded-lg px-4 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center bg-green-500 rounded-md shadow-lg">
                          <Image
                            width={200}
                            height={400}
                            src={src}
                            alt={`House ${index + 1}`}
                            className="h-24 w-24"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {index === 0
                          ? "Modern Family Home"
                          : index === 1
                          ? "Luxury Villa"
                          : "Cozy Cottage"}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {index === 0
                          ? "4 beds • 3 baths • 2,500 sqft"
                          : index === 1
                          ? "5 beds • 4 baths • 4,000 sqft"
                          : "3 beds • 2 baths • 1,800 sqft"}
                      </p>
                      <p className="mt-5 text-base font-semibold text-gray-900">
                        {index === 0
                          ? "$500,000"
                          : index === 1
                          ? "$1,200,000"
                          : "$350,000"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-center">
            &copy; 2024 PropertyFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
