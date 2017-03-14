import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import { MealsContainer } from "../../../../src/components/meals/container";
import Meals from "../../../../src/components/meals/presentation";

describe("<MealsContainer />", () => {
    let getMeals, mealsData, component;

    beforeEach(() => {
        getMeals = spy();

        mealsData = {
            isFetching: false,
            data: [{ mappedMealId: 1234, mappedMealName: "foo", code: "a" }, { mappedMealId: 4321, mappedMealName: "bar", code: "b" }]
        };

        component = mount(<MealsContainer getMeals={getMeals} meals={mealsData} />);
    });
    

    describe("on mount", () => {
        beforeEach(() => {
            component.mount();
        });

        it("calls getMeals", () => {
            expect(getMeals.calledOnce).to.equal(true);
        });
    });

    describe("<Meals />", () => {
        let meals;

        beforeEach(() => {
            meals = component.find(Meals);
        });

        it("gets rendered", () => {
            expect(meals.length).to.equal(1);
        });

        describe("has props", () => {
            let props;
            beforeEach(() => {
                props = meals.first().props();
            });

            it("meals", () => {
                expect(props.meals).to.equal(mealsData.data);
            });

            it("isLoading", () => {
                expect(props.isLoading).to.equal(mealsData.isFetching);
            });
        });
    });
});