import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import Item from "../../../../src/components/typeahead/presentation/item";

describe("<TypeaheadItem />", () => {
    const item = { name: "foo" };
    const onSelect = spy();
    const component = shallow(<Item item={item} onSelect={onSelect}/>);

    describe("<li>", () => {
        let li;
        beforeEach(() => {
            li = component.find("li");
            li.simulate("click");
        });

        it("gets rendered", () => {
            expect(li.length).to.equal(1);
        });

        it("calls onSelect", () => {
            expect(onSelect.calledWith(item)).to.equal(true);
        });

        describe("<a>", () => {
            let a;
            beforeEach(() => {
                a = li.find("a");
            });

            it("gets rendered", () => {
                expect(a.length).to.equal(1);
            });

            it("has text", () => {
                expect(a.text()).to.equal(item.name);
            });
        });
    });
});