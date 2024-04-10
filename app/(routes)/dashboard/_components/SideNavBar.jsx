"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Briefcase, Calendar, Clock, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavBar = () => {
  const menu = [
    {
      id: 1,
      name: "Meeting Type",
      path: "/dashboard/meeting-type", // Corrected path
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Scheduled Meeting",
      path: "/dashboard/scheduled-meeting", // Corrected path
      icon: Calendar,
    },
    {
      id: 3,
      name: "Availability",
      path: "/dashboard/availability", // Corrected path
      icon: Clock,
    },
    {
      id: 4,
      name: "Settings",
      path: "/dashboard/settings", // Corrected path
      icon: Settings,
    },
  ];
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);
  useEffect(() => {
    setActivePath(path); // Update activePath when path changes
  }, [path]);

  return (
    <div className="p-5 py-14">
      <div className="flex items-center gap-2 justify-center">
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
      <Button className="flex gap-2 w-full rounded-full mt-7">
        <Plus />
        Create
      </Button>
      <div className="mt-5 flex flex-col gap-5">
        {menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <Button
              className={`w-full flex gap-2 justify-start hover:bg-blue-100 ${
                activePath === item.path ? "bg-blue-100 text-primary" : "" // Conditionally apply active style
              }`}
              variant="ghost"
            >
              <item.icon /> {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
