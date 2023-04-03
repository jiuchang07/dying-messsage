import {Schema, ArraySchema, MapSchema, type} from "@colyseus/schema";
import {Option} from "./Option";
import {Hint} from "./Hint";
import { Adjective } from "./Adjective";
import { Noun } from "./Noun";

export class Component extends Schema {
    @type("string")
    value: string;

    @type({ map: Option })
    options: MapSchema<Option> = new MapSchema<Option>();

    @type({ map: Adjective })
    hintAdj: MapSchema<Adjective> = new MapSchema<Adjective>();

    @type({ map: Noun })
    hintNoun: MapSchema<Noun> = new MapSchema<Noun>();

    @type("boolean")
    finalGuessed: boolean = false;

    constructor(value: string, numOptions: number) {
        super();
        // var options:any[];
        // if (value == "motives") {
        //     options = MOTIVES;
        // } else if (value == "occupations") {
        //     options = OCCUPATIONS;
        // }
        // var num:number = numOptions; 
        // var i:number; 
        // for (i = num;i>=1;i--) {
        //     this.options.push(getRandomOption(options));
        // }
        var num:number = numOptions; 
        var i:number; 
        var valuesSoFar:string[] = [];
        while (this.options.size < num) {
            if (value == "motives") {
                var option = getRandomMotives();
            } else if (value == "occupations") {
                var option = getRandomOccupations();
            }
          this.options.set(option.value, option);
        }
        // for (i = num;i>=1;i--) {
        //     if (value == "motives") {
        //         var option = getRandomMotives();
        //         while (valuesSoFar.includes(option.value)) {
        //             option = getRandomMotives();
        //         } 
        //     } else if (value == "occupations") {
        //         var option = getRandomOccupations();
        //         while (valuesSoFar.includes(option.value)) {
        //             option = getRandomOccupations();
        //         } 
        //     }
        //     this.options.set(option.value, option);
                // valuesSoFar.push(option.value);
        // }
        var options = Array.from(this.options.values());
        options[Math.floor(Math.random() * this.options.size)].setToSolution();
        this.value = value;
    }

    public setHintAdj(hint:Adjective) {
        this.hintAdj.set(hint.value, hint);
    }

    public setHintNoun(hint:Noun) {
        this.hintNoun.set(hint.value, hint);
    }

    public getValue() {
        return this.value;
    }
}

export const getRandomMotives = () => {
    const _getRandomBlock = <T extends Option>(type: { new(): T }): T => {
        return new type();
    }
    const nextBlock = MOTIVES[Math.floor(Math.random() * MOTIVES.length)];
    return _getRandomBlock(nextBlock);
}
export const getRandomOccupations = () => {
    const _getRandomBlock = <T extends Option>(type: { new(): T }): T => {
        return new type();
    }
    const nextBlock = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    return _getRandomBlock(nextBlock);
}
export const getRandomOption = (options:any[]) => {
    const _getRandomBlock = <T extends Option>(types: { new(): T }): T => {
        return new types();
    }
    const idx = Math.floor(Math.random() * options.length);
    const nextBlock = options[idx];
    options = options.splice(idx, 1);
    return _getRandomBlock(nextBlock);
}

// Library of different options for different components
const MOTIVES = [
    class Inheritance extends Option {
        value = "Inheritance";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Fun extends Option {
        value = "Fun";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Robbery extends Option {
        value = "Robbery";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Stalking extends Option {
        value = "Stalking";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Cheating extends Option {
        value = "Cheating";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Fraud extends Option {
        value = "Fraud";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class LifeInsurance extends Option {
        value = "Life Insurance";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class DomesticViolence extends Option {
        value = "Domestic Violence";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Debt extends Option {
        value = "Debt";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Envy extends Option {
        value = "Envy";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Betrayal extends Option {
        value = "Betrayal";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    },
    class Threat extends Option {
        value = "Threat";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "motives";
        constructor() {
            super();
        }
    }
];

const OCCUPATIONS = [
    class Musician extends Option {
        value = "Musician";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Bartender extends Option {
        value = "Bartender";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Reporter extends Option {
        value = "Reporter";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Singer extends Option {
        value = "Singer";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Lawyer extends Option {
        value = "Lawyer";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class DrugDealer extends Option {
        value = "Drug Dealer";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class MovieDirector extends Option {
        value = "Movie Director";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Architect extends Option {
        value = "Architect";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Guard extends Option {
        value = "Guard";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Boxer extends Option {
        value = "Boxer";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Poet extends Option {
        value = "Poet";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Realtor extends Option {
        value = "Realtor";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class HairDresser extends Option {
        value = "Hair Dresser";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Doctor extends Option {
        value = "Doctor";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Soldier extends Option {
        value = "Soldier";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    },
    class Police extends Option {
        value = "Police";
        isInGame = true;
        isExcluded = false;
        isSolution = false;
        type = "occupations";
        constructor() {
            super();
        }
    }
];