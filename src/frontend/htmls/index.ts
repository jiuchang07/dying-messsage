// / <reference path="../../../node_modules/colyseus.js/lib/Client.d.ts" />
// / <reference path="../../../node_modules/colyseus.js/lib/Room.d.ts" />
// import {Client, Room} from "colyseus.js";
// import { Player } from "../../backend/rooms/Player";
// import {DyingMessageRoomState} from "../../backend/rooms/schema/DyingMessageRoomState";
// import {READY, NOT_READY} from "../../messages/readystate";
// import process from "process";
// const port = Number(process.env.PORT);
// console.log(port);

// const queryAdjButton = () => <HTMLDivElement>document.querySelector("#adj-buttons");
const queryReadyModal = () => <HTMLDivElement>document.querySelector("#ready-modal");
const queryReadyButton = () => <HTMLDivElement>document.querySelector("#ready");
const queryNotReadyButton = () => <HTMLDivElement>document.querySelector("#not-ready");
const queryCreateButton = () => <HTMLDivElement>document.querySelector("#create");
const queryJoinButton = () => <HTMLDivElement>document.querySelector("#join");
// import {DyingMessageRoomState} from "../../backend/rooms/schema/DyingMessageRoomState";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const queryCopyButton = () => <HTMLDivElement>document.querySelector("#copy");
// Generate a single 4 capital letter room ID.
function generateRoomIdSingle(): string {
    var result = '';
    for (var i = 0; i < 4; i++) {
        result += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
    }
    return result;
}

// 1. Get room IDs already registered with the Presence API.
// 2. Generate room IDs until you generate one that is not already used.
// 3. Register the new room ID with the Presence API.
function generateRoomId(client: Colyseus.Client): string {
    var currentIds = Array();
    client.getAvailableRooms("dying_message").then((rooms) => {
    rooms.forEach(room => {
        currentIds.push(room.roomId);
    })});;
    var id;
    do {
        id = generateRoomIdSingle();
    } while (currentIds.includes(id));

    return id;
}

function copyPin(pin:string) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(pin);
    // Alert the copied text
    alert("Copied the text: " + pin);
}
document.addEventListener('DOMContentLoaded', async () => {
    const client = new Colyseus.Client('ws://localhost:2567');// + port.toString());
    const room = await client.create("dying_message");
    console.log(room);
    var pin:string = generateRoomId(client);
    // var el = document.createElement('div');
    // el.textContent = pin;
    // el.style.fontFamily = "Satire";
    // var pinEl = document.getElementById('pin');
    // pinEl.appendChild(el);
    // const copyButton = queryCopyButton();
    // copyButton.addEventListener("click", () => {
    //     copyPin(pin);
    // });
    var el2 = document.createElement('div');
    el2.innerHTML = "<a class='button' href='/play/"+pin+"' style='display: block;'> Create a game </a>";
    var createButton = document.getElementById('create');
    createButton.appendChild(el2); 

    // const room: Room<DyingMessageRoomState> = await client.create<DyingMessageRoomState>("dyingmessage");
    // client.getAvailableRooms("dyingmessage").then(rooms => {
    //     rooms.forEach((room) => {
    //         console.log(room.roomId);
    //         console.log(room.clients);
    //         console.log(room.maxClients);
    //         console.log(room.metadata);
    //     });
    // }).catch(e => {
    //         console.error(e);
    // });
    // const createButton = queryCreateButton();
    // const joinButton = queryJoinButton();
    // createButton.addEventListener("click", () => {
    //     room.send("ready", READY); 
    //     readyButton.style.display = "none"; 
    //     notReadyButton.style.display = "block";
    // });
    // const readyModal = queryReadyModal();
    // const readyButton = queryReadyButton();
    // const notReadyButton = queryNotReadyButton();
    // readyButton.addEventListener("click", () => {
    //     room.send("ready", READY); 
    //     readyButton.style.display = "none"; 
    //     notReadyButton.style.display = "block";
    // });
    // notReadyButton.addEventListener("click", () => {
    //     room.send("ready", NOT_READY); 
    //     notReadyButton.style.display = "none"; 
    //     readyButton.style.display = "block";
    // });

    // room.onStateChange((newState: DyingMessageRoomState) => {
    //     if (newState.phase != 0) {
    //         // if (!(typeof document.onkeydown === "function")) {
    //         //     document.addEventListener('keydown', handleInput);
    //         // }
    //         readyModal.style.display = "none";
    //         // renderGame(newState);
    //     } else {
    //         // document.removeEventListener('keydown', handleInput);
    //     }
    // });
});