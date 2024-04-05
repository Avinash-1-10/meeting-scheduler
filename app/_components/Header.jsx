import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2 p-5 ">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className="w-[50px] md:w-[50px] animate-bounce"
          />
          <span className=" font-bold font-mono text-xl md:text-2xl">
            My-Meet
          </span>
        </div>
        <ul className="hidden md:flex gap-14 font-medium text-lg">
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Proudct
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Contact Us
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            About Us
          </li>
        </ul>
        <div className="flex gap-5 p-5">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
