import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Spinner from "../../../../src/components/spinner/presentation";
import Meals from "../../../../src/components/meals/presentation";
import MealsTable from "../../../../src/components/meals/presentation/mealsTable";

describe("<Meals />", () => {
    const meals = [{ code: "one" }, { code: "two" }];

    describe("when isLoading is true", () => {
        const component = shallow(<Meals meals={meals} isLoading={true} />);
        
        it("displays a <Spinner/>", () => {
            expect(component.find(Spinner).length).to.equal(1);
        });
    });

    describe("when isLoading is false", () => {
        
        const component = shallow(<Meals meals={meals} isLoading={false} />);
        
        describe("<MealsTable />", () => {
            const mealsTable = component.find(MealsTable);

            it("gets rendered", () => {
                expect(mealsTable.length).to.equal(1);
            });

            it("has the expected meals props", () => {
                expect(mealsTable.props().meals).to.equal(meals);
            });
        });
    });
});