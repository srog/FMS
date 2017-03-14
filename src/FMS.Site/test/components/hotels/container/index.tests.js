import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import { HotelsContainer } from "../../../../src/components/hotels/container";
import Hotels from "../../../../src/components/hotels/presentation";

describe("<HotelsContainer />", () => {
    let getHotels, hotelsData, component;

    beforeEach(() => {
        getHotels = spy();
        hotelsData = {
            isFetching: false,
            data: [{ mappedHotelId: 1234, mappedHotelName: "foo", code: "a" }, { mappedHotelId: 4321, mappedHotelName: "bar", code: "b" }]
        };
        component = mount(<HotelsContainer getHotels={getHotels} hotels={hotelsData}  />);
    });
    

    describe("on mount", () => {
        beforeEach(() => {
            component.mount();
        });

        it("calls getHotels", () => {
            expect(getHotels.calledOnce).to.equal(true);
        });
    });

    describe("<Hotels />", () => {
        let hotels;

        beforeEach(() => {
            hotels = component.find(Hotels);
        });

        it("gets rendered", () => {
            expect(hotels.length).to.equal(1);
        });

        describe("has props", () => {
            let props;
            beforeEach(() => {
                props = hotels.first().props();
            });

            it("hotels", () => {
                expect(props.hotels).to.equal(hotelsData.data);
            });

            it("isLoading", () => {
                expect(props.isLoading).to.equal(hotelsData.isFetching);
            });
        });
    });
});