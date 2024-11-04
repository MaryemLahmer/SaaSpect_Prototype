// src/Sidebar.jsx
import React from "react";
import { GrUpdate, GrCart, GrConfigure, GrDashboard, GrContactInfo} from "react-icons/gr";

const Sidebar = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <SidebarContent />

                {/* Main Area */}
                <MainArea />
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-violet-800 to-purple-900 text-white p-5">
            <h1 className="text-2xl font-semibold">Logo</h1>
            {/* Add banner menus here */}
        </div>
    );
};

const SidebarContent = () => {
    return (
        <div className="w-64 bg-gradient-to-b from-violet-700 to-violet-900 h-screen p-5 pt-8">
            {/* Sidebar Items */}
            <div className="flex flex-col gap-4 mt-10">
                <SidebarItem icon={<GrDashboard />} label="Dashboard" />
                <SidebarItem icon={<GrContactInfo />} label="Profile" />
                <SidebarItem icon={<GrUpdate />} label="Update" />
                <SidebarItem icon={<GrCart />} label="Pricing" />
                <SidebarItem icon={<GrConfigure />} label="Settings" />
            </div>
        </div>
    );
};

const MainArea = () => {
    return (
        <div className="flex-1 p-7 bg-gray-100">
            <h1 className="text-2xl font-semibold">Main Content</h1>
        </div>
    );
};

const SidebarItem = ({ icon, label }) => (
    <div
        className="flex items-center gap-4 p-2 text-white hover:bg-violet-600 rounded-md transition-all duration-300 group"
        style={{ position: 'relative' }}
    >
        {icon}
        <span>{label}</span>
        <div
            className="absolute right-0 top-0 bottom-0 w-[4px] bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div className="group-hover:block hidden absolute left-full top-1/2 transform -translate-y-1/2">
            <div className="w-[8px] h-[8px] bg-red-500 rotate-45 origin-center"></div>
        </div>
    </div>
);


export default Sidebar;
