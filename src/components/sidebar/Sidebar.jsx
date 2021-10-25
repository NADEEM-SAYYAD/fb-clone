import React from "react"
import SidebarTop from "./SidebarTop"
import SidebarBottom from "./SidebarBottom"
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarTop />
            <SidebarBottom />
        </div>
    );
};
export default Sidebar;
