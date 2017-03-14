import { expect } from "chai";

import * as UrlConstants from "../../src/constants/urlConstants";

describe("urlConstants", () => {
    
    it("HOTELS_GET", () => {
        expect(UrlConstants.HOTELS_GET).to.equal("/api/Hotels/");
    });

    it("ROOMS_GET", () => {
        expect(UrlConstants.ROOMS_GET).to.equal("/api/Rooms/");
    });

    it("MEALS_GET", () => {
        expect(UrlConstants.MEALS_GET).to.equal("/api/Meals/");
    });

    it("STATICHOTELS_SEARCH", () => {
        expect(UrlConstants.STATICHOTELS_SEARCH).to.equal("/api/StaticHotels/search/");
    });
});