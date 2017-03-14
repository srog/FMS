import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import { HotelContainer } from "../../../../src/components/hotel/container";
import Hotel from "../../../../src/components/hotel/presentation";

describe("<HotelContainer />", () => {
    let getHotel, hotelData, params, component;

    beforeEach(() => {
        getHotel = spy();
        hotelData = { data: { mappedHotelId: 1234 }, isFetching: true };
        params = { id: 98765 };
        component = mount(<HotelContainer getHotel={getHotel} hotel={hotelData} params={params} />);
    });
    

    describe("on mount", () => {
        beforeEach(() => {
            component.mount();
        });

        it("calls getHotel", () => {
            expect(getHotel.calledWith(params.id)).to.equal(true);
        });
    });

    describe("<Hotel /> has props", () => {
        let hotelProps;

        beforeEach(() => {
            hotelProps = component.find(Hotel).first().props();
        });

        it("hotels", () => {
            expect(hotelProps.hotel).to.equal(hotelData.data);
        });

        it("isLoading", () => {
            expect(hotelProps.isLoading).to.equal(hotelData.isFetching);
        });
    });
});