import React, { Component } from "react";
import Nav from "../presentation";

class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
    }

    _onToggleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    render() {
        return(
            <Nav sidebarOpen={this.state.sidebarOpen} onToggleSidebar={this._onToggleSidebar} />
        );
    }
}

export default NavContainer;