import React, { Component } from "react";
import Nav from "../presentation";

class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            divisionMenuOpen: false
        };
}

_onToggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
}
    
_onToggleDivisionMenu = () => {
        this.setState({ divisionMenuOpen: !this.state.divisionMenuOpen });
}

    render() {
        return(
            <Nav sidebarOpen={this.state.sidebarOpen} onToggleSidebar={this._onToggleSidebar}
                divisionMenuOpen={this.state.divisionMenuOpen} onToggleDivisionMenu={this._onToggleDivisionMenu} />
        );
    }
}

export default NavContainer;