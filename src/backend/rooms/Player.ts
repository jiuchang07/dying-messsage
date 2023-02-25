export class Player {
    constructor(public readonly id: string, private _nickname: String, private _ready: boolean, public _type: boolean, private _host: boolean) {
    }

    public get nickname(): String {
        return this._nickname
    }
    public set nickname(nickname: String) {
        this._nickname = nickname;
    }
    public get isReady(): boolean {
        return this._ready
    }
    public set isReady(isReady: boolean) {
        this._ready = isReady;
    }
    public get type(): boolean {
        return this._type;
    }
    public set type(type: boolean) {
        this._type = type;
    }
    public isNovelist(): boolean {
        return this._type === true; //NOVELIST
    }
    public isDetective(): boolean {
        return this._type === false; //DETECTIVE
    }
    public get isHost(): boolean {
        return this._host;
    }
}