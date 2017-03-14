import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Room from "../../../../src/components/room/presentation";
import Textbox from "../../../../src/components/form/presentation/textbox";
import Spinner from "../../../../src/components/spinner/presentation";

describe("<Room />", () => {
    const room = { mappedRoomId: 1234, mappedRoomName: "foo", code: "one", staticRoomName: "bar" };
    

    describe("when isLoading", () => {
        const component = shallow(<Room room={room} isLoading={true}/>);
        it("renders a <Spinner/>", () => {
            expect(component.find(Spinner).length).to.equal(1);
        });
    });

    describe("when not isLoading", () => {
        const component = shallow(<Room room={room} isLoading={false}/>);

        it("it renders a <Textbox /> for mappedRoomId", () => {
            expect(component.contains(<Textbox value={room.mappedRoomId} disabled/>)).to.equal(true);
        });

        it("it renders a <Textbox /> for mappedRoomName", () => {
            expect(component.contains(<Textbox value={room.mappedRoomName} disabled/>)).to.equal(true);
        });

        it("it renders a <Textbox /> for code", () => {
            expect(component.contains(<Textbox value={room.code} disabled/>)).to.equal(true);
        });

        it("it renders a <Textbox /> for staticRoomName", () => {
            expect(component.contains(<Textbox value={room.staticRoomName} disabled/>)).to.equal(true);
        });
    });
});