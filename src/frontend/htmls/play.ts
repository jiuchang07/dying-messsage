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

/*
    This function draws a gameboard displaying 
    1. all options for each component in newState.components which is a dictionary 
    from component name in string to a Component instance, which contains a list of 
    options in its 'options' variable
    2. all adjectives and nouns in newState.adjOptions and newState.nounOptions
    3. the number of lives left 
    4. the number of guesses left.
*/
function drawGameboard(newState: GameState, room: Room) {
    var gameboard = document.getElementById("gameboard");
    gameboard.innerHTML = "";
    var adjOptions = document.createElement("div");
    adjOptions.className = "adj-options";
    var nounOptions = document.createElement("div");
    nounOptions.className = "noun-options";
    var components = document.createElement("div");
    components.className = "components";
    var lives = document.createElement("div");
    lives.className = "lives";
    var guesses = document.createElement("div");
    guesses.className = "guesses";
    var adjOptionsTitle = document.createElement("div");
    adjOptionsTitle.className = "adj-options-title";
    adjOptionsTitle.textContent = "Adjectives";
    var nounOptionsTitle = document.createElement("div");
    nounOptionsTitle.className = "noun-options-title";
    nounOptionsTitle.textContent = "Nouns";
    var componentsTitle = document.createElement("div");
    componentsTitle.className = "components-title";
    componentsTitle.textContent = "Components";
    var livesTitle = document.createElement("div");
    livesTitle.className = "lives-title";
    livesTitle.textContent = "Lives";
    var guessesTitle = document.createElement("div");
    guessesTitle.className = "guesses-title";
    guessesTitle.textContent = "Guesses";
    var adjOptionsList = document.createElement("div");
    adjOptionsList.className = "adj-options-list";
    var nounOptionsList = document.createElement("div");
    nounOptionsList.className = "noun-options-list";
    var componentsList = document.createElement("div");
    componentsList.className = "components-list";
    var livesList = document.createElement("div");
    livesList.className = "lives-list";
    var guessesList = document.createElement("div");
    guessesList.className = "guesses-list";

    newState.adjOptions.forEach(adj => {
        var adjOption = document.createElement("div");
        adjOption.className = "adj-option";
        adjOption.textContent = adj;
        adjOption.onclick = () => {
            room.send("adjOption", adj);
        }
        adjOptionsList.appendChild(adjOption);
    });
    newState.nounOptions.forEach(noun => {
        var nounOption = document.createElement("div");
        nounOption.className = "noun-option";
        nounOption.textContent = noun;

        nounOption.onclick = () => {
            room.send("nounOption", noun);
        }
        nounOptionsList.appendChild(nounOption);
    });
    // for (var key in newState.components) {
    //     var component = document.createElement("div");
    //     component.className = "component";
    //     var componentTitle = document.createElement("div");
    //     componentTitle.className = "component-title";
    //     componentTitle.textContent = key;
    //     component.appendChild(componentTitle);
    //     newState.components[key].options.forEach(option => {
    //         var optionDiv = document.createElement("div");
    //         optionDiv.className = "option";
    //         optionDiv.textContent = option;
    //         optionDiv.onclick = () => {
    //             room.send("componentOption", {component: key, option: option});
    //         }
    //         component.appendChild(optionDiv);
    //     });
    //     componentsList.appendChild(component);
    // }
    for (var i = 0; i < newState.lives; i++) {
        var life = document.createElement("div");
        life.className = "life";
        life.textContent = "♥";
        livesList.appendChild(life);
    }
    for (var i = 0; i < newState.guesses; i++) {
        var guess = document.createElement("div");
        guess.className = "guess";
        guess.textContent = "✎";
        guessesList.appendChild(guess);
    }
    adjOptions.appendChild(adjOptionsTitle);
    adjOptions.appendChild(adjOptionsList);
    nounOptions.appendChild(nounOptionsTitle);
    nounOptions.appendChild(nounOptionsList);
    components.appendChild(componentsTitle);
    components.appendChild(componentsList);
    lives.appendChild(livesTitle);
    lives.appendChild(livesList);
    guesses.appendChild(guessesTitle);
    guesses.appendChild(guessesList);
    gameboard.appendChild(adjOptions);
    gameboard.appendChild(nounOptions);
    gameboard.appendChild(components);
    gameboard.appendChild(lives);
    gameboard.appendChild(guesses);
}




document.addEventListener('DOMContentLoaded', async () => {
    const client = new Colyseus.Client('ws://localhost:2567');// + port.toString());
    var readyModal = document.getElementById("ready-modal")

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
        room.onStateChange((newState: GameState) => {
            if (newState.phase === 2) {
                readyModal.style.display = "none";
            }
        
        });
    );
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
                    room.send("ready", READY);
                    readyModal.style.display = "none";
                }
            } else if (newState.phase === 2) {
                drawGameboard(newState, room)
            }
            readyModal.appendChild(el);
        });
    });
});
