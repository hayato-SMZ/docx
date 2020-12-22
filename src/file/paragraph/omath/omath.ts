// http://www.datypic.com/sc/ooxml/e-m_oMath-1.html
import { XmlComponent } from "file/xml-components";

export class Omath extends XmlComponent {
    constructor(key: string, children: object | string) {
        super(key);
        if (typeof children === "string") {
            this.root.push(children);
        } else {
            for (const childKey in children) {
                if (children[childKey] !== undefined) {
                    this.root.push(new Omath(childKey, children[childKey]));
                }
            }
        }
    }
}
