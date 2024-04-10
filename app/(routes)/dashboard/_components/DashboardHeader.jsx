"use client";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

function DashboardHeader() {
  const { user } = useKindeBrowserClient();

  return (
    user && (
      <div className="p-4 px-10">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center float-right">
              <Image
                src={user?.picture}
                alt="logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border p-3 shadow-md rounded-md gap-4">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>

              <DropdownMenuItem>
                <LogoutLink>Logout</LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  );
}

export default DashboardHeader;
