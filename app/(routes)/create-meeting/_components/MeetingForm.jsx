"use client"
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import locationOptions from "../../../_utils/LocationOptions";
import ThemeOptions from "../../../_utils/ThemeOptions";
import Image from "next/image";
import Link from "next/link";

const MeetingForm = ({setFormValue=()=>"a"}) => {
  const [locationType, setLocationType] = useState("");
  const [themeColor, setThemeColor] = useState("");
  const [eventName, setEventName] = useState("");
  const [duration, setDuration] = useState(30);
  const [locationUrl, setLocationUrl] = useState("");

  useEffect(()=>{
    setFormValue({
        eventName:eventName,
        duration:duration,
        locationType:locationType,
        locationUrl:locationUrl,
        themeColor:themeColor
    })
},[eventName,duration,locationType,locationUrl,themeColor])


  return (
    <div className="p-4 sm:p-8">
      <Link href={"/dashboard"}>
        <h2 className="flex gap-2 cursor-pointer">
          <ChevronLeft /> Cancel
        </h2>
      </Link>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create New Event</h2>
        <hr />
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event Name *</h2>
        <Input
          placeholder="Name of your meeting event"
          onChange={(e) => setEventName(e.target.value)}
        />
        <h2 className="font-bold">Duration *</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              {duration} min
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border p-3 shadow-md rounded-md flex flex-col gap-2 pr-10 bg-white">
            <DropdownMenuItem onClick={() => setDuration(15)} className="cursor-pointer">
              15 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(30)} className="cursor-pointer">
              30 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(45)} className="cursor-pointer">
              45 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(60)} className="cursor-pointer">
              60 Min
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <h2 className="font-bold">Location *</h2>
        <div className="grid grid-cols-4 gap-3">
          {locationOptions.map((option, index) => (
            <div
              key={index}
              className={`border flex flex-col justify-center items-center p-3 rounded-lg ${
                locationType === option.name ? "bg-blue-100 border-blue-500" : ""
              } hover:bg-blue-100 hover:border-primary cursor-pointer`}
              onClick={() => setLocationType(option.name)}
            >
              <Image src={option.icon} width={30} height={30} alt={option.name} />
              <h2>{option.name}</h2>
            </div>
          ))}
        </div>
        {locationType && (
          <>
            <h2 className="font-bold">Add {locationType} Url</h2>
            <Input placeholder="Add Url" onChange={(e) => setLocationUrl(e.target.value)} />
          </>
        )}
        <h2 className="font-bold">Select Theme Color</h2>
        <div className="flex justify-evenly">
          {ThemeOptions.map((color, index) => (
            <div
              key={index}
              className={`h-7 w-7 rounded-full cursor-pointer ${
                themeColor === color ? "ring-2 ring-black" : ""
              }`}
              style={{ background: color }}
              onClick={() => setThemeColor(color)}
            ></div>
          ))}
        </div>
      </div>
      <Button
        className="w-full mt-9"
        disabled={!(eventName && duration && location && locationUrl)}
      >
        Create
      </Button>
    </div>
  );
};

export default MeetingForm;
