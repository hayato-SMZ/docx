// http://www.datypic.com/sc/ooxml/e-m_oMath-1.html
import { XmlComponent } from "file/xml-components";

export class Omath extends XmlComponent {
    constructor(key: string, children: object | string) {
        super(key);
        if (key === "m:t" || typeof children === "string") {
            this.root.push(children);
        } else {
            for (const childKey in children) {
                if (typeof children[childKey] !== "string") {
                    this.root.push(new Omath(childKey, children[childKey]));
                }
            }
        }
    }
}
