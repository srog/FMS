import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Label from "../../../../src/components/form/presentation/label";

describe("<Label />", () => {
    const component = shallow(<Label>foo</Label>);

    describe("<label>", () => {
        const div = component.find("label");

        it("gets rendered", () => {
            expect(div.length).to.equal(1);
        });

        it("has the expected class", () => {
            expect(div.first().hasClass("form__label")).to.equal(true);
        });

        it("contains the children", () => {
            expect(div.text()).to.equal("foo");
        });
    });
});
