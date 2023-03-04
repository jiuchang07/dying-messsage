import { Room, Delayed, Client } from "colyseus";
import { DyingMessageRoomState } from "./schema/DyingMessageRoomState";
import { Player } from "./Player";
import {ReadyState, NOT_READY, READY} from "../../frontend/htmls/readystate";
import { Hint } from "./schema/Hint";
import { Component } from "./schema/Component";
import { Option } from "./schema/Option";
import { Guess } from "./schema/Guess";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class DyingMessageRoom extends Room<DyingMessageRoomState> {
  private DEFAULT_LIFE = 4;
  public DEFAULT_COMPONENTS = ["motives", "occupations"]
  public DEFAULT_OPTIONS = 8;
  private DEFAULT_ROUNDS = 3;
  private DEFAULT_INITIAL_HINT_OPTIONS = 6; // Default number of adjectives and nouns to draw at setup
  private DEFAULT_INITIAL_HINTS = 3; // Default number of adjectives and nouns to give at setup
  private DEFAULT_DRAW_HINTS = 1; // Default number of adjectives and nouns to draw on each round
  private DEFAULT_ROUND_HINTS = 1; // Default number of total hints to give on each round

  private playerMap: Map<string, Player>;

  private gameLoop!: Delayed;


  constructor() {
      super();
      this.playerMap = new Map<string, Player>();
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
    for (const player of this.playerMap.values()) {
        if (player.isReady === false) {
            if (player.isHost === false) {
              console.log(player)
              return false;
            }
        }
    }
    return true;
  }

  private assignRoles(): boolean {
    if (this.playerMap.size <= 1) {
      console.log("Two or more player have to join the game!");
      return false;
    }
    var novelistIdx:number = Math.floor(Math.random() * this.playerMap.size);
    var novelistID:string = Array.from(this.playerMap.keys())[novelistIdx];
    this.playerMap.get(novelistID).type = true;
    return true;
  }

  private startGame() {
    this.state.currentTurn = true;
    
  }

  private checkGameOver() {
    if (this.state.life == 0) {
      this.state.outcome = false;
      this.state.phase = 0;
    }
  }

  async onCreate (options: any) {
    this.setState(new DyingMessageRoomState(
      this.DEFAULT_LIFE,
      this.DEFAULT_COMPONENTS, 
      this.DEFAULT_OPTIONS, 
      this.DEFAULT_ROUNDS,
      this.DEFAULT_INITIAL_HINT_OPTIONS,
      this.DEFAULT_INITIAL_HINTS,
      this.DEFAULT_DRAW_HINTS,
      this.DEFAULT_ROUND_HINTS
    ));
    // this.id= options;// options.get("roomId");
    this.roomId = options["roomId"];// options.get("roomId");
    // console.log("Room ID: " + this.roomId);

    this.onMessage("nickname", (client, message: String) => {
      this.playerMap.get(client.id).nickname = message.nickname;
      // this.state.players.set(client.id, message.nickname);
    });

    this.onMessage("ready", (client, message: ReadyState) => {
      console.log("received ready message");
      if (this.playerMap.has(client.id)) {
          var player = this.playerMap.get(client.id);
          if (player.isHost && message.isReady) {
            this.state.phase = 2;
          }
          player.isReady = message.isReady;
      }
      if (this.allPlayersReady()) {
          console.log("All players ready");
          if (this.assignRoles()) {
            this.state.phase = 1;
            // this.startGame();

            // this.startGameLoop();
          }
      } else {
          this.state.phase = 0;
      }
    });

    this.onMessage("hint", (client, message: {c: string, h: Hint}) => {
      if (this.playerMap.has(client.id) && this.playerMap.get(client.id).isNovelist()) {
        if (this.state.phase == 1) {
          if (message.h.type == "adjective") {
            var component = this.state.components.get(message.c);
            if (component.hintAdj.length == 1) {
              console.log("Adjective hint already given to component "+ message.c);
              return;
            } else {
              component.setHintAdj(message.h);
            }
            this.state.adjOptions.deleteAt(this.state.adjOptions.indexOf(message.h));
          } else if (message.h.type == "noun") {
            if (this.state.components.get(message.c).hintNoun.length == 1) {
              console.log("Noun hint already given to component "+ message.c);
              return;
            } else {
              component.setHintNoun(message.h);
            }
            this.state.nounOptions.deleteAt(this.state.nounOptions.indexOf(message.h));
          }
        } else if (this.state.phase == 3) {
          if (message.h.type == "adjective") {
            this.state.components.get(message.c).setHintAdj(message.h);
            this.state.adjOptions.deleteAt(this.state.adjOptions.indexOf(message.h));
          } else if (message.h.type == "noun") {
            this.state.components.get(message.c).setHintNoun(message.h);
            this.state.nounOptions.deleteAt(this.state.nounOptions.indexOf(message.h));
          }
        }
      } else {
        console.log("clinet is not a novelist!");
      }
    });

    this.onMessage("guess", (client, message:Option) => {
      if (this.playerMap.has(client.id) && this.playerMap.get(client.id).isDetective()) {
        if (this.state.phase == 2) {
          this.state.guesses.push(new Guess(true, message));
        } else if (this.state.phase == 4) {
          this.state.guesses.push(new Guess(false, message));
        }
      }
    });

    // this.onMessage("finishedGuessing", (client, _) => {
    //   this.state.guesses.forEach(g => {
    //     if (g.option.value == )
    //   } )
    // });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    this.playerMap.set(client.sessionId, new Player(client.sessionId, null, false, false, options["host"]));
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
