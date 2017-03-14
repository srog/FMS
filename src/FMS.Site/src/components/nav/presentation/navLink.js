import "../styles/sidebar.scss";

import React, { PropTypes } from "react";
import { Link } from "react-router";

const NavLink = ({ to, children, onlyActiveOnIndex, onClick }) => {
    return (
        <li className="sidebar__list__item">
            <Link 
                to={to} 
                className="sidebar__link" 
                activeClassName="active" 
                onlyActiveOnIndex={onlyActiveOnIndex} 
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    );
};

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onlyActiveOnIndex: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export default NavLink;