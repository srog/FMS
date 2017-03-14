import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Page from "../../../../src/components/page/presentation";
import NavContainer from "../../../../src/components/nav/container";
import PageContainer from "../../../../src/components/grid/presentation/pageContainer";

describe("<Page />", () => {
    const component = shallow(<Page><a href="foo">Bar</a></Page>);

    it("renders 1 <NavContainer />", () => {
        expect(component.contains(<NavContainer/>)).to.equal(true);
    });

    it("renders 1 <PageContainer /> with the children", () => {
        expect(component.contains(<PageContainer><a href="foo">Bar</a></PageContainer>)).to.equal(true);
    });
});