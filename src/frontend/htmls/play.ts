function checknickname(nickname:String): boolean {
    return true;
}

function roomExists(client: Client): boolean {
    var exists = false;
    client.getAvailableRooms("dying_message").then(rooms => {
        console.log(rooms)
        rooms.forEach((room) => {
            if (room.roomId == roomId) {
                console.log("true");
                exists = true;
            }
        });
        console.log(exists);
        return exists;
    });  
}

function askNickname(room:Room) {
    var nicknameModal = document.getElementById("nickname-modal");
    nicknameModal.style.display = "block";
    document.getElementById('nickname-btn').onclick = function() {
        const nickname = document.getElementById("nickname").value;
        if (checknickname(nickname)) {
            room.send("nickname", {nickname: nickname});
            nicknameModal.style.display = "none";
        } else {
            alert("Nickname is not available")
        }
    };
}

document.addEventListener('DOMContentLoaded', async () => {
    const client = new Colyseus.Client('ws://localhost:2567');// + port.toString());
    var readyModal = document.getElementById("ready-modal-content")

    client.joinById(roomId, {host:false}).then(room => {
        console.log("Room already exists");
        askNickname(room);
        readyModal.style.display = "block";
        var el = document.createElement('div');
        el.className = "button";
        el.textContent = "Ready";
        el.onclick = () => {
            if (el.textContent === "Ready") {
                room.send("ready", READY);
                el.textContent  = "Not Ready";
                el.className = "button button-secondary";
            } else {
                room.send("ready", NOT_READY);
                el.className = "button";
                el.textContent = "Ready";
            }
        }
        readyModal.appendChild(el);
    }).catch(e => {
        client.create("dying_message", {roomId: roomId, host:true}).then(room => {
            askNickname(room);
            readyModal.style.display = "block";
            var el = document.createElement('div');
            el.className = "button";
            el.textContent = "Game Start";
            room.onStateChange((newState: GameState) => {
                // var text = "Players/n" + newState.players.values();
                // room.playerMap.values().forEach(player => {
                //     text += (player.nickname+"/n");
                    
                // });
                // var textel = document.createElement('div')
                // textel.textContent = text;
                // readyModal.appendChild(textel);
                if (newState.phase === 0) {
                    el.className = "button button--secondary";
                    el.onclick = () => {};
                    
                } else if (newState.phase === 1) {
                    el.className = "button";
                    el.onclick = () => {
                        readyModal.style.display = "none";
                    }
                } else if (newState.phase === 2) {
                }
                readyModal.appendChild(el);
                
            });
        });
    })
});
 