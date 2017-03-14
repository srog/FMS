import { expect } from "chai";

import { HOTEL_GET } from "../../src/constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../../src/constants/reduxConstants";
import * as Actions from "../../src/actions/hotel_actions";

describe("hotel_actions", () => {
    describe("getRequestPending", () => {
        const mappedHotelId = 1234;
        const action = Actions.getRequestPending(1234);

        it("should have a payload of mappedHotelId parameter", () => {
            expect(action.payload).to.equal(mappedHotelId);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${HOTEL_GET}_${PENDING_SUFFIX}`);
        });
    });

    describe("getRequestSuccess", () => {
        const json = { property: "value" };
        const action = Actions.getRequestSuccess(json);

        it("should have a payload of json parameter", () => {
            expect(action.payload).to.equal(json);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${HOTEL_GET}_${SUCCESS_SUFFIX}`);
        });
    });

    describe("getRequestError", () => {
        const error = "I am Error.";
        const action = Actions.getRequestError(error);

        it("should have a payload of error parameter", () => {
            expect(action.payload).to.equal(error);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${HOTEL_GET}_${ERROR_SUFFIX}`);
        });
    });
});