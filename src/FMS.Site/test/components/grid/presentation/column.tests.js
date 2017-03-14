import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Column from "../../../../src/components/grid/presentation/column";

describe("<Column />", () => {
    describe("when alignRight is true", () => {
        const size = 5;
        const alignRight = true;
        const component = shallow(<Column size={size} alignRight={alignRight}><a href="foo"></a></Column>);

        describe("<div>", () => {
            const div = component.find("div");

            it("gets rendered", () => {
                expect(div.length).to.equal(1);
            });

            it("has class .column-{size}", () => {
                expect(div.hasClass(`column-${size}`)).to.equal(true);
            });

            it("has class column-{size}--align-right", () => {
                expect(div.hasClass(`column-${size}--align-right`)).to.equal(true);
            });

            it("has children", () => {
                expect(div.contains(<a href="foo"></a>)).to.equal(true);
            });
        });
    });

    describe("when alignRight is false", () => {
        const size = 5;
        const alignRight = false;
        const component = shallow(<Column size={size} alignRight={alignRight}><a href="foo"></a></Column>);

        describe("<div>", () => {
            const div = component.find("div");

            it("gets rendered", () => {
                expect(div.length).to.equal(1);
            });

            it("has class .column-{size}", () => {
                expect(div.hasClass(`column-${size}`)).to.equal(true);
            });

            it("does not have class .column-{size}--align-right", () => {
                expect(div.hasClass(`column-${size}--align-right`)).to.equal(false);
            });

            it("has children", () => {
                expect(div.contains(<a href="foo"></a>)).to.equal(true);
            });
        });
    });

    describe("when alignRight is not provided", () => {
        const size = 5;
        const component = shallow(<Column size={size}><a href="foo"></a></Column>);

        describe("<div>", () => {
            const div = component.find("div");
            it("gets rendered", () => {
                expect(div.length).to.equal(1);
            });

            it("has class .column-{size}", () => {
                expect(div.hasClass(`column-${size}`)).to.equal(true);
            });

            it("does not have class .column-{size}--align-right", () => {
                expect(div.hasClass(`column-${size}--align-right`)).to.equal(false);
            });

            it("with children", () => {
                expect(div.contains(<a href="foo"></a>)).to.equal(true);
            });
        });
    });
});