import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { spy } from "sinon";

import Room from "../../../../src/components/rooms/presentation/room";
import Data from "../../../../src/components/table/presentation/data";
import Row from "../../../../src/components/table/presentation/row";

describe("<Room />", () => {
    const onSelect = spy();
    const room = { mappedRoomName: "foo", reservWireId: 1234, code: "one", staticRoomName: "bar" };
    const component = shallow(<Room room={room} onSelect={onSelect} />);

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

    it("it renders mappedRoomName inside <Data />", () => {
        expect(component.contains(<Data>{room.mappedRoomName}</Data>)).to.equal(true);
    });
    it("it renders reservWireId inside <Data />", () => {
        expect(component.contains(<Data>{room.reservWireId}</Data>)).to.equal(true);
    });
    it("it renders code inside <Data />", () => {
        expect(component.contains(<Data secondary>{room.code}</Data>)).to.equal(true);
    });
    it("it renders staticRoomName inside <Data />", () => {
        expect(component.contains(<Data secondary>{room.staticRoomName}</Data>)).to.equal(true);
    });
});