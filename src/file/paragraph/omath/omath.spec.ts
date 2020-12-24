import { expect } from "chai";
import { Formatter } from "export/formatter";
import { IOMathObject, Omath, OmathAttribute, OmathAttributes } from "./omath";

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
    describe("#constructor()", () => {
        it("createMath simpleObject", () => {
            const sampleObj: IOMathObject = {
                tag: "m:oMath",
                children: [
                    {
                        tag: "m:r",
                        children: [
                            {
                                tag: "m:t",
                                text: "e=m",
                            },
                        ],
                    },
                    {
                        tag: "m:sSup",
                        children: [
                            {
                                tag: "m:e",
                                children: [
                                    {
                                        tag: "m:r",
                                        children: [
                                            {
                                                tag: "m:t",
                                                text: "c",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                tag: "m:sup",
                                children: [
                                    {
                                        tag: "m:r",
                                        children: [
                                            {
                                                tag: "m:t",
                                                text: "2",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
            const math = new Omath(sampleObj);
            const tree = new Formatter().format(math);
            expect(tree).to.deep.equal({
                "m:oMath": [
                    {
                        "m:r": [
                            {
                                "m:t": ["e=m"],
                            },
                        ],
                    },
                    {
                        "m:sSup": [
                            {
                                "m:e": [
                                    {
                                        "m:r": [
                                            {
                                                "m:t": ["c"],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                "m:sup": [
                                    {
                                        "m:r": [
                                            {
                                                "m:t": ["2"],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#Attributes()", () => {
        it("createAttribute Object", () => {
            const attribute = new OmathAttribute("@xmlns:m", "http://schemas.openxmlformats.org/officeDocument/2006/math");
            const tree = new Formatter().format(attribute);
            expect(tree).to.deep.equal({
                "xmlns:m": ["http://schemas.openxmlformats.org/officeDocument/2006/math"],
            });
        });
    });
    describe("#Attributes()", () => {
        it("createAttributes Object", () => {
            const sampleObj: object = {
                "@xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
                "@xmlns:mml": "http://www.w3.org/1998/Math/MathML",
            };
            const attributes = new OmathAttributes(sampleObj);
            const tree = new Formatter().format(attributes);
            expect(tree).to.deep.equal({
                _attr: [
                    {
                        "xmlns:m": ["http://schemas.openxmlformats.org/officeDocument/2006/math"],
                    },
                    {
                        "xmlns:mml": ["http://www.w3.org/1998/Math/MathML"],
                    },
                ],
            });
        });
    });
});
