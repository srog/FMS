import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import MealsTable from "../../../../src/components/meals/presentation/mealsTable";
import MealContainer from "../../../../src/components/meals/container/meal";

describe("<MealsTable />", () => {
    const meals = [{ code: "one" }, { code: "two" }];
    const component = shallow(<MealsTable meals={meals} />);

    describe("<MealsContainer />", () => {
        const mealComponents = component.find(MealContainer);

        it("gets rendered for each meal", () => {
            expect(mealComponents.length).to.equal(meals.length);
        });

        describe("has props", () => {
            let props = mealComponents.map(component => component.props());

            it("meals", () => {
                props.forEach((prop, index) => {
                    expect(prop.meal).to.equal(meals[index]);
                });
            });
        });
    });
});