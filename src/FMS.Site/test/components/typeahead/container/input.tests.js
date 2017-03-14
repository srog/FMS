import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import TypeaheadInputContainer from "../../../../src/components/typeahead/container/input";
import TypeaheadInput from "../../../../src/components/typeahead/presentation/input";

describe("<TypeaheadInputContainer />", () => {
    const fetchItems = spy();
    const value = "value";
    const updateValue = spy();
    const delay = 10;

    let component;
    beforeEach(() => {
        component = mount(<TypeaheadInputContainer fetchItems={fetchItems} value={value} updateValue={updateValue} delay={delay} />);
    });
        
    describe("<TypeaheadInput />", () => {
        let input;
        beforeEach(() => {
            input = component.find(TypeaheadInput);
        });
        it("gets rendered", () => {
            expect(input.length).to.equal(1);
        });

        describe("has props", () => {
            it("value", () => {
                expect(input.props().value).to.equal(value);
            });

            it("updateValue", () => {
                expect(input.props().updateValue).to.equal(updateValue);
            });
        });
    });

    describe("when value is updated", () => {
        const newValue = "newvalue";
        beforeEach(() => {
            component.setProps({ value: newValue });
        });

        it("fetchItems is called", (done) => {
            setTimeout(() => {
                expect(fetchItems.called).to.equal(true);
                done();
            }, delay);
        });
    });
});