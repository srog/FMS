import "../styles/nav.scss";

import React, { PropTypes } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";

const Nav = ({ onToggleSidebar, sidebarOpen }) => {
    return (
        <div className="nav">
            <div className="nav-overlay">
                <Header sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar} />
                <Sidebar sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar} />
            </div>
        </div>
    );
};

Nav.propTypes = {
    onToggleSidebar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired
};

export default Nav;