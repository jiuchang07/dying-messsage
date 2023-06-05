// const querySubmitButton = () => <HTMLDivElement>document.querySelector("#submit");
// const queryRoomId = () => <HTMLDivElement>document.querySelector("#roomid");
const queryForm = () => <HTMLFormElement>document.querySelector("#roomid");

document.addEventListener('DOMContentLoaded', async () => {
    const client = new Colyseus.Client('ws://localhost:2567');// + port.toString());
    var roomIds = [];
    client.getAvailableRooms("dying_message").then(rooms => {
        rooms.forEach((room) => {
            roomIds.push(room.roomId);
        });
    });
    document.getElementById('btn').onclick = function() {
        const roomid = document.getElementById("roomid").value;
        if (roomIds.indexOf(roomid) > -1) {
            window.location.href = "/play/" + roomid;
        } else {
            alert("No room exists with Room ID '" + String(roomid) + "'. Try creating a room first.")
        }
    };



});
