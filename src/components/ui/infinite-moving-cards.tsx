"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { FC } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    color: string; // Tailwind color class (e.g., "bg-teal-500")
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // Function to set animation direction
  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  // Function to set animation speed
  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
        default:
          duration = "40s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  // Add animation to the scroller
  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
           
            key={item.title}
          >
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div
                className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full ${item.color} shadow-lg shadow-teal-500/40`}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
                {item.title}
              </h1>
              <p className="px-4 text-gray-500">{item.description}</p>
              <div className="mx-auto flex h-16 w-16 transform items-center justify-center rounded-full">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Default
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};