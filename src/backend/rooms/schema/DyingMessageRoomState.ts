import { Schema, ArraySchema, MapSchema, Context, type } from "@colyseus/schema";
import { getRandomAdj, Adjective } from "./Adjective";
import { getRandomNoun, Noun } from "./Noun";
import { Component } from "./Component";
import { Guess } from "./Guess";
import { Player } from "./Player";

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
              0: Not all players ready
              1: All players ready; 'Game Start' enabled
              2: 'Game Start' clicked; 'Start Round' enabled; Novelist's turn before Round 1
              3: Detector's turn of each round
              4: Novelist's turn of each round
              5: Detector's turn after all rounds
              6: Moment of truth!
  */

  @type([ Guess ])
  guesses: ArraySchema<Guess>;

  @type("number")
  remaining_guesses: number;

  @type({ map: Player }) 
  playerMap: MapSchema<Player> = new MapSchema<Player>();

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
    for (i = num;i>=1;i--) {
        this.adjOptions.push(getRandomAdj());
    }
    num = initial_hint_options;
    for (i = num;i>=1;i--) {
      this.nounOptions.push(getRandomNoun());
    }
    this.phase = 0;
    this.initializeGuesses(numGuesses);
  }

  public initializeGuesses(numGuesses: number) {
    this.guesses = new ArraySchema<Guess>();
    this.remaining_guesses = numGuesses;
  }
}
