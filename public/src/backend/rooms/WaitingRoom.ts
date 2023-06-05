import { Room, Delayed, Client } from "colyseus";
import { WaitingRoomState } from "./schema/WaitingRoomState";
import { Player } from "./schema/Player";
import {ReadyState, NOT_READY, READY} from "../../frontend/htmls/readystate";
import { Hint } from "./schema/Hint";
import { Component } from "./schema/Component";
import { Option } from "./schema/Option";
import { Guess } from "./schema/Guess";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class WaitingRoom extends Room<WaitingRoomState> {
  private playerMap: Map<string, Player>;

  private gameLoop!: Delayed;

  public presence: any;
	public roomId: string;
  // The channel where we register the room IDs.
  // This can be anything you want, it doesn't have to be `$mylobby`.
  private LOBBY_CHANNEL = "$mylobby";

  constructor() {
      super();
      this.playerMap = new Map<string, Player>();
  }

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
        if (!player.isReady) {
            return false;
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

  async onCreate (options: any) {
    this.setState(new WaitingRoomState());

    this.onMessage("ready", (client, message: ReadyState) => {
      if (this.playerMap.has(client.id)) {
          this.playerMap.get(client.id).isReady = message.isReady;
      }
      if (this.allPlayersReady()) {

      }
    });

  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    this.playerMap.set(client.sessionId, new Player(client.sessionId, false, null));
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  async onDispose() {
    console.log("room", this.roomId, "disposing...");
    this.presence.srem(this.LOBBY_CHANNEL, this.roomId);

  }

}
