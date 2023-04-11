import { MapSchema } from "@colyseus/schema";
import { Room, Delayed, Client } from "colyseus";
import { DyingMessageRoomState } from "./schema/DyingMessageRoomState";
import { Player } from "./schema/Player";
import {ReadyState, NOT_READY, READY} from "../../frontend/htmls/readystate";
import { Hint, NullHint } from "./schema/Hint";
import { Component } from "./schema/Component";
import { Option } from "./schema/Option";
import { Guess } from "./schema/Guess";
import { Adjective, getRandomAdj } from "./schema/Adjective";
import { Noun, getRandomNoun } from "./schema/Noun";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class DyingMessageRoom extends Room<DyingMessageRoomState> {
  private DEFAULT_LIFE = 4;
  public DEFAULT_COMPONENTS = new MapSchema<string[]> ({"motives": ["jealousy", "greed", "revenge", "anger", "love", "hate", "envy", "fear", "desperation", "obsession", "pride", "power", "lust", "betrayal", "self-defense", "insanity", "protection", "accident", "blackmail", "extortion"], 
  "occupations": ["butler", "maid", "gardener", "cook", "guest", "chauffeur", "nanny", "housekeeper", "security guard", "personal assistant", "doctor", "nurse", "lawyer", "accountant", "teacher", "engineer", "scientist", "artist", "musician", "writer"],
  "weapons": ["knife", "gun", "hammer", "poison", "rope", "candlestick", "wrench", "lead pipe", "revolver", "screwdriver", "axe", "crowbar", "shovel", "bat", "golf club", "tire iron", "chainsaw", "scissors", "letter opener", "fire poker"]});
  public DEFAULT_OPTIONS = 8;
  private DEFAULT_GUESSES = 2;
  private DEFAULT_ROUNDS = 3;
  private DEFAULT_INITIAL_HINT_OPTIONS = 6; // Default number of adjectives and nouns to draw at setup
  // private DEFAULT_INITIAL_HINTS = 3; // Default number of adjectives and nouns to give at setup
  private DEFAULT_DRAW_HINTS = 1; // Default number of adjectives and nouns to draw on each round
  private DEFAULT_ROUND_HINTS = 1; // Default number of total hints to give on each round

  public playerMap: Map<string, Player>;

  private gameLoop!: Delayed;


  constructor() {
      super();
  }

	public presence: any;
	public roomId: string;
  // The channel where we register the room IDs.
  // This can be anything you want, it doesn't have to be `$mylobby`.
  private LOBBY_CHANNEL = "$mylobby";

  // Generate a single 4 capital letter room ID.
  generateRoomIdSingle(): string {
      let result = '';
      for (var i = 0; i < 4; i++) {
          result += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
      }
      return result;
  }

  // 1. Get room IDs already registered with the Presence API.
  // 2. Generate room IDs until you generate one that is not already used.
  // 3. Register the new room ID with the Presence API.
  async generateRoomId(): Promise<string> {
      const currentIds = await this.presence.smembers(this.LOBBY_CHANNEL);
      let id;
      do {
          id = this.generateRoomIdSingle();
      } while (currentIds.includes(id));

      await this.presence.sadd(this.LOBBY_CHANNEL, id);
      return id;
  }

  private allPlayersReady(): boolean {
    for (const player of this.state.playerMap.values()) {
        if (player.isReady === false) {
            if (player.isHost === false) {
              return false;
            }
        }
    }
    return true;
  }

  private assignRoles(): boolean {
    if (this.state.playerMap.size <= 1) {
      console.log("Two or more player have to join the game!");
      return false;
    }
    var novelistIdx:number = Math.floor(Math.random() * this.state.playerMap.size);
    var novelistID:string = Array.from(this.state.playerMap.keys())[novelistIdx];
    this.state.playerMap.get(novelistID).isNovelist = true;
    return true;
  }

  private startGame() {
    
  }

  private startHintMode(hint:string) {
      this.state.hintMode = this.state.adjOptions.get(hint);
      if (this.state.hintMode == null) {
        this.state.hintMode = this.state.nounOptions.get(hint);
      }
  }

  // private startNounMode(noun:Noun) {
  //   this.state.nounMode = noun;
  // }

  private startGuessMode() {
    this.state.guessMode = true;
  }

  private checkGuessesRuleOut() {
    var ret = true;
    this.state.guesses.forEach((option) => {
      if (option.isSolution) {
        ret = false;
      }
    });
    return ret;
  }

  private checkGuessesFinal() {
    var ret = true;
    this.state.guesses.forEach((option) => {
      if (!option.isSolution) {
        ret = false;
      }
    });
    return ret;
  }

  private givenAllRoundHints() {
    if (this.state.remainingHints == 0) {
      return true;
    } else {
      return false;
    }
  }

  private givenAllInitialHints() {
    this.state.givenAllInitialAdjHints = this.givenAllInitialAdjHints();
    this.state.givenAllInitialNounHints = this.givenAllInitialNounHints();
    return this.state.givenAllInitialAdjHints && this.state.givenAllInitialNounHints;
  }

  private givenAllInitialAdjHints() {
    var ret = true;
    this.state.components.forEach((comp, key) => {
      if (comp.hintAdj.size == 0)
        ret = false;
    });
    return ret;
  }
  private givenAllInitialNounHints() {
    var ret = true;
    this.state.components.forEach((comp, key) => {
      if (comp.hintNoun.size == 0)
        ret = false;
    });
    return ret;
  }

  private assignHints() {
    this.state.components.forEach((comp, key) => {
      comp.hintAdj.forEach((hint, key) => {
        var newAdj = new (hint.constructor as { new (): Adjective })();
        Object.assign(newAdj, hint);
        newAdj.assigned = true;
        comp.hintAdj[key] = newAdj;
      });
      comp.hintNoun.forEach((hint, key) => {
        var newNoun = new (hint.constructor as { new (): Noun })();
        Object.assign(newNoun, hint);
        newNoun.assigned = true;
        comp.hintNoun[key] = newNoun;
      });
    });
  }

  private hintAtGameStart(component: Component) {
    if (this.state.hintMode.type == "adjective") {
      component.hintAdj.set(this.state.hintMode.value, this.state.hintMode);
      this.state.adjOptions.delete(this.state.hintMode.value);
    } else if (this.state.hintMode.type == "noun") {
      component.hintNoun.set(this.state.hintMode.value, this.state.hintMode);
      this.state.nounOptions.delete(this.state.hintMode.value);
    }
    this.state.givenAllInitialHints = this.givenAllInitialHints();
  }

  private hintAtNovelist(component: Component) {
    if (this.state.hintMode.type == "adjective") {
      component.setHintAdj(this.state.hintMode);
      this.state.adjOptions.delete(this.state.hintMode.value);
    } else if (this.state.hintMode.type == "noun") {
      component.setHintNoun(this.state.hintMode);
      this.state.nounOptions.delete(this.state.hintMode.value);
    }
    this.state.remainingHints--;
    this.state.givenAllRoundHints = this.givenAllRoundHints();
  }

  private cancelHint(message: {hint: Hint, comp: string}) {
    var component = this.state.components[message.comp];
    if (message.hint.type == "adjective") {
      const hint = component.hintAdj[message.hint.value];
      component.hintAdj.delete(hint.value);
      this.state.adjOptions.set(hint.value, hint);
    } else if (message.hint.type == "noun") {
      const hint = component.hintNoun[message.hint.value];
      component.hintNoun.delete(hint.value);
      this.state.nounOptions.set(hint.value, hint);
    }
  }

  private updateGuessedOptions() {
    this.state.guesses.forEach((option) => {
      var newOption = new (option.constructor as { new (): Option })();
      Object.assign(newOption, option);
      newOption.isGuessed = false;
      newOption.isExcluded = true;
      this.state.components[option.type].options[option.value] = newOption;
    });
  }

  private addRoundHints() {
    var currentAdjOptionsSize = this.state.adjOptions.size;
    while (this.state.adjOptions.size < currentAdjOptionsSize + this.state.drawHints) {
      const adj = getRandomAdj();
      this.state.adjOptions.set(adj.value, adj);
    }
    var currentNounOptionsSize = this.state.nounOptions.size;
    while (this.state.nounOptions.size < currentNounOptionsSize + this.state.drawHints) {
      const noun = getRandomNoun();
      this.state.nounOptions.set(noun.value, noun);
    }
  }

  private endTurnForDetective() {
    if (this.checkGuessesRuleOut()) {
      this.updateGuessedOptions();
      this.state.remainingGuesses = this.state.maxGuesses;
      this.state.guesses.clear();
      this.addRoundHints();
      this.state.phase = "NOVELIST";
    } else {
      this.state.life--;
      if (this.state.life <= 0) {
        this.state.phase = "REVEAL";
      }
      // this.state.guesses.clear();
      // this.state.remainingGuesses = this.state.maxGuesses;
    }
  }

  private endTurnForNovelist() {
    this.assignHints();
    if (this.state.round < this.state.maxRounds) {
      this.state.round++;
      this.state.remainingHints = this.state.maxHints;
      this.state.givenAllRoundHints = this.givenAllRoundHints();
      this.state.phase = "DETECTIVE";
    } else {
      this.state.phase = "FINALGUESS";
      this.state.remainingGuesses = this.state.components.size;
    }
  }

  private endTurnForGameStart() {
    this.assignHints();
    this.state.phase = "DETECTIVE";
  }

  private endTurnForFinalGuess() {
    if (this.checkGuessesFinal()) {
      this.state.phase = "REVEAL";
    } else {
      this.state.life--;
      if (this.state.life <= 0) {
        this.state.phase = "REVEAL";
      }
      // this.state.guesses.clear();
      // this.state.remainingGuesses = this.state.maxGuesses;
    }
  }
  private checkGameOver() {
    if (this.state.life == 0) {
      this.state.phase = "NOTRUNNING";
    }
  }

  async onCreate (options: any) {
    this.setState(new DyingMessageRoomState(
      this.DEFAULT_LIFE,
      this.DEFAULT_COMPONENTS, 
      this.DEFAULT_OPTIONS, 
      this.DEFAULT_ROUNDS,
      this.DEFAULT_INITIAL_HINT_OPTIONS,
      // this.DEFAULT_INITIAL_HINTS,
      this.DEFAULT_DRAW_HINTS,
      this.DEFAULT_ROUND_HINTS,
      this.DEFAULT_GUESSES
    ));
    this.roomId = options["roomId"];

    this.onMessage("nickname", (client, message: String) => {
      this.state.playerMap.get(client.id).nickname = message.nickname;
      // this.state.players.set(client.id, message.nickname);
    });

    this.onMessage("ready", (client, message: ReadyState) => {
      if (this.state.playerMap.has(client.id)) { 
          var player = this.state.playerMap.get(client.id)
          player.isReady = message.isReady;
          if (player.isHost && player.isReady) {
            this.state.phase = "GAMESTART";
            return;
          }
      }
      if (this.allPlayersReady()) {
          if (this.assignRoles()) {
            this.state.phase = "ALLREADY";
            this.startGame();
            // this.startGameLoop();
          }
      } else {
          this.state.phase = "NOTREADY";
      }
    });

    this.onMessage("start-hint", (client, message: string) => {
      this.startHintMode(message);
    }); 

    this.onMessage("hint", (client, message: string) => {
      var component = this.state.components.get(message);
      if (this.state.phase == "GAMESTART") { 
        this.hintAtGameStart(component);
      } else if (this.state.phase == "NOVELIST") {
        this.hintAtNovelist(component); 
      }
      this.state.hintMode = new NullHint();
    });

    this.onMessage("cancel-hint", (client, message: {hint: Hint, comp: string}) => {
      this.cancelHint(message);
      if (this.state.phase == "GAMESTART") {
        this.state.givenAllInitialHints = this.givenAllInitialHints();
      } else if (this.state.phase == "NOVELIST") {
        this.state.remainingHints++;
        this.state.givenAllRoundHints = this.givenAllRoundHints();
      }
    });

    this.onMessage("start-guess", (client, _) => {
      this.startGuessMode();
    });

    this.onMessage("guess", (client, message:Option) => {
      var option = this.state.components[message.type].options[message.value];
      option.isGuessed = true;
      this.state.guesses.add(option);
      this.state.remainingGuesses--;
      // this.state.guessMode = false;
      if (this.state.phase == "FINALGUESS") {
        this.state.components[message.type].finalGuessed = true;
      }
    });

    this.onMessage("cancel-guess", (client, message:Option) => {
      var option = this.state.components[message.type].options[message.value];
      this.state.guesses.delete(option);
      var newOption = new (option.constructor as { new (): Option })();
      Object.assign(newOption, option);
      newOption.isGuessed = false;
      this.state.components[message.type].options[message.value] = newOption;
      this.state.remainingGuesses++;
      // this.state.guessMode = false;
      if (this.state.phase == "FINALGUESS") {
        this.state.components[message.type].finalGuessed = false;
      }
    });

    this.onMessage("end-turn", (client, _) => {
      if (this.state.phase === "DETECTIVE") {
        this.endTurnForDetective();
      } else if (this.state.phase === "NOVELIST") {
        this.endTurnForNovelist();
      } else if (this.state.phase === "GAMESTART") {
        this.endTurnForGameStart();
      } else if (this.state.phase === "FINALGUESS") {
        this.endTurnForFinalGuess();
      }
    });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    this.state.playerMap.set(client.sessionId, new Player(client.sessionId, null, false, false, options["host"]));
    console.log(this.state.components["motives"].options.size);
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  async onDispose() {
    console.log("room", this.roomId, "disposing...");
    this.presence.srem(this.LOBBY_CHANNEL, this.roomId);

  }
  onError(code, message:string) {
    console.log("oops, error ocurred:");
    console.log(message);
  }
}
