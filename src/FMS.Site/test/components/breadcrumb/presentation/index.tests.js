import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { Link } from "react-router";

import Breadcrumb from "../../../../src/components/breadcrumb/presentation";

describe("<Breadcrumb />", () => {
    const to = "/test";
    const children = "Test";
    const component = mount(<Breadcrumb to={to}>{children}</Breadcrumb>);

    describe("<Link />", () => {
        const link = component.find(Link).first();

        it("has prop to", () => {
            expect(link.props().to).to.equal(to);
        });

        it("has expected classNme", () => {
            expect(link.hasClass("breadcrumb")).to.equal(true);
        });

        it("has children", () => {
            expect(link.text()).to.equal(children);
        });
    });
});