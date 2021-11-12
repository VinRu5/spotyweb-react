import React from "react";
import SidebarContent from "./SidebarContent";
import SidebarProfile from "./SidebarProfile";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarContent/>
            <SidebarProfile/>
        </div>
    );
}