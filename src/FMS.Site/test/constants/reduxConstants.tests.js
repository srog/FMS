import { expect } from "chai";

import * as ReduxConstants from "../../src/constants/ReduxConstants";

describe("reduxConstants", () => {
    
    it("PENDING_SUFFIX", () => {
        expect(ReduxConstants.PENDING_SUFFIX).to.equal("PENDING");
    });

    it("SUCCESS_SUFFIX", () => {
        expect(ReduxConstants.SUCCESS_SUFFIX).to.equal("SUCCESS");
    });

    it("ERROR_SUFFIX", () => {
        expect(ReduxConstants.ERROR_SUFFIX).to.equal("ERROR");
    });
});