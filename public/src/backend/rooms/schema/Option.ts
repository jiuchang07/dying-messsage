import {Schema, type} from "@colyseus/schema";
 
export class Option extends Schema {
    @type("string")
    value: string;

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

    constructor(value: string, type: string, isInGame: boolean = false) {
        super();
        this.value = value;
        this.isInGame = isInGame;
        this.type = type;
        // this.component = component;
    }
    
    setToSolution(): void {
        this.isSolution = true;
    }

}