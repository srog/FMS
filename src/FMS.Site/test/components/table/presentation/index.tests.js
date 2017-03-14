import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Table from "../../../../src/components/table/presentation";

describe("<Table />", () => {
    const component = shallow(<Table><a href="foo">Bar</a><a href="bar">foo</a></Table>);

    describe("<table>", () => {
        const table = component.find("table").first();

        it("gets rendered", () => {
            expect(table).to.not.equal(undefined);
        });

        it("renders the children", () => {
            expect(table.contains(<a href="foo">Bar</a>)).to.equal(true);
            expect(table.contains(<a href="bar">foo</a>)).to.equal(true);
        });
    });
});