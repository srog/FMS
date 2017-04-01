import "../styles/header.scss";
import React, { PropTypes } from "react";
import { Link } from "react-router";

import Container from "../../grid/presentation/container";
import Row from "../../grid/presentation/row";
import Column from "../../grid/presentation/column";

const Header = ({ onToggleSidebar, sidebarOpen, onToggleDivisionMenu, divisionMenuOpen }) => {
    return (
        <Container>
            <Row>
                <Column size={6}>
                    <Link to="/" className="header__logo">
                        FMS
                    </Link>
                </Column>
                <Column size={6} alignRight>
                    <a className="header__sidebar-trigger" data-active={!sidebarOpen} onClick={onToggleSidebar}>
                        <span className="header__sidebar-text">Menu</span>
                    </a>
                </Column>
            </Row>

            <Row>
                <Column size={4}>
                    <Link to="/season" className="header__sidebar-text">
                        Season Home
                    </Link>
                </Column>
                <Column size={4}>
                    <a className="header__divisionMenu-trigger" 
                        data-active={!divisionMenuOpen} 
                        onClick={onToggleDivisionMenu}>
                        <span className="header__divisionMenu-text">Divisions</span>
                    </a>
                </Column>
                <Column size={4}>
                    <Link to="/matches/0" className="header__sidebar-text">
                        Matches
                    </Link>
                </Column>
                <Column size={4}>
                    <Link to="/players" className="header__sidebar-text">
                        All Players
                    </Link>
                </Column>
            </Row>
        </Container>
    );
};

Header.propTypes = {
    onToggleSidebar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
    onToggleDivisionMenu: PropTypes.func.isRequired,
    divisionMenuOpen: PropTypes.bool.isRequired
};

export default Header;