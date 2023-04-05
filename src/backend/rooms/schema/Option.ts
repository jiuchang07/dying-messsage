import {Schema, type} from "@colyseus/schema";
// import {Component} from "./Component";
 
export abstract class Option extends Schema {
    @type("string")
    abstract value: string;

    // @type(Component)
    // component: Component;

    @type("boolean")
    isInGame: boolean = false;

    @type("boolean")
    isSolution: boolean = false;

    @type("boolean")
    isExcluded: boolean = false;

    @type("boolean")
    isGuessed: boolean = false;

    @type("string")
    type: string;

    constructor() {
        super();

        // this.component = component;
    }
    
    setToSolution(): void {
        this.isSolution = true;
    }

}