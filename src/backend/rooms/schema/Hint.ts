import {Schema, type} from "@colyseus/schema";
 
export abstract class Hint extends Schema {
    @type("string")
    abstract value: string;

    @type("string")
    type: string;

    constructor() {
        super();
    }

}

