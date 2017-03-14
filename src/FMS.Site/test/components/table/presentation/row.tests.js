import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import Row from "../../../../src/components/table/presentation/row";

describe("<Row />", () => {
    
    describe("<tr>", () => {
        const component = shallow(<Row><td>Bar</td><td>foo</td></Row>);
        const tableRow = component.find("tr").first();

        it("has the expected class", () => {
            expect(tableRow.hasClass("table__row")).to.equal(true);
        });

        it("gets rendered", () => {
            expect(tableRow).to.not.equal(undefined);
        });

        it("renders the children", () => {
            expect(tableRow.contains(<td>Bar</td>)).to.equal(true);
            expect(tableRow.contains(<td>foo</td>)).to.equal(true);
        });
    });

    describe("When onClick", () => {
        const onClick = spy();
        const component = shallow(<Row onClick={onClick}><td>Bar</td><td>foo</td></Row>);
        const tableRow = component.find("tr").first();

        describe("<tr>", () => {

            it("has the expected class", () => {
                expect(tableRow.hasClass("table__row")).to.equal(true);
                expect(tableRow.hasClass("table__row--selectable")).to.equal(true);
            });

            it("gets rendered", () => {
                expect(tableRow).to.not.equal(undefined);
            });

            it("renders the children", () => {
                expect(tableRow.contains(<td>Bar</td>)).to.equal(true);
                expect(tableRow.contains(<td>foo</td>)).to.equal(true);
            });

            describe("when onClick", () => {
                beforeEach(() => {
                    tableRow.simulate("click");
                });

                it("calls onClick", () => {
                    expect(onClick.calledOnce).to.equal(true);
                });
            });
        });
    });
});