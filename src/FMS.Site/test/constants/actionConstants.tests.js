import { expect } from "chai";

import * as ActionConstants from "../../src/constants/actionConstants";

describe("actionConstants", () => {
    
    it("HOTELS_GET", () => {
        expect(ActionConstants.HOTELS_GET).to.equal("HOTELS_GET");
    });

    it("HOTEL_GET", () => {
        expect(ActionConstants.HOTEL_GET).to.equal("HOTEL_GET");
    });

    it("ROOMS_GET", () => {
        expect(ActionConstants.ROOMS_GET).to.equal("ROOMS_GET");
    });

    it("ROOM_GET", () => {
        expect(ActionConstants.ROOM_GET).to.equal("ROOM_GET");
    });

    it("MEALS_GET", () => {
        expect(ActionConstants.MEALS_GET).to.equal("MEALS_GET");
    });

    it("MEAL_GET", () => {
        expect(ActionConstants.MEAL_GET).to.equal("MEAL_GET");
    });
});