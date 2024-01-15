import React from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { GiCardPickup } from "react-icons/gi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const menus = [
  {
    name: "Control Panel",
    icon: <TbCurrentLocation />,
  },
  {
    name: "locker Packages",
    icon: <IoCartOutline />,
  },
  {
    name: "Shipping",
    icon: <FaShippingFast />,
  },
  {
    name: "Pickups",
    icon: <GiCardPickup />,
  },
  {
    name: "Users",
    icon: <LuUsers />,
  },
  {
    name: "Account",
    icon: <MdOutlineManageAccounts />,
  },
];

const Sidenav = () => {
  return (
    // <div className="flex">
      <div className=" bg-slate-700 w-1/5 p-1 h-[850px] hidden sm:block ">
        <div className="flex items-center py-5">
          <Image src="/assets/logo.png" alt="admin" width={40} height={40} />
          <div className="font-semibold text-white">
            <p className="">Admin</p>{" "}
            <span className="text-sm font-light text-slate-400">Emmanuel</span>
          </div>
        </div>
        {menus.map((menu) => (
          <div className="text-slate-400 flex justify-between items-center gap-2 text-sm p-2 ">
            <div className="flex items-center gap-1">
              {menu.icon}
              <p className="">{menu.name}</p>
            </div>

            <FaAngleRight />
          </div>
        ))}
      </div>
    // </div>
  );
};

export default Sidenav;
