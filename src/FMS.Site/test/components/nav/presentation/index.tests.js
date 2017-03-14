import React from "react";
import Sinon from "sinon";
import { mount } from "enzyme";
import { expect } from "chai";

import Nav from "../../../../src/components/nav/presentation";

describe("<Nav />", () => {
    var sidebarOpen, onToggleSidebar, component;

    beforeEach(() => {
        sidebarOpen = true;
        onToggleSidebar = Sinon.spy();
        component = mount(<Nav sidebarOpen={sidebarOpen} onToggleSidebar={onToggleSidebar}/>);
    });
    

    describe("has props", () => {
        it("sidebarOpen", () => {
            expect(component.props().sidebarOpen).to.equal(sidebarOpen);
        });

        it("onToggleSidebar", () => {
            expect(component.props().onToggleSidebar).to.equal(onToggleSidebar);
        });
    });

    describe("<Header />", () => {
        var header;
        beforeEach(() => {
            header = component.find("Header");
        });

        it("gets rendred", () => {
            expect(header.length).to.equal(1);
        });

        it("has prop sidebarOpen", () => {
            expect(header.first().props().sidebarOpen).to.equal(sidebarOpen);
        });

        describe("onToggleSidebar", () => {
            it("is prop", () => {
                expect(header.first().props().onToggleSidebar).to.equal(onToggleSidebar);
            });

            it("calls onToggleSidebar", () => {
                header.first().props().onToggleSidebar();
                expect(onToggleSidebar.calledOnce).to.equal(true);
            });
        });
    });

    describe("<Sidebar />", () => {
        var sidebar;
        beforeEach(() => {
            sidebar = component.find("Sidebar");
        });

        it("gets rendered", () => {
            expect(sidebar.length).to.equal(1);
        });

        it("has prop sidebarOpen", () => {
            expect(sidebar.first().props().sidebarOpen).to.equal(sidebarOpen);
        });

        describe("onToggleSidebar", () => {
            it("is prop", () => {
                expect(sidebar.first().props().onToggleSidebar).to.equal(onToggleSidebar);
            });

            it("calls onToggleSidebar", () => {
                component.find("Sidebar").first().props().onToggleSidebar();
                expect(onToggleSidebar.calledOnce).to.equal(true);
            });
        });
    });
});