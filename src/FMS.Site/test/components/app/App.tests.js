import React from "react";
import { browserHistory } from "react-router";
import { shallow } from "enzyme";
import { expect } from "chai";

import App from "../../../src/components/app";
import Page from "../../../src/components/page/presentation";
import Home from "../../../src/components/home/presentation";
import HotelsContainer from "../../../src/components/hotels/container";
import HotelContainer from "../../../src/components/hotel/container";
import RoomsContainer from "../../../src/components/rooms/container";
import RoomContainer from "../../../src/components/room/container";
import MealsContainer from "../../../src/components/meals/container";

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

            describe("<Route path='/hotels'>", () => {
                const innerRoute = route.first().find("Route [path=\"/hotels\"]");

                it("gets rendered", () => {
                    expect(innerRoute).to.have.length(1);
                });

                it("with the component prop", () => {
                    expect(innerRoute.first().props().component).to.equal(HotelsContainer);
                });
            });

            describe("<Route path='/hotels/:id'>", () => {
                const innerRoute = route.first().find("Route [path=\"/hotels/:id\"]");

                it("gets rendered", () => {
                    expect(innerRoute).to.have.length(1);
                });

                it("with the component prop", () => {
                    expect(innerRoute.first().props().component).to.equal(HotelContainer);
                });
            });

            describe("<Route path='/rooms'>", () => {
                const innerRoute = route.first().find("Route [path=\"/rooms\"]");

                it("gets rendered", () => {
                    expect(innerRoute).to.have.length(1);
                });

                it("with the component prop", () => {
                    expect(innerRoute.first().props().component).to.equal(RoomsContainer);
                });
            });

            describe("<Route path='/rooms/:id'>", () => {
                const innerRoute = route.first().find("Route [path=\"/rooms/:id\"]");

                it("gets rendered", () => {
                    expect(innerRoute).to.have.length(1);
                });

                it("with the component prop", () => {
                    expect(innerRoute.first().props().component).to.equal(RoomContainer);
                });
            });

            describe("<Route path='/meals'>", () => {
                const innerRoute = route.first().find("Route [path=\"/meals\"]");

                it("gets rendered", () => {
                    expect(innerRoute).to.have.length(1);
                });

                it("with the component prop", () => {
                    expect(innerRoute.first().props().component).to.equal(MealsContainer);
                });

            });

        });
    });
});