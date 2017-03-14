import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import PageContainer from "../../../../src/components/grid/presentation/pageContainer";

describe("<PageContainer />", () => {
    const component = shallow(<PageContainer><a href="foo"></a></PageContainer>);

    describe("<div>", () => {
        const div = component.find("div");

        it("gets rendered", () => {
            expect(div.length).to.equal(1);
        });

        it("has class .page-container", () => {
            expect(div.hasClass("page-container")).to.be.true;
        });

        describe("<Container>", () => {
            const container = div.find("Container");

            it("gets rendered", () => {
                expect(container.length).to.equal(1);
            });

            it("has children", () => {
                expect(container.contains(<a href="foo"></a>)).to.equal(true);
            });
        });
    });
});