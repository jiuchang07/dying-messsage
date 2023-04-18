import {Schema, type} from "@colyseus/schema";
 
export class Hint extends Schema {
    @type("string")
    value: string;

    @type("string")
    type: string;

    @type("boolean")
    assigned: boolean = false;

    constructor(value: string, type: string) {
        super();
        this.value = value;
        this.type = type;
    }

}

export class NullHint extends Hint {
    constructor() {
        super("null", "null");
    }
    
}

