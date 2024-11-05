import React from "react";
import amongUs from "../assets/amongUs.svg";
import { Link } from "react-router-dom";
import {
  GrUpdate,
  GrCart,
  GrConfigure,
  GrDashboard,
  GrContactInfo,
} from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SidebarContent />
    </div>
  );
};

const SidebarContent = () => {
  return (
    <div className="w-[14rem]  bg-n-8 h-screen p-5 pt-8 border-r border-n-4">
      <div className="flex h-[4rem] items-center pt-[1rem] px-2  xl:px-10 max-lg:py-4 mb-[2rem]">
        <a className="block w-[8rem] xl:mr-8" href="#hero">
          <img src={amongUs} width={60} height={60} alt="SaaSpect" />
        </a>
      </div>
      <div className="flex flex-col gap-[1.5rem] mt-[2rem]  ">
        <SidebarItem icon={<GrDashboard />} label="Overview" to="/overview" />
        <SidebarItem icon={<GrContactInfo />} label="Profile" to="/Scan" />
        <SidebarItem icon={<GrUpdate />} label="Update" to="/update" />
        <SidebarItem icon={<GrConfigure />} label="Settings" to="/settings" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, to }) => (
  <Link
    to={to}
    className="flex items-center gap-4 p-2 text-white hover:bg-violet-600 rounded-md transition-all duration-300 group"
  >
    {icon}
    <span>{label}</span>
    <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="group-hover:block hidden absolute left-full top-1/2 transform -translate-y-1/2">
      <div className="w-[8px] h-[8px] bg-red-500 rotate-45 origin-center"></div>
    </div>
  </Link>
);

export default Sidebar;
