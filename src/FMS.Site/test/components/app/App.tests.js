import React from "react";
import { browserHistory } from "react-router";
import { shallow } from "enzyme";
import { expect } from "chai";

import App from "../../../src/components/app";
import Page from "../../../src/components/page/presentation";
import Home from "../../../src/components/home/presentation";


describe("<App />", () => {
    const component = shallow(<App />);

    describe("<Router />", () => {
        const router = component.find("Router");

        it("gets rendered", () => {
            expect(router.length).to.equal(1);
        });

        it("has history prop", () => {
            expect(router.first().props().history).to.equal(browserHistory);
        });

        describe("<Route path='/'>", () => {
            const route = router.first().find("Route [path=\"/\"]");

            it("gets rendered", () => {
                expect(route).to.have.length(1);
            });

            it("with the component prop", () => {
                expect(route.first().props().component).to.equal(Page);
            });

            describe("<IndexRoute />", () => {
                const indexRoute = route.first().find("IndexRoute");

                it("gets renderd", () => {
                    expect(indexRoute).to.have.length(1);
                });

                it("with the component prop", () => {
                    expect(indexRoute.first().props().component).to.equal(Home);
                });
            });
        });
    });
});