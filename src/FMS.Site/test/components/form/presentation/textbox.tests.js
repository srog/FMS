import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Textbox from "../../../../src/components/form/presentation/textbox";

describe("<Textbox />", () => {

    describe("when disabled", () => {
        const value = "foobar";
        const component = shallow(<Textbox value={value} disabled/>);

        describe("<input>", () => {
            const input = component.find("input");
            
            it("gets rendered", () => {
                expect(input.length).to.equal(1);
            });

            it("has the expected class", () => {
                expect(input.hasClass("form__input")).to.equal(true);
            });

            it("has the expected value", () => {
                expect(input.props().value).to.equal(value);
            });

            it("has the disabled prop", () => {
                expect(input.props().disabled).to.equal(true);
            });
        });
    });

    describe("when onChange", () => {
        const value = "foobar";
        const onChange = () => {};
        const component = shallow(<Textbox value={value} onChange={onChange}/>);

        describe("<input>", () => {
            const input = component.find("input");
            
            it("gets rendered", () => {
                expect(input.length).to.equal(1);
            });

            it("has the expected class", () => {
                expect(input.hasClass("form__input")).to.equal(true);
            });

            it("has the expected value", () => {
                expect(input.props().value).to.equal(value);
            });

            it("has the onChange prop", () => {
                expect(input.props().onChange).to.equal(onChange);
            });
        });
    });

    describe("when default", () => {
        const value = "foobar";
        const component = shallow(<Textbox value={value}/>);
        
        describe("<input>", () => {
            const input = component.find("input");
            
            it("gets rendered", () => {
                expect(input.length).to.equal(1);
            });

            it("has the expected class", () => {
                expect(input.hasClass("form__input")).to.equal(true);
            });

            it("has the expected value", () => {
                expect(input.props().value).to.equal(value);
            });
        });
    });

    describe("when null", () => {
        const component = shallow(<Textbox value={null}/>);

        describe("<input>", () => {
            const input = component.find("input");

            it("displays empty string", () => {
                expect(input.props().value).to.equal("");
            });
        });

    });
});
