import React from "react";
import { BsSearch } from "react-icons/bs";

const Shipments = () => {
  return (
    <div>
      <form action="">
        <div className="flex items-center justify-center">
          <input
            type="text"
            name="trackingid"
            id="trackingid"
            placeholder="tracking number"
            className="border outline-none p-1 text-slate-600 rounded-l"
          />
          <div className="flex bg-blue-700 h-full p-2 rounded-r text-white font-extrabold">
            <BsSearch className="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Shipments;
