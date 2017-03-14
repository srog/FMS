import { expect } from "chai";
import Sinon from "sinon";
import Axios from "axios";

import * as UrlConstants from "../../src/constants/urlConstants";
import * as Actions from "../../src/actions/hotel_actions";
import * as ActionCreators from "../../src/actionCreators/hotel_actionCreator";

describe("hotel_actionCreators", () => {
    const dispatch = Sinon.spy();
    const pendingAction = { pending: "pending" };
    const successAction = { success: "success" };
    const errorAction = { error: "error" };

    describe("get and success", () => {

        before((done) => {
            const mappedHotelId = 1234;
            const response = { status: 200, data: { result: "result" } };
            Sinon.stub(Axios, "get").withArgs(`${UrlConstants.HOTELS_GET}${mappedHotelId}`)
                .returns(new Promise(resolve => resolve(response)));
            Sinon.stub(Actions, "getRequestPending").returns(pendingAction);
            Sinon.stub(Actions, "getRequestSuccess").withArgs(response.data).returns(successAction);

            ActionCreators.get(mappedHotelId)(dispatch).then(() => done());
        });

        after(() => {
            Sinon.restore(Actions);
            Axios.get.restore();
        });

        it("should call getAllRequestPending", () => {
            expect(dispatch.calledWith(pendingAction)).to.equal(true);
        });

        it("should call getAllRequestSuccess", (done) => {
            expect(dispatch.calledWith(successAction)).to.equal(true);
            done();
        });
    });

    describe("get and bad status code", () => {

        before((done) => {
            Sinon.restore(Axios);
            const mappedHotelId = 1234;
            const response = { status: 404, statusText: "Not Fount" };
            Sinon.stub(Axios, "get").withArgs(`${UrlConstants.HOTELS_GET}${mappedHotelId}`)
                .returns(new Promise(resolve => resolve(response)));
            Sinon.stub(Actions, "getRequestPending").returns(pendingAction);
            Sinon.stub(Actions, "getRequestError").withArgs(new Error(response.statusText)).returns(errorAction);

            ActionCreators.get(mappedHotelId)(dispatch).then(() => done());
        });

        after(() => {
            Sinon.restore(Actions);
            Axios.get.restore();
        });

        it("should call getAllRequestPending", () => {
            expect(dispatch.calledWith(pendingAction)).to.equal(true);
        });

        it("should call getAllRequestError", (done) => {
            expect(dispatch.calledWith(errorAction)).to.equal(true);
            done();
        });
    });

    describe("get and promise is rejected", () => {

        before((done) => {
            Sinon.restore(Axios);
            const mappedHotelId = 1234;
            const response = new Error("error");
            Sinon.stub(Axios, "get").withArgs(`${UrlConstants.HOTELS_GET}${mappedHotelId}`)
                .returns(new Promise((resolve, reject) => reject(response)));
            Sinon.stub(Actions, "getRequestPending").returns(pendingAction);
            Sinon.stub(Actions, "getRequestError").withArgs(new Error()).returns(errorAction);

            ActionCreators.get(mappedHotelId)(dispatch).then(() => done());
        });

        after(() => {
            Sinon.restore(Actions);
            Axios.get.restore();
        });

        it("should call getAllRequestPending", () => {
            expect(dispatch.calledWith(pendingAction)).to.equal(true);
        });

        it("should call getAllRequestError", (done) => {
            expect(dispatch.calledWith(errorAction)).to.equal(true);
            done();
        });
    });
});