import {Schema, type} from "@colyseus/schema";
import {Option} from "./Option";

export class Guess extends Schema {
    @type("boolean")
    ruleOut: boolean; // True for the guesses to exclude OPTIONs, and False for the final guess

    @type(Option)
    option: Option;

    constructor(ruleOut: boolean, option: Option) {
        super();
        this.ruleOut = ruleOut;
        this.option = option;
    }
}
