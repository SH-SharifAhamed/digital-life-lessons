"use client";

import { useSession } from "@/lib/auth-client";
import { title } from "framer-motion/client";
import React from "react";
import { BookOpen, Bookmark, SquarePlus, Clock } from "@gravity-ui/icons";
import { DashboardStats } from "@/components/deshboard/DeshboardStats";

const UserDeshboard = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  const user = session?.user;
  console.log(session);

  const userStats = [
    {
      title: "Total Lessons",
      value: 42,
      icon: BookOpen,
    },
    {
      title: "Total Saved",
      value: 27,
      icon: Bookmark,
    },
    {
      title: "Recently Added Lessons",
      value: 15,
      icon: SquarePlus,
    },
    {
      title: "Important Actions",
      value: "12h 30m",
      icon: Clock,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome back,{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
          {user?.name || "User"}
        </span>
        !
      </h1>

            <DashboardStats statsData={userStats} />
    </div>
  );
};

export default UserDeshboard;
