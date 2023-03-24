import { Schema, ArraySchema, MapSchema, Context, type } from "@colyseus/schema";
import { getRandomAdj, Adjective } from "./Adjective";
import { getRandomNoun, Noun } from "./Noun";
import { Component } from "./Component";
import { Guess } from "./Guess";
import { Player } from "./Player";
import { Hint, NullHint } from "./Hint";

export class DyingMessageRoomState extends Schema {

  @type({ map: Component })
  components: MapSchema<Component> = new MapSchema<Component>();

  @type("number")
  life: number;

  @type({ map: Adjective })
  adjOptions: MapSchema<Adjective> = new MapSchema<Adjective>();

  @type({ map: Noun })
  nounOptions: MapSchema<Noun> = new MapSchema<Noun>();

  @type("number")
  round: number;

  @type("number")
  maxRounds: number;

  @type("string")
  phase: string;
  /*
  if PHASE =  NOTRUNNING: not running
              NOTREADY: Not all players ready
              ALLREADY: All players ready; 'Game Start' enabled
              GAMESTART: 'Game Start' clicked; 'Start Round' enabled; Novelist's turn before Round 1
              DETECTOR: Detector's turn of each round
              NOVELIST: Novelist's turn of each round
              FINALGUESS: Detector's turn after all rounds
              REVEAL: Moment of truth!
  */

  @type([ Guess ])
  guesses: ArraySchema<Guess>;

  @type("number")
  remainingGuesses: number;

  @type("number")
  maxGuesses: number;

  @type({ map: Player }) 
  playerMap: MapSchema<Player> = new MapSchema<Player>();

  @type( Hint )
  hintMode: Hint;
  
  // @type( Adjective )
  // nounMode: Adjective;

  @type("boolean")
  guessMode: boolean;

  constructor(
    life: number,
    components: string[], 
    options: number, 
    rounds: number,
    initial_hint_options: number,
    initial_hints: number,
    draw_hints: number,
    round_hints: number,
    numGuesses: number,
  ) {
    super();
    components.forEach(c => {this.components.set(c, new Component(c, options))})
    this.life = life;
    var num:number = initial_hint_options; 
    var i:number; 
    while (this.adjOptions.size < num) {
      const adj = getRandomAdj();
      this.adjOptions.set(adj.value, adj);
    }
    num = initial_hint_options;
    while (this.nounOptions.size < num) {
      const noun = getRandomNoun();
      this.nounOptions.set(noun.value, noun);
    }
    this.maxRounds = rounds;
    this.phase = "NOTREADY";
    this.guesses = new ArraySchema<Guess>();
    this.remainingGuesses = numGuesses;
    this.maxGuesses = numGuesses;
    this.hintMode = new NullHint();
    // this.adjMode = null;
    // this.nounMode = null;
    this.guessMode = false;
  }

}
