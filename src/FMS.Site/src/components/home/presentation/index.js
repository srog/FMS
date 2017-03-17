import React from "react";
import MenuLink from "./menuLink";


const Home = () => {
    return (
        <div>
        <h1>Home Page</h1>
            <ul>
                <MenuLink to="/">Home</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/">Options</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/division/1">View Division 1</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/division/2">View Division 2</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/teams">View All Teams</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/team/1">View Team 1</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/player/1">View Player 1</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/">Quit</MenuLink>
            </ul>
        </div>
    );
};

export default Home;