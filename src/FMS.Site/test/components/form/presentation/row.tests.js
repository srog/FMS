import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Row from "../../../../src/components/form/presentation/row";

describe("<FormRow />", () => {
    const component = shallow(<Row><label>foo</label><label>bar</label></Row>);

    describe("<div>", () => {
        const div = component.find("div");

        it("gets rendered", () => {
            expect(div.length).to.equal(1);
        });

        it("has the expected class", () => {
            expect(div.first().hasClass("form__row")).to.equal(true);
        });

        it("contains the children", () => {
            expect(div.contains(<label>foo</label>)).to.equal(true);
            expect(div.contains(<label>bar</label>)).to.equal(true);
        });
    });
});
