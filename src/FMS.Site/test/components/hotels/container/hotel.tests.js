import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { stub, restore } from "sinon";
import { browserHistory } from "react-router";

import HotelContainer from "../../../../src/components/hotels/container/hotel";
import Hotel from "../../../../src/components/hotels/presentation/hotel";

describe("<HotelContainer />", () => {
    let hotelData, component, onSelect;

    beforeEach(() => {
        onSelect = stub(browserHistory, "push", () => {});
        hotelData = { mappedHotelId: 1235 };
        component = shallow(<HotelContainer hotel={hotelData} />);
    });

    afterEach(() => {
        restore(browserHistory);
    });

    describe("<Hotel />", () => {
        let hotel;

        beforeEach(() => {
            hotel = component.find(Hotel);
        });

        it("gets rendered", () => {
            expect(hotel.length).to.equal(1);
        });

        describe("props", () => {
            let props;
            beforeEach(() => {
                props = hotel.first().props();
            });

            it("hotel", () => {
                expect(props.hotel).to.equal(hotelData);
            });

            it("onSelect", () => {
                props.onSelect();
                expect(onSelect.called).to.equal(true);
            });
        });
    });
});