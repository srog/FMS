import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Hotels from "../../../../src/components/hotels/presentation";
import Spinner from "../../../../src/components/spinner/presentation";
import HotelsTable from "../../../../src/components/hotels/presentation/hotelsTable";

describe("<Hotels />", () => {
    const hotels = [{ code: "one" }, { code: "two" }];

    describe("when isLoading is true", () => {
        const component = shallow(<Hotels hotels={hotels} isLoading={true} />);
        
        it("displays a <Spinner/>", () => {
            expect(component.find(Spinner).length).to.equal(1);
        });
    });

    describe("when isLoading is false", () => {
        
        const component = shallow(<Hotels hotels={hotels} isLoading={false} />);
        
        describe("<HotelsTable />", () => {
            const hotelsTable = component.find(HotelsTable);

            it("gets rendered", () => {
                expect(hotelsTable.length).to.equal(1);
            });

            it("has the expected hotels props", () => {
                expect(hotelsTable.props().hotels).to.equal(hotels);
            });
        });
    });
});