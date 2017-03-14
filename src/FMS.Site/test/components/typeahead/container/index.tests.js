import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import TypeaheadContainer from "../../../../src/components/typeahead/container";
import Typeahead from "../../../../src/components/typeahead/presentation";

describe("<TypeaheadContainer />", () => {
    const fetchItems = spy();
    const onSelect = spy();
    const items = [{ id: 1, name: "foo" }];
    const searching = true;
    const value = "value";
    const minChars = 3;
    const component = shallow(<TypeaheadContainer fetchItems={fetchItems} onSelect={onSelect} items={items} searching={searching} value={value} minChars={minChars} />);

    describe("<Typeahead/>", () => {
        const nav = component.find(Typeahead);

        it("gets rendered", () => {
            expect(nav.length).to.equal(1);
        });

        describe("has props", () => {
            const props = nav.first().props();

            it("state", () => {
                expect(props.state).to.eql({ displayItems: false, value: value, itemSelected: false });
            });
            
            it("items", () => {
                expect(props.items).to.equal(items);
            });

            it("searching", () => {
                expect(props.searching).to.equal(searching);
            });

            it("fetchItems", () => {
                expect(props.fetchItems).to.not.equal(undefined);
            });

            it("onSelect", () => {
                expect(props.onSelect).to.not.equal(undefined);
            });

            it("updateValue", () => {
                expect(props.onSelect).to.not.equal(undefined);
            });
        });

        describe("when updateValue", () => {
            const newValue = "new value";
            beforeEach(() => {
                nav.props().updateValue({ target: { value: newValue } });
            });

            it("changes the value in the state", () => {
                expect(component.state().value).to.equal(newValue);
            });

            it("changes itemSelected in the state to false", () => {
                expect(component.state().itemSelected).to.equal(false);
            });
        });

        describe("when onSelect", () => {
            const newValue = { name: "foobar" };
            beforeEach(() => {
                nav.props().onSelect(newValue);
            });

            it("changes the value in the state", () => {
                expect(component.state().value).to.equal(newValue.name);
            });

            it("changes itemSelected in the state to true", () => {
                expect(component.state().itemSelected).to.equal(true);
            });

            it("calls onSelect", () => {
                expect(onSelect.calledWith(newValue)).to.equal(true);
            });
        });

        describe("when fetchItems", () => {

            describe("When itemSelected is false", () => {
                describe("new value is larger than minChars", () => {
                    const newValue = "foobar";
                    beforeEach(() => {
                        component.setState({ value: newValue, itemSelected: false });
                        nav.props().fetchItems();
                    });

                    it("calls fetchItems", () => {
                        expect(fetchItems.calledWith(newValue)).to.equal(true);
                    });

                    it("sets displayItems in state to true", () => {
                        expect(component.state().displayItems).to.equal(true);
                    });
                });

                describe("new value is smaller than minChars", () => {
                    const newValue = "a";
                    beforeEach(() => {
                        component.setState({ value: newValue, itemSelected: false });
                        nav.props().fetchItems();
                    });

                    it("sets displayItems in state to false", () => {
                        expect(component.state().displayItems).to.equal(false);
                    });
                });
            });

            
            describe("When itemSelected is true", () => {
                describe("new value is larger than minChars", () => {
                    const newValue = "foobar";
                    beforeEach(() => {
                        component.setState({ value: newValue, itemSelected: true });
                        nav.props().fetchItems();
                    });

                    it("sets displayItems in state to false", () => {
                        expect(component.state().displayItems).to.equal(false);
                    });
                });

                describe("new value is smaller than minChars", () => {
                    const newValue = "a";
                    beforeEach(() => {
                        component.setState({ value: newValue, itemSelected: true });
                        nav.props().fetchItems();
                    });

                    it("sets displayItems in state to false", () => {
                        expect(component.state().displayItems).to.equal(false);
                    });
                });
            });
        });
    });
});