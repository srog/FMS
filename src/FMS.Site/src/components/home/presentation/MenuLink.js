import "../styles/menu.scss";

import React, { PropTypes } from "react";
import { Link } from "react-router";

const MenuLink = ({ to, children }) => {
    return (
        <li className="menu__list__item">
            <Link 
                to={to} 
                className="sidebar__link" 
                activeClassName="active" 
            >
                {children}
            </Link>
        </li>
    );
};

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default MenuLink;