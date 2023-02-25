import {Client, Room} from "colyseus.js";
import { Player } from "../../backend/rooms/Player";
import {DyingMessageRoomState} from "../../backend/rooms/schema/DyingMessageRoomState";
import {READY, NOT_READY} from "../htmls/readystate";

const port = Number(process.env.PORT);
console.log(port);

// const queryAdjButton = () => <HTMLDivElement>document.querySelector("#adj-buttons");
const queryReadyModal = () => <HTMLDivElement>document.querySelector("#ready-modal");
const queryReadyButton = () => <HTMLDivElement>document.querySelector("#ready");
const queryNotReadyButton = () => <HTMLDivElement>document.querySelector("#not-ready");
const queryCreateButton = () => <HTMLDivElement>document.querySelector("#create");
const queryJoinButton = () => <HTMLDivElement>document.querySelector("#join");

document.addEventListener('DOMContentLoaded', async () => {
    const client = new Client('ws://localhost:' + port.toString());


    const room: Room<DyingMessageRoomState> = await client.create<DyingMessageRoomState>("dyingmessage");
    client.getAvailableRooms("dyingmessage").then(rooms => {
        rooms.forEach((room) => {
            console.log(room.roomId);
            console.log(room.clients);
            console.log(room.maxClients);
            console.log(room.metadata);
        });
    }).catch(e => {
            console.error(e);
    });
    const createButton = queryCreateButton();
    const joinButton = queryJoinButton();
    createButton.addEventListener("click", () => {
        room.send("ready", READY); 
        readyButton.style.display = "none"; 
        notReadyButton.style.display = "block";
    });
    const readyModal = queryReadyModal();
    const readyButton = queryReadyButton();
    const notReadyButton = queryNotReadyButton();
    readyButton.addEventListener("click", () => {
        room.send("ready", READY); 
        readyButton.style.display = "none"; 
        notReadyButton.style.display = "block";
    });
    notReadyButton.addEventListener("click", () => {
        room.send("ready", NOT_READY); 
        notReadyButton.style.display = "none"; 
        readyButton.style.display = "block";
    });

    room.onStateChange((newState: DyingMessageRoomState) => {
        if (newState.phase != 0) {
            // if (!(typeof document.onkeydown === "function")) {
            //     document.addEventListener('keydown', handleInput);
            // }
            readyModal.style.display = "none";
            // renderGame(newState);
        } else {
            // document.removeEventListener('keydown', handleInput);
        }
    });
});