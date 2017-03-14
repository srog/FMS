import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Container from "../../../../src/components/grid/presentation/container";

describe("<Container />", () => {
    const component = shallow(<Container><a href="foo"></a></Container>);

    describe("<div>", () => {
        const div = component.find("div");
        it("gets rendered", () => {
            expect(div.length).to.equal(1);
        });

        it("hasClass .container", () => {
            expect(div.hasClass("container")).to.be.true;
        });

        it("has children ", () => {
            expect(div.contains(<a href="foo"></a>)).to.equal(true);
        });
    });
});