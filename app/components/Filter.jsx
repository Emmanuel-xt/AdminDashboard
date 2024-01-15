"use client";

import React, { useState } from "react";
import Shipments from "./Shipments";
import Pickup from "./Pickup";
import RegisterdPacks from "./RegisterdPacks";
import PreAlert from "./PreAlert";

const tabs = [
  { title: "Shipments", Component: <Shipments /> },
  { title: "Pickup ", Component: <Pickup /> },
  { title: "Consolidated", Component: <RegisterdPacks /> },
];

const Filter = () => {
  const [display, setDisplay] = useState("Shipments");
  return (
    <div className="bg-white px-3 py-4 rounded  gap-3 text-sm ">
      <h6 className="border-b pb-4"> Lists</h6>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 w-full  ] p-3 rounded-xl">
          {tabs.map((tab) => (
            <span
              className={`md:p-2 md:px-4 p-1 ${
                display === tab.title && "bg-blue-700 text-yellow-50"
              } rounded-lg font-semibold text-blue-700 cursor-pointer transition-all`}
              onClick={() => {
                setDisplay(tab.title);
              }}
            >
              {tab.title}
            </span>
          ))}
        </div>
        <div className="m-1 ">
          {tabs.map((tab) => display === tab.title && tab.Component)}
        </div>
      </div>
    </div>
  );
};

export default Filter;
