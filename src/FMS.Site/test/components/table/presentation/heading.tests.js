import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Heading from "../../../../src/components/table/presentation/heading";

describe("<Data/>", () => {
    

    describe("with secondary", () => {
        const component = shallow(<Heading secondary>1</Heading>);
        describe("<th>", () => {
            const tableHead = component.find("th").first();

            it("gets rendered", () => {
                expect(tableHead).to.not.equal(undefined);
            });

            it("has the expected classNames", () => {
                expect(tableHead.hasClass("table__heading")).to.equal(true);
                expect(tableHead.hasClass("table__heading--secondary")).to.equal(true);
            });

            it("renders the children as text", () => {
                expect(tableHead.text()).to.equal("1");
            });
        });
    });

    describe("without secondary", () => {
        const component = shallow(<Heading>1</Heading>);
        describe("<th>", () => {
            const tableHead = component.find("th").first();

            it("gets rendered", () => {
                expect(tableHead).to.not.equal(undefined);
            });

            it("has the expected className", () => {
                expect(tableHead.hasClass("table__heading")).to.equal(true);
            });

            it("renders the children as text", () => {
                expect(tableHead.text()).to.equal("1");
            });
        });
    });
});