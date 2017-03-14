import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import NavContainer from "../../../../src/components/nav/container";
import Nav from "../../../../src/components/nav/presentation";

describe("<NavContainer />", () => {
    const component = shallow(<NavContainer />);

    describe("<Nav/>", () => {
        const nav = component.find(Nav);

        it("gets rendered", () => {
            expect(nav.length).to.equal(1);
        });

        describe("has props", () => {
            const props = nav.first().props();

            it("sidebarOpen", () => {
                expect(props.sidebarOpen).to.equal(component.state().sidebarOpen);
            });

            it("onToggleSidebar", () => {
                expect(props.onToggleSidebar).to.equal(component.props().onToggleSidebar);
            });
        });
    });

    describe("state", () => {
        it("sidebarOpen", () => {
            expect(component.state().sidebarOpen).to.equal(false);
        });

        describe("_onToggleSidebar", () => {
            describe("when sidebarOpen is false", () => {
                beforeEach(() => {
                    component.setState({ sidebarOpen: false });
                    component.props().onToggleSidebar();
                });

                it("sidebarOpen should be true", () => {
                    expect(component.state().sidebarOpen).to.equal(true);
                });
            });
            describe("when sidebarOpen is true", () => {
                beforeEach(() => {
                    component.setState({ sidebarOpen: true });
                    component.props().onToggleSidebar();
                });

                it("sidebarOpen should be false", () => {
                    expect(component.state().sidebarOpen).to.equal(false);
                });
            });
        });
    });
});