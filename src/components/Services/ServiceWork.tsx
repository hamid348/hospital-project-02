"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaTaxi, FaPlane, FaTrain, FaWalking, FaPlaneArrival } from "react-icons/fa";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-blue-400 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    color: "bg-yellow-500", // Tailwind class for background color
    icon: FaTaxi,
    title: "RolStole Vervoer",
    description: "Boek taxi Rotterdam online van",
  },
  {
    color: "bg-blue-500", // Different color
    icon: FaPlaneArrival,
    title: "Groeps Vervoer",
    description: "Boek taxi Rotterdam online van",
  },
  {
    color: "bg-green-500", // Different color
    icon: FaTrain,
    title: "Plane Vervoer",
    description: "Boek taxi Rotterdam online van",
  },
  {
    color: "bg-purple-500", // Different color
    icon: FaWalking,
    title: "Taxi Vervoer",
    description: "Boek taxi Rotterdam online van",
  },
  {
    color: "bg-red-500", // Different color
    icon: FaPlane,
    title: "Taxi Vervoer",
    description: "Boek taxi Rotterdam online van",
  },
];