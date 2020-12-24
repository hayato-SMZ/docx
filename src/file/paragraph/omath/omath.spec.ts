import { expect } from "chai";
import { Formatter } from "export/formatter";
import { IOMathObject, Omath } from "./omath";

describe("Omath", () => {
    describe("#constructor()", () => {
        it("createMath Object", () => {
            const sampleObj: IOMathObject = { tag: "m:oMath" };
            const math = new Omath(sampleObj);
            const tree = new Formatter().format(math);
            expect(tree).to.deep.equal({
                "m:oMath": {},
            });
        });
    });
});
