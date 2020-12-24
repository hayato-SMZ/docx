// http://www.datypic.com/sc/ooxml/e-m_oMath-1.html
import { XmlComponent } from "file/xml-components";

export interface IOMathObject {
    readonly tag: string;
    readonly attr?: object;
    readonly children?: IOMathObject[] | string;
    readonly text?: string;
}

export class Omath extends XmlComponent {
    constructor(oMathObject: IOMathObject) {
        super(oMathObject.tag);

        if (oMathObject.attr !== undefined) {
            const attr = {};
            for (const childKey in oMathObject.attr) {
                if (childKey !== undefined) {
                    attr[childKey.replace(/@/, "")] = oMathObject.attr[childKey];
                }
            }
            this.root.push({ _attr: attr });
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
