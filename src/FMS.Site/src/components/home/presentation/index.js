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
                <MenuLink to="/">New Game</MenuLink>
            </ul>
            <ul>
                <MenuLink to="/">Quit</MenuLink>
            </ul>
        </div>
    );
};

export default Home;