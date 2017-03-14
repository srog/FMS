import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Head from "../../../../src/components/table/presentation/head";

describe("<Body />", () => {
    const component = shallow(<Head><tr>Bar</tr><tr>foo</tr></Head>);

    describe("<thead>", () => {
        const tbody = component.find("thead").first();

        it("gets rendered", () => {
            expect(tbody).to.not.equal(undefined);
        });

        it("renders the children", () => {
            expect(tbody.contains(<tr>Bar</tr>)).to.equal(true);
            expect(tbody.contains(<tr>foo</tr>)).to.equal(true);
        });
    });
});