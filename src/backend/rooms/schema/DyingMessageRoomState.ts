import { Schema, ArraySchema, MapSchema, Context, type } from "@colyseus/schema";
import { getRandomAdj, Adjective } from "./Adjective";
import { getRandomNoun, Noun } from "./Noun";
import { Component } from "./Component";
import { Guess } from "./Guess";
import { Player } from "../Player";

export class DyingMessageRoomState extends Schema {

  @type({ map: Component })
  components: MapSchema<Component> = new MapSchema<Component>();

  @type("number")
  life: number;

  @type([ Adjective ])
  adjOptions: ArraySchema<Adjective> = new ArraySchema<Adjective>();

  @type([ Noun ])
  nounOptions: ArraySchema<Noun> = new ArraySchema<Noun>();

  @type("number")
  phase: number
  /*
  if PHASE =  -1: not running
              0: 'Game Start' enabled
              1: Novelist's turn before Round 1
              2: Detector's turn of each round
              3: Novelist's turn of each round
              4: Detector's turn after all rounds
  */

  @type("boolean")
  outcome: boolean

  @type("boolean")
  currentTurn: boolean

  @type([ Guess ])
  guesses: ArraySchema<Guess>;

  @type({ map: "string" }) 
  players: MapSchema<string>;

  constructor(
    life: number,
    components: string[], 
    options: number, 
    rounds: number,
    initial_hint_options: number,
    initial_hints: number,
    draw_hints: number,
    round_hints: number
  ) {
    super();
    components.forEach(c => {this.components.set(c, new Component(c, options))})
    this.life = life;
    var num:number = initial_hint_options; 
    var i:number; 
    for (i = num;i>=1;i--) {
        this.adjOptions.push(getRandomAdj());
    }
    num = initial_hint_options;
    for (i = num;i>=1;i--) {
      this.nounOptions.push(getRandomNoun());
    }
    this.phase = 0;
    this.outcome = null;
    this.currentTurn = null;
    this.initializeGuesses();
    this.players = new MapSchema<string>();
  }

  public initializeGuesses() {
    this.guesses = new ArraySchema<Guess>();
  }
}
