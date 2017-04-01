import "../styles/divisionmenu.scss";
import React, { PropTypes } from "react";

import NavLink from "./navLink";
import * as UrlConstants from "../../../constants/urlConstants";


const DivisionMenu = ({ onToggleDivisionMenu, divisionMenuOpen }) => {
    return (
        <div>
            <div className="divisionmenu" data-active={divisionMenuOpen}>
                <a className="divisionmenu__close" onClick={onToggleDivisionMenu}>
                    Divisions
                </a>
                 <ul className="divisionmenu__list" >
                    <NavLink to={UrlConstants.DIVISION({ id: 1 })} onClick={onToggleDivisionMenu} >Division 1 </NavLink>
                </ul>
                <ul className="divisionmenu__list"  >
                    <NavLink to={UrlConstants.DIVISION({ id: 2 })} onClick={onToggleDivisionMenu} >Division 2 </NavLink>
                </ul>
                <ul className="divisionmenu__list"  >
                    <NavLink to={UrlConstants.DIVISION({ id: 3 })} onClick={onToggleDivisionMenu} >Division 3 </NavLink>
                </ul>
                <ul className="divisionmenu__list"  >
                    <NavLink to={UrlConstants.DIVISION({ id: 4 })} onClick={onToggleDivisionMenu} >Division 4 </NavLink>
                </ul>
            </div>
        </div>
    );
};

DivisionMenu.propTypes = {
    onToggleDivisionMenu: PropTypes.func.isRequired,
    divisionMenuOpen: PropTypes.bool.isRequired
};

export default DivisionMenu;