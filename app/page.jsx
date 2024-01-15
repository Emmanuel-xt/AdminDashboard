import React from "react";
import { GoContainer } from "react-icons/go";
import { FcAlarmClock } from "react-icons/fc";
import { PiGiftBold } from "react-icons/pi";
import { HiOutlineCollection } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";
import { PiPackageFill } from "react-icons/pi";
import { LuPackage } from "react-icons/lu";
import { BsPersonFillGear } from "react-icons/bs"
import { BsPersonHeart } from "react-icons/bs";
import { BsPersonFillLock } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import Filter from "./components/Filter";

const panels = [
  {
    name: "Shipments",
    icon: "/assets/shipment.png",
    value: 0,
  },
  {
    name: "Pickups",
    icon: "/assets/clock.png",
    value: 0,
  },
  {
    name: "Consolidated",
    icon: "/assets/consolidated.png",
    value: 0,
  },
  {
    name: "Accounts Recieveable",
    icon: "/assets/recieveable.png",
    value: 0,
  },
  {
    name: "Pre Alerts",
    icon: "/assets/price.png",
    value: "0",
  },
  {
    name: "Registered Packages",
    icon: "/assets/packages.png",
    value: "0",
  },
];

const sales = [
  {
    name: "Total Shipments",
    value: "0,00",
  },
  {
    name: "Total Pickups",
    value: "0,00",
  },
  {
    name: "Consolidated Total",
    value: "0,00",
  },
];

const users = [
    {
        title : 'Super Admin',
        img : <BsPersonFillLock className=" text-green-700"/>,
        no : 1,
    },
    {
        title : 'Managers',
        img : <BsFillPersonLinesFill className=" text-orange-700"/>,
        no : 3,
    },
    {
        title : 'Drivers',
        img : <BsPersonFillGear className=" text-purple-700"/>,
        no : 15,
    },
    {
        title : 'Customers',
        img : <BsPersonHeart className=" text-blue-700"/>,
        no : 0,
    },
]

const page = () => {
  return (
    <div className="p-3 border w-full ">
      <h6 className=" font-semibold">Control Panel</h6>
      <div className="w-full flex gap-4  flex-col">
        <div className="bg-white  px-3 py-4 rounded flex gap-3 flex-wrap">
          <div className=" md:w-2/3 w-full">
            <h6 className="border-b pb-4"> Control Panel</h6>
            <div className="flex flex-wrap max-sm:flex-col">
              {panels.map((panel) => (
                <div className="flex items-center w-1/2 py-3 gap-3">
                  <Image
                    src={panel.icon}
                    alt={panel.name}
                    width={40}
                    height={40}
                  />
                  <div className="">
                    <p className="text-slate-500">{panel.name}</p>
                    <p className="font-bold">{panel.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h6 className="border-b pb-4">Sales Summary</h6>
            <div className="p-3 max-md:flex justify-between flex-wrap gap-2">
              {sales.map((sale) => (
                <div className=" py-3">
                  <h6 className="text-slate-500">{sale.name}</h6>
                  <p className="font-semibold">USD $ {sale.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white px-3 py-4 rounded  gap-3">
          <h6 className=" border-b pb-4"> Users</h6>
          <div className="flex flex-wrap">
            {
                users.map((user) => (
                    <div className="flex items-center w-1/2 py-3 gap-3">
                        <span className="text-3xl">{user.img}</span>
                        <div className="py-3">
                            <p className="text-slate-500">{user.title}</p>
                            <span className="font-semibold">{user.no}</span>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default page;
