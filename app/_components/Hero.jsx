import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="hidden lg:block">
        <Image
          src="/profile1.avif"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-36"
        />
        <Image
          src="/profile2.avif"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute top-48 left-16"
        />
        <Image
          src="/profile3.webp"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute bottom-20 left-36"
        />
        <Image
          src="/profile4.webp"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-16 bottom-32"
        />
      </div>
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          Easy scheduling ahead
        </h2>
        <h2 className=" text-xl mt5 text-slate-500">
          Calendly is your scheduling automation platform for eliminating the
          back-and-forth emails to find the perfect time and so much more.
        </h2>
        <div className="flex gap-4 flex-col mt-5">
          <h3 className="text-sm"> Sign Up free with Google and Facebook</h3>
          <div className="flex justify-center gap-8">
            <Button className=" p-7 flex gap-4">
              <Image src="/google.png" width={30} height={30} /> Sign up with
              Google
            </Button>
            <Button className=" p-7 flex gap-4">
              <Image src="/facebook.png" width={30} height={30} />
              Sign up with Facebook
            </Button>
          </div>
          <hr />
          <h2>
            <Link href={"/signup"} className="text-primary">
              Sign up Free with Email.
            </Link>
            No Credit Card Required
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
