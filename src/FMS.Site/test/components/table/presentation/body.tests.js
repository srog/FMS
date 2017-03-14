import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Body from "../../../../src/components/table/presentation/body";

describe("<Body />", () => {
    const component = shallow(<Body><tr>Bar</tr><tr>foo</tr></Body>);

    describe("<tbody>", () => {
        const tbody = component.find("tbody").first();

        it("gets rendered", () => {
            expect(tbody).to.not.equal(undefined);
        });

        it("renders the children", () => {
            expect(tbody.contains(<tr>Bar</tr>)).to.equal(true);
            expect(tbody.contains(<tr>foo</tr>)).to.equal(true);
        });
    });
});