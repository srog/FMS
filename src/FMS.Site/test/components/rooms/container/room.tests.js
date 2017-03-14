import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { stub, restore } from "sinon";
import { browserHistory } from "react-router";

import RoomContainer from "../../../../src/components/rooms/container/room";
import Room from "../../../../src/components/rooms/presentation/room";

describe("<RoomContainer />", () => {
    let roomData, component, onSelect;

    beforeEach(() => {
        onSelect = stub(browserHistory, "push", () => {});
        roomData = { mappedRoomId: 1235 };
        component = shallow(<RoomContainer room={roomData} />);
    });

    afterEach(() => {
        restore(browserHistory);
    });

    describe("<Room />", () => {
        let room;

        beforeEach(() => {
            room = component.find(Room);
        });

        it("gets rendered", () => {
            expect(room.length).to.equal(1);
        });

        describe("props", () => {
            let props;
            beforeEach(() => {
                props = room.first().props();
            });

            it("room", () => {
                expect(props.room).to.equal(roomData);
            });

            it("onSelect", () => {
                props.onSelect();
                expect(onSelect.called).to.equal(true);
            });
        });
    });
});