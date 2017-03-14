import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import Typeahead from "../../../../src/components/typeahead/presentation";
import Input from "../../../../src/components/typeahead/container/input";
import Items from "../../../../src/components/typeahead/presentation/items";

describe("<Typeahead />", () => {
    const fetchItems = spy();
    const onSelect = spy();
    const items = [{ id: 1, name: "foo" }];
    const searching = true;
    const updateValue = spy();
    let component;

    describe("When displayItems", () => {
        const state = {
            value: "value",
            displayItems: true
        };
        component = shallow(<Typeahead 
            state={state} 
            items={items} 
            searching={searching} 
            fetchItems={fetchItems} 
            onSelect={onSelect} 
            updateValue={updateValue} />);

        describe("<TypeaheadInput />", () => {
            const input = component.find(Input);

            it("should get rendered", () => {
                expect(input.length).to.equal(1);
            });

            describe("with props", () => {
                it("value", () => {
                    expect(input.props().value).to.equal(state.value);
                });

                it("updateValue", () => {
                    expect(input.props().updateValue).to.equal(updateValue);
                });

                it("fetchItems", () => {
                    expect(input.props().fetchItems).to.equal(fetchItems);
                });
            });
        });

        describe("<TypeaheadItems />", () => {
            const itemsComponent = component.find(Items);

            it("should get rendered", () => {
                expect(itemsComponent.length).to.equal(1);
            });

            describe("with props", () => {
                it("items", () => {
                    expect(itemsComponent.props().items).to.equal(items);
                });

                it("srearching", () => {
                    expect(itemsComponent.props().searching).to.equal(searching);
                });

                it("onSelect", () => {
                    expect(itemsComponent.props().onSelect).to.equal(onSelect);
                });
            });
        });
    });

    describe("When displayItems is false", () => {
        const state = {
            value: "value",
            displayItems: false
        };
        component = shallow(<Typeahead 
            state={state} 
            fetchItems={fetchItems} 
            onSelect={onSelect} 
            items={items} 
            searching={searching} 
            updateValue={updateValue}/>);

        describe("<TypeaheadInput />", () => {
            const input = component.find(Input);

            it("should get rendered", () => {
                expect(input.length).to.equal(1);
            });

            describe("with props", () => {
                it("value", () => {
                    expect(input.props().value).to.equal(state.value);
                });

                it("updateValue", () => {
                    expect(input.props().updateValue).to.equal(updateValue);
                });

                it("fetchItems", () => {
                    expect(input.props().fetchItems).to.equal(fetchItems);
                });
            });
        });

        describe("<TypeaheadItems />", () => {
            const itemsComponent = component.find(Items);

            it("should not get rendered", () => {
                expect(itemsComponent.length).to.equal(0);
            });
        });
    });
});