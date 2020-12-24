// http://www.datypic.com/sc/ooxml/e-m_oMath-1.html
import { XmlComponent } from "file/xml-components";

export interface IOMathObject {
    readonly tag: string;
    readonly attr: object[] | undefined;
    readonly children: IOMathObject[] | string | undefined;
    readonly text: string;
}

export class Omath extends XmlComponent {
    constructor(oMathObject: IOMathObject) {
        super(oMathObject.tag);

        if (oMathObject.attr !== undefined) {
            this.root.push(new OmathAttributes(oMathObject.attr));
        }
        if (oMathObject.tag === "m:t") {
            this.root.push(oMathObject.text);
        } else {
            if (oMathObject.children !== undefined && typeof oMathObject.children !== "string") {
                oMathObject.children.forEach((child: IOMathObject) => {
                    this.root.push(new Omath(child));
                });
            }
        }
    }
}

export class OmathAttributes extends XmlComponent {
    constructor(attribute: object) {
        super("_attr");
        for (const childKey in attribute) {
            if (childKey !== undefined) {
                this.root.push(new OmathAttribute(childKey, attribute[childKey]));
            }
        }
    }
}

export class OmathAttribute extends XmlComponent {
    constructor(key: string, value: string) {
        super(key);
        this.root.push(value);
    }
}
