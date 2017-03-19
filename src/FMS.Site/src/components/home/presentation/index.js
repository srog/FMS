﻿import React from "react";
import MenuLink from "./menuLink";


const Home = () => {
    return (
        <div>
        <h1>Home Page</h1>
            <ul>
                <MenuLink to="/">Home</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/teams">View All Teams</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/players">View All Players</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/match">Simulate Match</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/season">Go To Season</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/">Quit</MenuLink>
            </ul>
        </div>
    );
};

export default Home;