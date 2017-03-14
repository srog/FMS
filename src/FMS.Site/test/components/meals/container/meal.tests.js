import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { restore } from "sinon";
import { browserHistory } from "react-router";

import MealContainer from "../../../../src/components/meals/container/meal";
import Meal from "../../../../src/components/meals/presentation/meal";

describe("<MealContainer />", () => {
    let mealData, component;

    beforeEach(() => {
        mealData = { mappedMealId: 1235 };
        component = shallow(<MealContainer meal={mealData} />);
    });

    afterEach(() => {
        restore(browserHistory);
    });

    describe("<Meal />", () => {
        let meal;

        beforeEach(() => {
            meal = component.find(Meal);
        });

        it("gets rendered", () => {
            expect(meal.length).to.equal(1);
        });

        describe("props", () => {
            let props;
            beforeEach(() => {
                props = meal.first().props();
            });

            it("meal", () => {
                expect(props.meal).to.equal(mealData);
            });
        });
    });
});