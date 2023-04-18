import {Hint} from "./Hint";
 
export class Adjective extends Hint {
    constructor(value: string) {
        super(value, "adjective");
    }
}

export const getRandomAdj = () => {
    const _getRandomBlock = <T extends Adjective>(type: { new(): T }): T => {
        return new type();
    }
    const nextBlock = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    return _getRandomBlock(nextBlock);
}

const ADJECTIVES = [
    class Cold extends Adjective {
        value = "cold";
        constructor() {
            super();
        }
    },
    class Warm extends Adjective {
        value = "warm";
        constructor() {
            super();
        }
    },
    class Hot extends Adjective {
        value = "hot";
        constructor() {
            super();
        }
    },
    class Brave extends Adjective {
        value = "brave";
        constructor() {
            super();
        }
    },
    class Loyal extends Adjective {
        value = "loyal";
        constructor() {
            super();
        }
    },
    class Honest extends Adjective {
        value = "honest";
        constructor() {
            super();
        }
    },
    class Passionate extends Adjective {
        value = "passionate";
        constructor() {
            super();
        }
    },
    class Creative extends Adjective {
        value = "creative";
        constructor() {
            super();
        }
    },
    class Kind extends Adjective {
        value = "kind";
        constructor() {
            super();
        }
    },
    class Cheap extends Adjective {
        value = "cheap";
        constructor() {
            super();
        }
    },
    class Confined extends Adjective {
        value = "confined";
        constructor() {
            super();
        }
    },
    class Long extends Adjective {
        value = "long";
        constructor() {
            super();
        }
    },
    class Small extends Adjective {
        value = "small";
        constructor() {
            super();
        }
    },
    class Big extends Adjective {
        value = "big";
        constructor() {
            super();
        }
    },
    class Short extends Adjective {
        value = "short";
        constructor() {
            super();
        }
    },
    class Skilled extends Adjective {
        value = "skilled";
        constructor() {
            super();
        }
    },
    class Artistic extends Adjective {
        value = "artistic";
        constructor() {
            super();
        }
    },
    class Basic extends Adjective {
        value = "basic";
        constructor() {
            super();
        }
    },
    class Light extends Adjective {
        value = "light";
        constructor() {
            super();
        }
    },
    class Mature extends Adjective {
        value = "mature";
        constructor() {
            super();
        }
    },
    class Fast extends Adjective {
        value = "fast";
        constructor() {
            super();
        }
    },
    class Slow extends Adjective {
        value = "slow";
        constructor() {
            super();
        }
    },
    class Filthy extends Adjective {
        value = "Filthy";
        constructor() {
            super();
        }
    },
    class Clean extends Adjective {
        value = "clean";
        constructor() {
            super();
        }
    }
];