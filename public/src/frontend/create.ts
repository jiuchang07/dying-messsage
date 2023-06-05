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
    // var pin:string = generateRoomId(client);
    // var el = document.createElement('div');
    // el.textContent = pin;
    // el.style.fontFamily = "Satire";
    // var pinEl = document.getElementById('pin');
    // pinEl.appendChild(el);
    // const copyButton = queryCopyButton();
    // copyButton.addEventListener("click", () => {
    //     copyPin(pin);
    // });
    // var el2 = document.createElement('div');
    // el2.innerHTML = "<a class='button' href='/play/"+pin+"' style='display: block;'> Play now </a>";
    // var playButton = document.getElementById('play');
    // playButton.appendChild(el2); 
    var room: Colyseus.Room = null;
    try {
        client.create("wait").then(room_instance => {
            room = room_instance
            console.log("joined successfully", room);
            var pin:string = room.id;
            var el = document.createElement('div');
            el.textContent = pin;
            el.style.fontFamily = "Satire";
            var pinEl = document.getElementById('pin');
            pinEl.appendChild(el);
            const copyButton = queryCopyButton();
            copyButton.addEventListener("click", () => {
                copyPin(pin);
            });
            var el2 = document.createElement('div');
            el2.innerHTML = "<a class='button' href='/play/"+pin+"' style='display: block;'> Play now </a>";
            var playButton = document.getElementById('play');
            playButton.appendChild(el2);
        })
    } catch (e) {
        console.error("join error", e);
    }
    // client.getAvailableRooms("dying_message").then(rooms => {
    //     rooms.forEach((room) => {
    //       console.log(room.roomId);
    //       console.log(room.clients);
    //       console.log(room.maxClients);
    //       console.log(room.metadata);
    //     });
    // });
});
