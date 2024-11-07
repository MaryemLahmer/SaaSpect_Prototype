import React from "react";
import amongUs from "../assets/amongUs.svg";
import { Link, NavLink } from "react-router-dom";
import {
  GrUpdate,
  GrCart,
  GrConfigure,
  GrDashboard,
  GrContactInfo,
  GrAnalytics,
} from "react-icons/gr";

const SidebarContent = () => {
  return (
    <div className="w-[14rem]  bg-n-8 h-screen p-5 pt-8 border-r border-n-4">
      <div className="flex h-[4rem] items-center pt-[1rem] px-2  xl:px-10 max-lg:py-4 mb-[2rem]">
        <a className="block w-[8rem] xl:mr-8" href="/overview">
          <img src={amongUs} width={60} height={60} alt="SaaSpect" />
        </a>
      </div>
      <div className="flex flex-col gap-[1.5rem] mt-[2rem]  ">
        <SidebarItem icon={<GrDashboard />} label="Overview" to="/overview" />
        <SidebarItem icon={<GrAnalytics />} label="Dashboard" to="/dashboard" />
        <SidebarItem icon={<GrContactInfo />} label="Profile" to="/Profile" />
        <SidebarItem icon={<GrUpdate />} label="Update" to="/update" />
        <SidebarItem icon={<GrConfigure />} label="Settings" to="/settings" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-4 p-2 text-white rounded-md transition-all duration-300 group ${
        isActive ? "bg-violet-600" : "hover:bg-violet-600"
      }`
    }
  >
    {icon}
    <span>{label}</span>
    <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </NavLink>
);

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SidebarContent />
    </div>
  );
};
export default Sidebar;
