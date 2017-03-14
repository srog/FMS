import { expect } from "chai";

import { ROOM_GET } from "../../src/constants/actionConstants";
import { PENDING_SUFFIX, SUCCESS_SUFFIX, ERROR_SUFFIX } from "../../src/constants/reduxConstants";
import * as Actions from "../../src/actions/room_actions";

describe("room_actions", () => {
    describe("getRequestPending", () => {
        const mappedRoomId = 1234;
        const action = Actions.getRequestPending(1234);

        it("should have a payload of mappedRoomId parameter", () => {
            expect(action.payload).to.equal(mappedRoomId);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${ROOM_GET}_${PENDING_SUFFIX}`);
        });
    });

    describe("getRequestSuccess", () => {
        const json = { property: "value" };
        const action = Actions.getRequestSuccess(json);

        it("should have a payload of json parameter", () => {
            expect(action.payload).to.equal(json);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${ROOM_GET}_${SUCCESS_SUFFIX}`);
        });
    });

    describe("getRequestError", () => {
        const error = "I am Error.";
        const action = Actions.getRequestError(error);

        it("should have a payload of error parameter", () => {
            expect(action.payload).to.equal(error);
        });

        it("should have the expected type", () => {
            expect(action.type).to.equal(`${ROOM_GET}_${ERROR_SUFFIX}`);
        });
    });
});