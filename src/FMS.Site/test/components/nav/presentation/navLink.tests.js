import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { Link } from "react-router";
import { spy } from "sinon";

import NavLink from "../../../../src/components/nav/presentation/navLink";

describe("<NavLink />", () => {
    const to = "/test";
    const children = "Test";
    const onClick = spy();
    const component = mount(<NavLink to={to} onlyActiveOnIndex onClick={onClick}>{children}</NavLink>);

    describe("<li class='sidebar__list__item'>", () => {
        const li = component.find("li.sidebar__list__item");

        it("gets rendered", () => {
            expect(li.length).to.equal(1);
        });

        describe("<Link />", () => {
            const link = li.first().find(Link);

            it("gets rendered", () => {
                expect(link.length).to.equal(1);
            });

            it("has prop to", () => {
                expect(link.props().to).to.equal(to);
            });

            it("has prop onlyActiveOnIndex", () => {
                expect(link.props().onlyActiveOnIndex).to.equal(true);
            });

            it("has prop activeClassName", () => {
                expect(link.props().activeClassName).to.equal("active");
            });

            it("has prop onClick", () => {
                expect(link.props().onClick).to.equal(onClick);
            });

            it("has children", () => {
                expect(link.text()).to.equal(children);
            });
        });
    });
});