import {Schema, type} from "@colyseus/schema";
 
export abstract class Hint extends Schema {
    @type("string")
    abstract value: string;

    @type("string")
    type: string;

    @type("boolean")
    assigned: boolean = false;

    constructor() {
        super();
    }

}

export class NullHint extends Hint {
    value = "null";
    constructor() {
        super();
        this.type = "null";
    }
    
}