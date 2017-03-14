import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import RoomsTable from "../../../../src/components/rooms/presentation/roomsTable";
import RoomContainer from "../../../../src/components/rooms/container/room";

describe("<RoomsTable />", () => {
    const rooms = [{ code: "one" }, { code: "two" }];
    const component = shallow(<RoomsTable rooms={rooms} />);

    describe("<RoomsContainer />", () => {
        const roomComponents = component.find(RoomContainer);

        it("gets rendered for each room", () => {
            expect(roomComponents.length).to.equal(rooms.length);
        });

        describe("has props", () => {
            let props = roomComponents.map(component => component.props());

            it("rooms", () => {
                props.forEach((prop, index) => {
                    expect(prop.room).to.equal(rooms[index]);
                });
            });
        });
    });
});