"use client";


import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { app } from "../../../config/FirebaseConfig";
import { Button } from "../../../components/ui/button";
import MeetingType from "./meeting-type/page";

const Dashboard = () => {
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user && isBusinessRegistered();
  }, [user]);

  const isBusinessRegistered = async () => {
    const docRef = doc(db, "Business", user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("document data:", docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document found");
      setLoading(false);
      router.replace("/create-business");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <MeetingType/>
    </div>
  );
};

export default Dashboard;
