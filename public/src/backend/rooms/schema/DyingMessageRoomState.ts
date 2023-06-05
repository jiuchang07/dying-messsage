import { Schema, CollectionSchema, MapSchema, SetSchema, type } from "@colyseus/schema";
import { Component, createOptions } from "./Component";
import { Player } from "./Player";
import { Hint, NullHint } from "./Hint";
import { Option } from "./Option";


export class DyingMessageRoomState extends Schema {

  @type({ map: Component })
  components: MapSchema<Component> = new MapSchema<Component>();

  // @type({ map: "string" })
  // optionImages: MapSchema<string> = new MapSchema<string>();

  @type("number")
  life: number;

  @type(["string"])
  allAdj: string[] = [];

  @type(["string"])
  allNoun: string[] = [];

  @type({ map: Hint })
  adjOptions: MapSchema<Hint> = new MapSchema<Hint>();

  @type({ map: Hint })
  nounOptions: MapSchema<Hint> = new MapSchema<Hint>();

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
    components: MapSchema<string[]>, 
    options: number, 
    rounds: number,
    initial_hint_options: number,
    hints: MapSchema<string[]>,
    drawHints: number,
    roundHints: number,
    numGuesses: number,
  ) {
    super();
    components.forEach((o, c) => {this.components.set(c, new Component(c, o))})
    // this.optionImages = optionImages;
    this.setOptions(options);
    this.allAdj = hints.get("adjectives");
    this.allNoun = hints.get("nouns");
    this.life = life;
    this.setHints(initial_hint_options);
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
  
  private setOptions(options: number): void {
    this.components.forEach((c, k) => {
      var optionsInGame: SetSchema<string> = new SetSchema<string>();
      while (optionsInGame.size < options) {
        var option = c.allOptions[Math.floor(Math.random() * c.allOptions.length)];
        optionsInGame.add(option);
      }
      createOptions(optionsInGame, k, c); 
    });
  }
  private setHints(initial_hint_options: number): void {
    var num:number = initial_hint_options; 
    var i:number; 
    while (this.adjOptions.size < num) {
      this.drawHint(this.allAdj, this.adjOptions, "adjective");
    }
    num = initial_hint_options;
    while (this.nounOptions.size < num) {
      this.drawHint(this.allNoun, this.nounOptions, "noun");
    }
  }
  public drawHint(allHint:string[], hintInGame:MapSchema<Hint>, type:string): void {
    const randomIdx = Math.floor(Math.random() * allHint.length);
    const hintValue = allHint[randomIdx];
    delete allHint[randomIdx];
    const hint = new Hint(hintValue, type);
    hintInGame.set(hint.value, hint);
  }
}
