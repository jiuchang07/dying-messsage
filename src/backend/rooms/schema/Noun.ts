import {Hint} from "./Hint";
 
export class Noun extends Hint {
    constructor(value:string) {
        super(value, "noun");
    }
}

export const getRandomNoun = () => {
    const _getRandomBlock = <T extends Noun>(type: { new(): T }): T => {
        return new type();
    }
    const nextBlock = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    return _getRandomBlock(nextBlock);
}

const NOUNS = [
    class Rectangle extends Noun {
        value = "rectangle";
        constructor() {
            super();
        }
    },
    class Metal extends Noun {
        value = "metal";
        constructor() {
            super();
        }
    },
    class Flower extends Noun {
        value = "flower";
        constructor() {
            super();
        }
    },
    class Tree extends Noun {
        value = "tree";
        constructor() {
            super();
        }
    },
    class Relationship extends Noun {
        value = "relationship";
        constructor() {
            super();
        }
    },
    class Sea extends Noun {
        value = "sea";
        constructor() {
            super();
        }
    },
    class Body extends Noun {
        value = "body";
        constructor() {
            super();
        }
    },
    class Contact extends Noun {
        value = "contact";
        constructor() {
            super();
        }
    },
    class Head extends Noun {
        value = "head";
        constructor() {
            super();
        }
    },
    class Hand extends Noun {
        value = "hand";
        constructor() {
            super();
        }
    },
    class Bridge extends Noun {
        value = "bridge";
        constructor() {
            super();
        }
    },
    class Voice extends Noun {
        value = "voice";
        constructor() {
            super();
        }
    },
    class Hole extends Noun {
        value = "hole";
        constructor() {
            super();
        }
    },
    class Water extends Noun {
        value = "water";
        constructor() {
            super();
        }
    },
    class Fire extends Noun {
        value = "fire";
        constructor() {
            super();
        }
    },
    class Sky extends Noun {
        value = "sky";
        constructor() {
            super();
        }
    },
    class Ceiling extends Noun {
        value = "ceiling";
        constructor() {
            super();
        }
    }
];