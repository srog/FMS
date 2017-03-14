import "../styles/menu.scss";

import React, { PropTypes } from "react";
import { Link } from "react-router";

const MenuLink = ({ to, children, quit, onClick }) => {
    return (
        <li className="menu__list__item">
            <Link 
                to={to} 
                className="sidebar__link" 
                activeClassName="active" 
                quit={quit} 
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    );
};

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    quit: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export default MenuLink;