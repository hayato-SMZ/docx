// Simple example to add text to a document
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";

import {
    Document,
    Math,
    MathAngledBrackets,
    MathCurlyBrackets,
    MathFraction,
    MathFunction,
    MathPreSubSuperScript,
    MathRadical,
    MathRoundBrackets,
    MathRun,
    MathSquareBrackets,
    MathSubScript,
    MathSubSuperScript,
    MathSum,
    MathSuperScript,
    Omath,
    Packer,
    Paragraph,
    TextRun,
} from "../build";

const doc = new Document();

doc.addSection({
    properties: {},
    children: [
        new Paragraph({
            children: [
                new Omath({
                    "tag": "m:oMath",
                    "attr": {
                        "@xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
                        "@xmlns:mml": "http://www.w3.org/1998/Math/MathML"
                    },
                    "children": [
                        {
                            "tag": "m:nary",
                            "children": [
                                {
                                    "tag": "m:naryPr",
                                    "children": [
                                        { "tag": "m:chr", "attr": { "@m:val": "∫" } },
                                        { "tag": "m:limLoc", "attr": { "@m:val": "subSup" } },
                                        { "tag": "m:grow", "attr": { "@m:val": "1" } },
                                        { "tag": "m:subHide", "attr": { "@m:val": "off" } },
                                        { "tag": "m:supHide", "attr": { "@m:val": "off" } }
                                    ]
                                },
                                {
                                    "tag": "m:sub",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "a" }] }
                                    ]
                                },
                                {
                                    "tag": "m:sup",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "b" }] }
                                    ]
                                },
                                { "tag": "m:e", "text": "" }
                            ]
                        },
                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "f(x)dx=" }] },
                        {
                            "tag": "m:limLow",
                            "children": [
                                {
                                    "tag": "m:e",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "lim" }] }
                                    ]
                                },
                                {
                                    "tag": "m:lim",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "n→" }] },
                                        {
                                            "tag": "m:r",
                                            "children": [
                                                {
                                                    "tag": "m:rPr",
                                                    "children": [
                                                        { "tag": "m:sty", "attr": { "@m:val": "p" }}
                                                    ]
                                                },
                                                { "tag": "m:t", "text": "∞" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tag": "m:nary",
                            "children": [
                                {
                                    "tag": "m:naryPr",
                                    "children": [
                                        { "tag": "m:chr", "attr": { "@m:val": "∑" } },
                                        { "tag": "m:limLoc", "attr": { "@m:val": "undOvr" } },
                                        { "tag": "m:grow", "attr": { "@m:val": "1" } },
                                        { "tag": "m:subHide", "attr": { "@m:val": "off" } },
                                        { "tag": "m:supHide", "attr": { "@m:val": "off" } }
                                    ]
                                },
                                {
                                    "tag": "m:sub",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "i=0" }] }
                                    ]
                                },
                                {
                                    "tag": "m:sup",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "n−1" }] }
                                    ]
                                },
                                { "tag": "m:e", "text": "" }
                            ]
                        },
                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "f(" }] },
                        {
                            "tag": "m:sSub",
                            "children": [
                                {
                                    "tag": "m:e",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "x" }] }
                                    ]
                                },
                                {
                                    "tag": "m:sub",
                                    "children": [
                                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "i" }] }
                                    ]
                                }
                            ]
                        },
                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": ")" }] },
                        {
                            "tag": "m:r",
                            "children": [
                                {
                                    "tag": "m:rPr",
                                    "children": [{ "tag": "m:sty", "attr": { "@m:val": "p" } }]
                                },
                                { "tag": "m:t", "text": "Δ" }
                            ]
                        },
                        { "tag": "m:r", "children": [{ "tag": "m:t", "text": "x" }] }
                    ]
                })
            ]
        })
    ]
})
doc.addSection({
    properties: {},
    children: [
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathRun("2+2"),
                        new MathFraction({
                            numerator: [new MathRun("hi")],
                            denominator: [new MathRun("2")],
                        }),
                    ],
                }),
                new TextRun({
                    text: "Foo Bar",
                    bold: true,
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathFraction({
                            numerator: [
                                new MathRun("1"),
                                new MathRadical({
                                    children: [new MathRun("2")],
                                }),
                            ],
                            denominator: [new MathRun("2")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathSum({
                            children: [new MathRun("test")],
                        }),
                        new MathSum({
                            children: [
                                new MathSuperScript({
                                    children: [new MathRun("e")],
                                    superScript: [new MathRun("2")],
                                }),
                            ],
                            subScript: [new MathRun("i")],
                        }),
                        new MathSum({
                            children: [
                                new MathRadical({
                                    children: [new MathRun("i")],
                                }),
                            ],
                            subScript: [new MathRun("i")],
                            superScript: [new MathRun("10")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathSuperScript({
                            children: [new MathRun("test")],
                            superScript: [new MathRun("hello")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathSubScript({
                            children: [new MathRun("test")],
                            subScript: [new MathRun("hello")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathSubScript({
                            children: [new MathRun("x")],
                            subScript: [
                                new MathSuperScript({
                                    children: [new MathRun("y")],
                                    superScript: [new MathRun("2")],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathSubSuperScript({
                            children: [new MathRun("test")],
                            superScript: [new MathRun("hello")],
                            subScript: [new MathRun("world")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathPreSubSuperScript({
                            children: [new MathRun("test")],
                            superScript: [new MathRun("hello")],
                            subScript: [new MathRun("world")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathSubScript({
                            children: [
                                new MathFraction({
                                    numerator: [new MathRun("1")],
                                    denominator: [new MathRun("2")],
                                }),
                            ],
                            subScript: [new MathRun("4")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathSubScript({
                            children: [
                                new MathRadical({
                                    children: [
                                        new MathFraction({
                                            numerator: [new MathRun("1")],
                                            denominator: [new MathRun("2")],
                                        }),
                                    ],
                                    degree: [new MathRun("4")],
                                }),
                            ],
                            subScript: [new MathRun("x")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathRadical({
                            children: [new MathRun("4")],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathFunction({
                            name: [
                                new MathSuperScript({
                                    children: [new MathRun("cos")],
                                    superScript: [new MathRun("-1")],
                                }),
                            ],
                            children: [new MathRun("100")],
                        }),
                        new MathRun("×"),
                        new MathFunction({
                            name: [new MathRun("sin")],
                            children: [new MathRun("360")],
                        }),
                        new MathRun("= x"),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathRoundBrackets({
                            children: [
                                new MathFraction({
                                    numerator: [new MathRun("1")],
                                    denominator: [new MathRun("2")],
                                }),
                            ],
                        }),
                        new MathSquareBrackets({
                            children: [
                                new MathFraction({
                                    numerator: [new MathRun("1")],
                                    denominator: [new MathRun("2")],
                                }),
                            ],
                        }),
                        new MathCurlyBrackets({
                            children: [
                                new MathFraction({
                                    numerator: [new MathRun("1")],
                                    denominator: [new MathRun("2")],
                                }),
                            ],
                        }),
                        new MathAngledBrackets({
                            children: [
                                new MathFraction({
                                    numerator: [new MathRun("1")],
                                    denominator: [new MathRun("2")],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        new Paragraph({
            children: [
                new Math({
                    children: [
                        new MathFraction({
                            numerator: [
                                new MathRadical({
                                    children: [new MathRun("4")],
                                }),
                            ],
                            denominator: [new MathRun("2a")],
                        }),
                    ],
                }),
            ],
        }),
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
