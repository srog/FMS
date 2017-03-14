import React from "react";
import Sinon from "sinon";
import { mount } from "enzyme";
import { expect } from "chai";

import Sidebar from "../../../../src/components/nav/presentation/sidebar";

describe("<Sidebar />", () => {
    var sidebarOpen, onToggleSidebar, component;
    beforeEach(() => {
        sidebarOpen = true;
        onToggleSidebar = Sinon.spy();
        component = mount(<Sidebar sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar}/>);
    });
    

    describe("props", () => {
        it("sidebarOpen", () => {
            expect(component.props().sidebarOpen).to.equal(sidebarOpen);
        });

        it("onToggleSidebar", () => {
            expect(component.props().onToggleSidebar).to.equal(onToggleSidebar);
        });
    });

    describe("renders", () => {
        it("element with class .sidebar[data-active]", () => {
            expect(component.find(".sidebar [data-active=" + sidebarOpen + "]")).to.have.length.at.least(1);
        });

        it("elements with onClick props", () => {
            expect(component.find({ onClick: onToggleSidebar })).to.have.length.at.least(1);
        });

        it("<NavLink />", () => {
            expect(component.find("NavLink")).to.have.length.at.least(1);
        });
    });
});