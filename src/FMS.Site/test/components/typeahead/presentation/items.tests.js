import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import Items from "../../../../src/components/typeahead/presentation/items";
import Item from "../../../../src/components/typeahead/presentation/item";

describe("<TypeaheadItems />", () => {
    const items = [{ id:1, name: "foo" }, { id:2, name: "bar" }];
    const searchingText = "Searching...";
    const onSelect = spy();

    describe("When not searching", () => {
        const component = shallow(<Items items={items} searchingText={searchingText} onSelect={onSelect} searching={false}/>);

        describe("<TypeaheadItem/>", () => {
            it("renders for each item", () => {
                items.forEach(item => {
                    expect(component.contains(<Item key={item.id} item={item} onSelect={onSelect}/>)).to.equal(true);
                });
            });
        });
    });

    describe("when searching", () => {
        const component = shallow(<Items items={items} searchingText={searchingText} onSelect={onSelect} searching={true}/>);

        describe("<div>{searchingtext}</div>", () => {
            it("gets rendered", () => {
                expect(component.contains(<div>{searchingText}</div>)).to.equal(true);
            });
        });
    });
});