"use client"
import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

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
            className="w-[50px] md:w-[50px] animate-spin-slow"
          />
          <span className=" font-bold font-mono text-xl md:text-2xl">
            Calendly
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
          <LoginLink>
            <Button variant="ghost">Login</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Get Started</Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
