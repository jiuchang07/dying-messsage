import {Schema, ArraySchema, MapSchema, type} from "@colyseus/schema";

export class Player extends Schema {
    @type("string")
    id: string;

    @type("string")
    nickname: string;

    @type("boolean")
    isReady: boolean;

    @type("boolean")
    isNovelist: boolean;

    @type("boolean")
    isHost: boolean;

    constructor(public readonly _id: string, private _nickname: string, private _ready: boolean, public _isNovelist: boolean, private _host: boolean) {
        super();
        this.id = _id;
        this.nickname = _nickname;
        this.isReady = _ready;
        this.isNovelist = _isNovelist;
        this.isHost = _host;
    }

    // public get nickname(): String {
    //     return this._nickname
    // }
    // public set nickname(nickname: String) {
    //     this._nickname = nickname;
    // }
    // public get isReady(): boolean {
    //     return this.isReady
    // }
    // public set isReady(isReady: boolean) {
    //     this.isReady = isReady;
    // }
    // public get type(): boolean {
    //     return this.type;
    // }
    // public set type(type: boolean) {
    //     this.type = type;
    // }
    // public isNovelist(): boolean {
    //     return this.type === true; //NOVELIST
    // }
    // public isDetective(): boolean {
    //     return this.type === false; //DETECTIVE
    // }
    // public get isHost(): boolean {
    //     return this._isHost;
    // }
}