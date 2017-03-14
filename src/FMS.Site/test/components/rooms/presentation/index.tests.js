import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Spinner from "../../../../src/components/spinner/presentation";
import Rooms from "../../../../src/components/rooms/presentation";
import RoomsTable from "../../../../src/components/rooms/presentation/roomsTable";

describe("<Rooms />", () => {
    const rooms = [{ code: "one" }, { code: "two" }];

    describe("when isLoading is true", () => {
        const component = shallow(<Rooms rooms={rooms} isLoading={true} />);
        
        it("displays a <Spinner/>", () => {
            expect(component.find(Spinner).length).to.equal(1);
        });
    });

    describe("when isLoading is false", () => {
        
        const component = shallow(<Rooms rooms={rooms} isLoading={false} />);
        
        describe("<RoomsTable />", () => {
            const roomsTable = component.find(RoomsTable);

            it("gets rendered", () => {
                expect(roomsTable.length).to.equal(1);
            });

            it("has the expected rooms props", () => {
                expect(roomsTable.props().rooms).to.equal(rooms);
            });
        });
    });
});