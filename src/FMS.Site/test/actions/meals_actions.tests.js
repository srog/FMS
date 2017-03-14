import { expect } from "chai";

import { MEALS_GET } from "../../src/constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../../src/constants/reduxConstants";
import * as Actions from "../../src/actions/meals_actions";

describe("meal_actions", () => {
    describe("getRequestPending", () => {
        const action = Actions.getRequestPending();

        it("should not have a payload", () => {
            expect(action.payload).to.be.undefined;
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${MEALS_GET}_${PENDING_SUFFIX}`);
        });
    });

    describe("getRequestSuccess", () => {
        const json = { property: "value" };
        const action = Actions.getRequestSuccess(json);

        it("should have a payload from the json param", () => {
            expect(action.payload).to.equal(json);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${MEALS_GET}_${SUCCESS_SUFFIX}`);
        });
    });

    describe("getRequestError", () => {
        const error = "I am Error.";
        const action = Actions.getRequestError(error);

        it("should have a payload from the json param", () => {
            expect(action.payload).to.equal(error);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${MEALS_GET}_${ERROR_SUFFIX}`);
        });
    });
});