import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Data from "../../../../src/components/table/presentation/data";

describe("<Data/>", () => {
    

    describe("with secondary", () => {
        const component = shallow(<Data secondary>1</Data>);
        describe("<td>", () => {
            const tableData = component.find("td").first();

            it("gets rendered", () => {
                expect(tableData).to.not.equal(undefined);
            });

            it("has the expected classNames", () => {
                expect(tableData.hasClass("table__data")).to.equal(true);
                expect(tableData.hasClass("table__data--secondary")).to.equal(true);
            });

            it("renders the children as text", () => {
                expect(tableData.text()).to.equal("1");
            });
        });
    });

    describe("without secondary", () => {
        const component = shallow(<Data>1</Data>);
        describe("<td>", () => {
            const tableData = component.find("td").first();

            it("gets rendered", () => {
                expect(tableData).to.not.equal(undefined);
            });

            it("has the expected className", () => {
                expect(tableData.hasClass("table__data")).to.equal(true);
            });

            it("renders the children as text", () => {
                expect(tableData.text()).to.equal("1");
            });
        });
    });

    describe("when no data", () => {
        const component = shallow(<Data></Data>);
        describe("<td>", () => {
            const tableData = component.find("td").first();

            it("renders nothing", () => {
                expect(tableData.text()).to.equal("");
            });
        });
    });
});