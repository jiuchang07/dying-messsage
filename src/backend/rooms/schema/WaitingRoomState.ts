import { Schema, ArraySchema, MapSchema, Context, type } from "@colyseus/schema";

export class WaitingRoomState extends Schema {

  @type("number")
  life: number;

  @type("number")
  phase: number

  @type("boolean")
  outcome: boolean

  @type("boolean")
  currentTurn: boolean

  constructor() {
    super();
    this.phase = 0;
    this.outcome = null;
    this.currentTurn = null;
  }

}
