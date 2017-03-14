import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Form from "../../../../src/components/form/presentation/";

describe("<Form />", () => {
    const component = shallow(<Form><div>foo</div><div>bar</div></Form>);

    describe("<form>", () => {
        const form = component.find("form");

        it("gets rendered", () => {
            expect(form.length).to.equal(1);
        });

        it("has the expected class", () => {
            expect(form.first().hasClass("form")).to.equal(true);
        });

        it("contains the children", () => {
            expect(form.contains(<div>foo</div>)).to.equal(true);
            expect(form.contains(<div>bar</div>)).to.equal(true);
        });
    });
});
