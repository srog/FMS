import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Hotel from "../../../../src/components/hotel/presentation";
import Textbox from "../../../../src/components/form/presentation/textbox";
import Spinner from "../../../../src/components/spinner/presentation";

describe("<Hotel />", () => {
    const hotel = { mappedHotelId: 1234, mappedHotelName: "foo", code: "one", staticHotelName: "bar" };
    

    describe("when isLoading", () => {
        const component = shallow(<Hotel hotel={hotel} isLoading={true}/>);
        it("renders a <Spinner/>", () => {
            expect(component.find(Spinner).length).to.equal(1);
        });
    });

    describe("when not isLoading", () => {
        const component = shallow(<Hotel hotel={hotel} isLoading={false}/>);

        it("it renders a <Textbox /> for mappedHotelId", () => {
            expect(component.contains(<Textbox value={hotel.mappedHotelId} disabled/>)).to.equal(true);
        });

        it("it renders a <Textbox /> for mappedHotelName", () => {
            expect(component.contains(<Textbox value={hotel.mappedHotelName} disabled/>)).to.equal(true);
        });

        it("it renders a <Textbox /> for code", () => {
            expect(component.contains(<Textbox value={hotel.code} disabled/>)).to.equal(true);
        });

        it("it renders a <Textbox /> for staticHotelName", () => {
            expect(component.contains(<Textbox value={hotel.staticHotelName} disabled/>)).to.equal(true);
        });
    });
});