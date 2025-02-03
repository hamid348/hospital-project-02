"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import ServiceCompo from "./ServiceCompo";
import { FaTaxi, FaPlane, FaTrain, FaWalking, FaPlaneArrival } from "react-icons/fa";


export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
  color: 'bg-yellow-500',
  icon: FaTaxi,
  title: "RolStole Vervoer",
  description: "Boek taxi Rotterdam online van"
 },
 {
  color: 'bg-yellow-500',
  icon: FaPlaneArrival,
  title: "Groeps Vervoer",
  description: "Boek taxi Rotterdam online van"
 },
 {
  color: 'bg-yellow-500',
  icon: FaTrain,
  title: "Plane Vervoer",
  description: "Boek taxi Rotterdam online van"
 },
 {
  color: 'bg-yellow-500',
  icon: FaWalking,
  title: "Taxi Vervoer",
  description: "Boek taxi Rotterdam online van"
 },
 {
  color: 'bg-yellow-500',
  icon: FaPlane,
  title: "Taxi Vervoer",
  description: "Boek taxi Rotterdam online van"
 }
];
