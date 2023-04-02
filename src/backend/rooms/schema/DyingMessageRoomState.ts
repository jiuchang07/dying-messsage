import { Schema, CollectionSchema, MapSchema, Context, type } from "@colyseus/schema";
import { getRandomAdj, Adjective } from "./Adjective";
import { getRandomNoun, Noun } from "./Noun";
import { Component } from "./Component";
import { Player } from "./Player";
import { Hint, NullHint } from "./Hint";
import { Option } from "./Option";

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
              DETECTIVE: DETECTIVE's turn of each round
              NOVELIST: Novelist's turn of each round
              FINALGUESS: DETECTIVE's turn after all rounds
              REVEAL: Moment of truth!
  */

  @type({ collection: Option })
  guesses: CollectionSchema<Option>;

  @type("number")
  remainingGuesses: number;

  @type("number")
  maxGuesses: number;

  @type("number")
  maxHints: number;

  @type({ map: Player }) 
  playerMap: MapSchema<Player> = new MapSchema<Player>();

  @type( Hint )
  hintMode: Hint;
  
  // @type( Adjective )
  // nounMode: Adjective;

  @type("boolean")
  guessMode: boolean;

  @type("boolean")
  givenAllInitialHints: boolean;

  @type("boolean")
  givenAllInitialAdjHints: boolean;
  
  @type("boolean")
  givenAllInitialNounHints: boolean;

  @type("boolean")
  givenAllRoundHints: boolean;

  @type("number")
  remainingHints: number;

  @type("number")
  drawHints: number;

  constructor(
    life: number,
    components: string[], 
    options: number, 
    rounds: number,
    initial_hint_options: number,
    // initial_hints: number,
    drawHints: number,
    roundHints: number,
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
    this.round = 1;
    this.maxRounds = rounds;
    this.phase = "NOTREADY";
    this.guesses = new CollectionSchema<Option>();
    this.remainingGuesses = numGuesses;
    this.remainingHints = roundHints;
    this.maxGuesses = numGuesses;
    this.maxHints = roundHints;
    this.hintMode = new NullHint();
    this.drawHints = drawHints;
    // this.adjMode = null;
    // this.nounMode = null;
    this.guessMode = false;
    this.givenAllInitialHints = false;
    this.givenAllInitialAdjHints = false;
    this.givenAllInitialNounHints = false;
    this.givenAllRoundHints = false;
  }

}
// export const givenAllHints = (state:DyingMessageRoomState) => {
//   state.components.forEach((comp, key) => {
//     if (comp.hintAdj.length == 0 || comp.hintNoun.length == 0)
//       return false;
//   });
//   return true;
// }