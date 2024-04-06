"use client";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col p-5 justify-center items-center gap-5">
      <h1>Dashboard</h1>
      <LogoutLink>
        <Button>Logout</Button>
      </LogoutLink>
    </div>
  );
};

export default Dashboard;
