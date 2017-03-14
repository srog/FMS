import React from "react";
import Sinon from "sinon";
import { mount } from "enzyme";
import { expect } from "chai";

import Header from "../../../../src/components/nav/presentation/header";

describe("<Header />", () => {
    var sidebarOpen, onToggleSidebar, component;
    beforeEach(() => {
        sidebarOpen = true;
        onToggleSidebar = Sinon.spy();
        component = mount(<Header sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar}/>);
    });

    describe("has props", () => {
        it("sidebarOpen", () => {
            expect(component.props().sidebarOpen).to.equal(sidebarOpen);
        });

        it("onToggleSidebar", () => {
            expect(component.props().onToggleSidebar).to.equal(onToggleSidebar);
        });
    });

    describe("element with class .header__sidebar-trigger with data-active", () => {
        var selector;
        beforeEach(() => {
            selector = ".header__sidebar-trigger [data-active=" + ! sidebarOpen + "]";
        });
        

        it("gets rendered", () => {
            expect(component.find(selector)).to.have.length.at.least(1);
        });

        it("with onClick props", () => {
            component.find(selector).forEach((node) => {
                expect(node.props().onClick).to.equal(onToggleSidebar);
                node.simulate("click");
            });
            expect(onToggleSidebar.callCount).to.equal(component.find(selector).length);
        });
    });
});