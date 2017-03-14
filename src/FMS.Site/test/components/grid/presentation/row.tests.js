import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Row from "../../../../src/components/grid/presentation/row";

describe("<Row />", () => {
    const component = shallow(<Row><a href="foo"></a></Row>);

    describe("<div>", () => {
        const div = component.find("div");
        it("gets rendered", () => {
            expect(div.length).to.equal(1);
        });

        it("has class .row", () => {
            expect(div.hasClass("row")).to.be.true;
        });

        it("has children", () => {
            expect(div.contains(<a href="foo"></a>)).to.equal(true);
        });
    });
});