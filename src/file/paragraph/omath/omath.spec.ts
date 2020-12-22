import { expect } from "chai";
import { Formatter } from "export/formatter";
import { Omath } from "./omath";

describe("Omath", () => {
    describe("#constructor()", () => {
        it("createMath Object", () => {
            const math = new Omath("m:oMath", {});
            const tree = new Formatter().format(math);
            expect(tree).to.deep.equal({
                "m:oMath": {},
            });
        });
    });
});
