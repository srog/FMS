import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Meal from "../../../../src/components/meals/presentation/meal";
import Data from "../../../../src/components/table/presentation/data";
import Row from "../../../../src/components/table/presentation/row";

describe("<Meal />", () => {
    const meal = { mappedMealName: "foo", reservWireId: 1234, code: "one", category: "one", staticMealName: "bar" };
    const component = shallow(<Meal meal={meal} />);

    describe("<Row /> has props", () => {
        const row = component.find(Row).first();

        describe("onClick", () => {

            beforeEach(() => {
                row.simulate("click");
            });
        });
    });

    it("it renders mappedMealName inside <Data />", () => {
        expect(component.contains(<Data>{meal.mappedMealName}</Data>)).to.equal(true);
    });
    it("it renders reservWireId inside <Data />", () => {
        expect(component.contains(<Data>{meal.reservWireId}</Data>)).to.equal(true);
    });
    it("it renders code inside <Data />", () => {
        expect(component.contains(<Data secondary>{meal.code}</Data>)).to.equal(true);
    });
    it("it renders category inside <Data />", () => {
        expect(component.contains(<Data secondary>{meal.category}</Data>)).to.equal(true);
    });
    it("it renders staticMealName inside <Data />", () => {
        expect(component.contains(<Data secondary>{meal.staticMealName}</Data>)).to.equal(true);
    });
});