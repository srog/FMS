import "../styles/header.scss";
import React, { PropTypes } from "react";
import { Link } from "react-router";

import Container from "../../grid/presentation/container";
import Row from "../../grid/presentation/row";
import Column from "../../grid/presentation/column";

const Header = ({ onToggleSidebar, sidebarOpen }) => {
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
            </Row>
        </Container>
    );
};

Header.propTypes = {
    onToggleSidebar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired
};

export default Header;