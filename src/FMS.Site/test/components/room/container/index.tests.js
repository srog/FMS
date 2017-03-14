import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import { RoomContainer } from "../../../../src/components/room/container";
import Room from "../../../../src/components/room/presentation";

describe("<RoomContainer />", () => {
    let getRoom, roomData, params, component;

    beforeEach(() => {
        getRoom = spy();
        roomData = { data: { mappedRoomId: 1234 }, isFetching: true };
        params = { id: 98765 };
        component = mount(<RoomContainer getRoom={getRoom} room={roomData} params={params} />);
    });
    

    describe("on mount", () => {
        beforeEach(() => {
            component.mount();
        });

        it("calls getRoom", () => {
            expect(getRoom.calledWith(params.id)).to.equal(true);
        });
    });

    describe("<Room /> has props", () => {
        let roomProps;

        beforeEach(() => {
            roomProps = component.find(Room).first().props();
        });

        it("rooms", () => {
            expect(roomProps.room).to.equal(roomData.data);
        });

        it("isLoading", () => {
            expect(roomProps.isLoading).to.equal(roomData.isFetching);
        });
    });
});