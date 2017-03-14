import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import { RoomsContainer } from "../../../../src/components/rooms/container";
import Rooms from "../../../../src/components/rooms/presentation";

describe("<RoomsContainer />", () => {
    let getRooms, roomsData, component;

    beforeEach(() => {
        getRooms = spy();

        roomsData = {
            isFetching: false,
            data: [{ mappedRoomId: 1234, mappedRoomName: "foo", code: "a" }, { mappedRoomId: 4321, mappedRoomName: "bar", code: "b" }]
        };

        component = mount(<RoomsContainer getRooms={getRooms} rooms={roomsData} />);
    });
    

    describe("on mount", () => {
        beforeEach(() => {
            component.mount();
        });

        it("calls getRooms", () => {
            expect(getRooms.calledOnce).to.equal(true);
        });
    });

    describe("<Rooms />", () => {
        let rooms;

        beforeEach(() => {
            rooms = component.find(Rooms);
        });

        it("gets rendered", () => {
            expect(rooms.length).to.equal(1);
        });

        describe("has props", () => {
            let props;
            beforeEach(() => {
                props = rooms.first().props();
            });

            it("rooms", () => {
                expect(props.rooms).to.equal(roomsData.data);
            });

            it("isLoading", () => {
                expect(props.isLoading).to.equal(roomsData.isFetching);
            });
        });
    });
});