import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import Input from "../../../../src/components/typeahead/presentation/input";

describe("<TypeaheadInput />", () => {
    const value = "value";
    const updateValue = spy();
    const component = shallow(<Input value={value} updateValue={updateValue}/>);

    describe("<input> gets rendered", () => {
        expect(component.contains(<input type="text" value={value} onChange={updateValue}/>)).to.equal(true);
    });
});