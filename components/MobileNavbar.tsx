import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNavbar: React.FC = () => {
  return (
    <div className="lg:hidden bg-white  fixed right-0 top-0 w-full z-50 h-[100px] flex justify-end items-center px-4">
      <Sheet>
        <SheetTrigger asChild>
          <button className="focus:outline-none">
            <Menu className="w-8 h-8" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex flex-col items-center justify-center gap-4 h-[400px] text-xl font-bold active:text-gray-700">
            <Link href={"/"} className=" hover:bg-green-200 active:text-gray-700">
              <SheetDescription>Home</SheetDescription>
            </Link>
            
            <Link href={"/listings"}>
              <SheetDescription>Listings </SheetDescription>
            </Link>
            <Link href={"#"}>
              <SheetDescription>About </SheetDescription>
            </Link>
            <Link href={"#"}>
              <SheetDescription>Contact </SheetDescription>
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
