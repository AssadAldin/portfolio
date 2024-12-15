'use client'
import { statsData } from "@/constants";
import React from "react";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-2.5 md:gap-5">
      {statsData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start"
        >
          <CountUp className="text-4xl lg:text-6xl font-extrabold text-white" end={item?.num} delay={1} duration={3} />
          {/* <p className="text-4xl lg:text-6xl font-extrabold text-white">
            {item?.num}
          </p> */}
          <p className="leading-snug text-sm">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
