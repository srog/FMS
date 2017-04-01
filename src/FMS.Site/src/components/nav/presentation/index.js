import "../styles/nav.scss";

import React, { PropTypes } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import DivisionMenu from "./divisionMenu";

const Nav = ({ onToggleSidebar, sidebarOpen, onToggleDivisionMenu, divisionMenuOpen }) => {
    return (
        <div className="nav">
            <div className="nav-overlay">
                <Header sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar}
                        divisionMenuOpen={divisionMenuOpen} onToggleDivisionMenu={onToggleDivisionMenu} />
                <Sidebar sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar} />
                <DivisionMenu divisionMenuOpen={divisionMenuOpen} onToggleDivisionMenu={onToggleDivisionMenu} />
            </div>
        </div>
    );
};

Nav.propTypes = {
    onToggleSidebar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
    onToggleDivisionMenu: PropTypes.func.isRequired,
    divisionMenuOpen: PropTypes.bool.isRequired
};

export default Nav;