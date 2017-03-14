import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import Hotel from "../../../../src/components/hotels/presentation/hotel";
import Data from "../../../../src/components/table/presentation/data";
import Row from "../../../../src/components/table/presentation/row";

describe("<Hotel />", () => {
    const onSelect = spy();
    const hotel = { mappedHotelName: "foo", reservWireId: 1234, code: "one", staticHotelName: "bar" };
    const component = shallow(<Hotel hotel={hotel} onSelect={onSelect} />);

    describe("<Row /> has props", () => {
        const row = component.find(Row).first();

        describe("onClick", () => {

            beforeEach(() => {
                row.simulate("click");
            });

            it("calls onSelect", () => {
                expect(onSelect.calledOnce).to.equal(true);
            });
        });
    });

    it("it renders mappedHotelName inside <Data />", () => {
        expect(component.contains(<Data>{hotel.mappedHotelName}</Data>)).to.equal(true);
    });
    it("it renders reservWireId inside <Data />", () => {
        expect(component.contains(<Data>{hotel.reservWireId}</Data>)).to.equal(true);
    });
    it("it renders code inside <Data />", () => {
        expect(component.contains(<Data secondary>{hotel.code}</Data>)).to.equal(true);
    });
    it("it renders staticHotelName inside <Data />", () => {
        expect(component.contains(<Data secondary>{hotel.staticHotelName}</Data>)).to.equal(true);
    });
});