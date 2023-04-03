import { Room, Delayed, Client } from "colyseus";
import { DyingMessageRoomState } from "./schema/DyingMessageRoomState";
import { Player } from "./schema/Player";
import {ReadyState, NOT_READY, READY} from "../../frontend/htmls/readystate";
import { Hint, NullHint } from "./schema/Hint";
import { Component } from "./schema/Component";
import { Option } from "./schema/Option";
import { Guess } from "./schema/Guess";
import { getRandomAdj } from "./schema/Adjective";
import { getRandomNoun } from "./schema/Noun";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class DyingMessageRoom extends Room<DyingMessageRoomState> {
  private DEFAULT_LIFE = 4;
  public DEFAULT_COMPONENTS = ["motives", "occupations"]
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
      if (this.state.playerMap.has(client.id) && this.state.playerMap.get(client.id).isNovelist) {
        this.startHintMode(message);
      }
    }); 

    this.onMessage("hint", (client, message: string) => {
      if (this.state.playerMap.has(client.id) && this.state.playerMap.get(client.id).isNovelist) {
        var component = this.state.components.get(message);
        // var component = message;
        if (this.state.phase == "GAMESTART") { 
          if (this.state.hintMode.type == "adjective") {
            if (component.hintAdj.size == 1) {
              console.log("Adjective hint already given to component "+ component.value);
            } else {
              console.log("Adjective hint "+this.state.hintMode.value+" given to component "+ component.value);
              component.hintAdj.set(this.state.hintMode.value, this.state.hintMode);
              this.state.adjOptions.delete(this.state.hintMode.value);
            } 
          } else if (this.state.hintMode.type == "noun") {
            if (component.hintNoun.size == 1) {
              console.log("Noun hint already given to component "+ component.value);
            } else {
              component.hintNoun.set(this.state.hintMode.value, this.state.hintMode);
              this.state.nounOptions.delete(this.state.hintMode.value);
            }
          }
          this.state.givenAllInitialAdjHints = this.givenAllInitialAdjHints();
          this.state.givenAllInitialNounHints = this.givenAllInitialNounHints();
          this.state.givenAllInitialHints = this.givenAllInitialHints();
        } else if (this.state.phase == "NOVELIST") {
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
        this.state.hintMode = new NullHint();
      } else {
        console.log("client is not a novelist!");
      }
    });

    this.onMessage("cancel-hint", (client, message: {hint: Hint, comp: string}) => {
      if (this.state.playerMap.has(client.id) && this.state.playerMap.get(client.id).isNovelist) {
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
        if (this.state.phase == "GAMESTART") {
          this.state.givenAllInitialAdjHints = this.givenAllInitialAdjHints();
          this.state.givenAllInitialNounHints = this.givenAllInitialNounHints();
          this.state.givenAllInitialHints = this.givenAllInitialHints();
        } else if (this.state.phase == "NOVELIST") {
          this.state.remainingHints++;
          this.state.givenAllRoundHints = this.givenAllRoundHints();
        }
      }
    });

    this.onMessage("start-guess", (client, _) => {
      if (this.state.playerMap.has(client.id) && !this.state.playerMap.get(client.id).isNovelist) {
        this.startGuessMode();
      }
    });

    this.onMessage("guess", (client, message:Option) => {
      console.log("received guess", message.value);
      if (this.state.playerMap.has(client.id) && !this.state.playerMap.get(client.id).isNovelist) {
        var option = this.state.components[message.type].options[message.value];
        option.isGuessed = true;
        this.state.guesses.add(option);
        this.state.remainingGuesses--;
        // this.state.guessMode = false;
        if (this.state.phase == "FINALGUESS") {
          this.state.components[message.type].finalGuessed = true;
        }
      }
    });

    this.onMessage("cancel-guess", (client, message:Option) => {
      console.log("received cancel-guess", message.value);
      if (this.state.playerMap.has(client.id) && !this.state.playerMap.get(client.id).isNovelist) {
        var option = this.state.components[message.type].options[message.value];
        this.state.guesses.delete(option);
        var newOption = new (option.constructor as { new (): Option })();
        Object.assign(newOption, option);
        console.log(newOption instanceof Option);
        newOption.isGuessed = false;
        this.state.components[message.type].options[message.value] = newOption;
        this.state.remainingGuesses++;
        // this.state.guessMode = false;
        if (this.state.phase == "FINALGUESS") {
          this.state.components[message.type].finalGuessed = false;
        }
      }
    });

    this.onMessage("end-turn", (client, _) => {
      if (this.state.phase === "DETECTIVE") {
        if (this.checkGuessesRuleOut()) {
          this.state.guesses.forEach((option) => {
            var newOption = new (option.constructor as { new (): Option })();
            Object.assign(newOption, option);
            newOption.isGuessed = false;
            newOption.isExcluded = true;
            this.state.components[option.type].options[option.value] = newOption;
            console.log(option.value, option.isExcluded, this.state.components[option.type].options[option.value].isExcluded);
          });
          this.state.remainingGuesses = this.state.maxGuesses;
          this.state.guesses.clear();
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
          this.state.phase = "NOVELIST";
        } else {
          this.state.life--;
          if (this.state.life <= 0) {
            this.state.phase = "REVEAL";
          }
          // this.state.guesses.clear();
          // this.state.remainingGuesses = this.state.maxGuesses;
        }
      } else if (this.state.phase === "NOVELIST") {
        if (this.state.givenAllRoundHints) {
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
      } else if (this.state.phase === "GAMESTART") {
        if (this.state.givenAllInitialHints) {
          this.state.phase = "DETECTIVE";
      }
      } else if (this.state.phase === "FINALGUESS") {
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
    });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    this.state.playerMap.set(client.sessionId, new Player(client.sessionId, null, false, false, options["host"]));
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
