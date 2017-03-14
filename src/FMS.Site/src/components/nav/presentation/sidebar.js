import "../styles/sidebar.scss";
import Avatar from "../images/avatar.jpg";
import React, { PropTypes } from "react";

import NavLink from "./navLink";

const Sidebar = ({ onToggleSidebar, sidebarOpen }) => {
    return (
        <div>
            <div className="sidebar" data-active={sidebarOpen}>
                <a className="sidebar__close" onClick={onToggleSidebar}>
                    <span className="sidebar__close-text">Close</span>
                </a>
                <div className="sidebar__user">
                    <img src={Avatar} alt="avatar image" className="sidebar__avatar" width="114"/>
                    <p className="sidebar__logged-in">
                        User Name Here
                    </p>
                    <a href="#" className="sidebar__log-out">Logout</a>
                </div>
                <ul className="sidebar__list">
                    <NavLink to="/" onClick={onToggleSidebar} onlyActiveOnIndex>Home</NavLink>
                </ul>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    onToggleSidebar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired
};

export default Sidebar;