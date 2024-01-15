import Image from "next/image";
import Link from "next/link";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="font-semibold bg-white sticky top-0">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <GrUserAdmin />
          Admin <span className="text-red-800">Dashboard</span>
        </div>

        <div className="">
        <IoIosNotifications />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
