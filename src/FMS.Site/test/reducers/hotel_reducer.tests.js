﻿import { expect } from "chai";

import * as Actions from "../../src/actions/hotel_actions";
import HotelsReducer from "../../src/reducers/hotel_reducer";

describe("hotel_reducer", () => {
    const initialState = HotelsReducer(undefined, {});
    describe("initial state", () => {
        it("isFetching should be false", () => {
            expect(initialState.get("isFetching")).to.equal(false);
        });

        it("lastFetchTime should be 0", () => {
            expect(initialState.get("lastFetchTime")).to.equal(0);
        });

        it("data should be empty", () => {
            expect(initialState.get("data").toJS()).to.eql({});
        });

        it("error should be null", () => {
            expect(initialState.get("error")).to.equal(null);
        });

        it("isInvalidated should be false", () => {
            expect(initialState.get("isInvalidated")).to.equal(false);
        });

        it("consecutiveFailureCount should be 0", () => {
            expect(initialState.get("consecutiveFailureCount")).to.equal(0);
        });
    });

    describe("default action", () => {
        const newState = HotelsReducer(initialState, {});

        it("should return the given state", () => {
            expect(newState).to.equal(initialState);
        });
    });

    describe("fetchRequestPending action", () => {
        const action = Actions.getRequestPending();
        const newState = HotelsReducer(initialState, action);

        it("isFetching is set to true", () => {
            expect(newState.get("isFetching")).to.equal(true);
        });
    });

    describe("fetchRequestSuccess action", () => {
        const json = { id: 1, name: "foo" };
        const action = Actions.getRequestSuccess(json);
        const newState = HotelsReducer(initialState, action);

        it("isFetching is set to false", () => {
            expect(newState.get("isFetching")).to.equal(false);
        });

        it("data should be the expected value", () => {
            expect(newState.get("data").toJS()).to.eql(json);
        });
    });

    describe("fetchRequestError action", () => {
        const error = "I am error";
        const action = Actions.getRequestError(error);
        const newState = HotelsReducer(initialState, action);

        it("error is set to the expectedError", () => {
            expect(newState.get("error")).to.equal(error);
        });

        it("consecutiveFailureCount is incremented", () => {
            expect(newState.get("consecutiveFailureCount")).to.equal(initialState.get("consecutiveFailureCount") + 1);
        });
    });
});