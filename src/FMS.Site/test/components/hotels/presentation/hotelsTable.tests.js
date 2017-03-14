import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import HotelsTable from "../../../../src/components/hotels/presentation/hotelsTable";
import HotelContainer from "../../../../src/components/hotels/container/hotel";

describe("<HotelsTable />", () => {
    const hotels = [{ code: "one" }, { code: "two" }];
    const component = shallow(<HotelsTable hotels={hotels} />);

    describe("<HotelsContainer />", () => {
        const hotelComponents = component.find(HotelContainer);

        it("gets rendered for each hotel", () => {
            expect(hotelComponents.length).to.equal(hotels.length);
        });

        describe("has props", () => {
            let props = hotelComponents.map(component => component.props());

            it("hotels", () => {
                props.forEach((prop, index) => {
                    expect(prop.hotel).to.equal(hotels[index]);
                });
            });
        });
    });
});