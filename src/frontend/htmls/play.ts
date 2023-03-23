function checknickname(nickname: String): boolean {
  return true;
}

function roomExists(client: Client): boolean {
  var exists = false;
  client.getAvailableRooms("dying_message").then((rooms) => {
    console.log(rooms);
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

function askNickname(room: Room) {
  var nicknameModal = document.getElementById("nickname-modal");
  nicknameModal.style.display = "block";
  document.getElementById("nickname-btn").onclick = function () {
    const nickname = document.getElementById("nickname").value;
    if (checknickname(nickname)) {
      room.send("nickname", { nickname: nickname });
      nicknameModal.style.display = "none";
    } else {
      alert("Nickname is not available");
    }
  };
}

function setReadyModal(room: Room, host: boolean) {
  var readyModal = document.getElementById("ready-modal");
  readyModal.style.display = "block";
  var el = document.createElement("div");
  readyModal.appendChild(el);
  el.className = "button";
  if (host) {
    el.textContent = "Game Start";
    room.onStateChange((newState: GameState) => {
      if (newState.phase === 0) {
        el.className = "button button--secondary";
        el.removeEventListener("click", () => {});
      } else if (newState.phase === 1) {
        el.className = "button";
        el.addEventListener("click", () => {
          room.send("ready", READY);
        });
      }
    });
  } else {
    el.textContent = "Ready";
    el.onclick = () => {
      if (el.textContent === "Ready") {
        room.send("ready", READY);
        el.textContent = "Not Ready";
        el.className = "button button-secondary";
      } else {
        room.send("ready", NOT_READY);
        el.className = "button";
        el.textContent = "Ready";
      }
    };
  }
  room.onStateChange((newState: GameState) => {
    if (newState.phase === 2) {
      readyModal.style.display = "none";
    }
  });
}

function addHTMLEl(parent: HTMLElement, className: string, title: string) {
  var el = document.createElement("div");
  el.className = className;
  parent.appendChild(el);
  var elTitle = document.createElement("div");
  elTitle.className = className + "-title";
  elTitle.textContent = title;
  var elList = document.createElement("div");
  elList.className = "adj-options-list";
  el.appendChild(elTitle);
  el.appendChild(elList);
  return elList;
}
function addLives(newState: GameState, gameboard: HTMLElement) {
  var livesList = addHTMLEl(gameboard, "lives", "Life");
  for (var i = 0; i < newState.life; i++) {
    var life = document.createElement("div");
    life.className = "life";
    life.textContent = "<3";
    livesList.appendChild(life);
  }
}
function addGuesses(newState: GameState, gameboard: HTMLElement) {
  var guessesList = addHTMLEl(gameboard, "guesses", "Guesses");
  for (var i = 0; i < newState.remaining_guesses; i++) {
    var guess = document.createElement("div");
    guess.className = "guess";
    guess.textContent = "<?>";
    guessesList.appendChild(guess);
  }
}
function addAdjOptions(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var adjOptionsList = addHTMLEl(gameboard, "adj-options", "Adjectives");
  newState.adjOptions.forEach((adj) => {
    var adjOption = document.createElement("div");
    adjOption.className = "adj-option";
    adjOption.textContent = adj.value;
    adjOption.onclick = () => {
      room.send("adjOption", adj);
    };
    adjOptionsList.appendChild(adjOption);
  });
}
function addNounOptions(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var nounOptionsList = addHTMLEl(gameboard, "noun-options", "Nouns");
  newState.nounOptions.forEach((noun) => {
    var nounOption = document.createElement("div");
    nounOption.className = "noun-option";
    nounOption.textContent = noun.value;
    nounOption.onclick = () => {
      room.send("nounOption", noun);
    };
    nounOptionsList.appendChild(nounOption);
  });
}
function addComponents(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var componentsList = addHTMLEl(gameboard, "components", "Components");
  newState.components.forEach((comp, key) => {
    var component = document.createElement("div");
    component.className = "component";
    var componentTitle = document.createElement("div");
    componentTitle.className = "component-title";
    componentTitle.textContent = key;
    component.appendChild(componentTitle);
    var componentOptions = document.createElement("div");
    componentOptions.className = "component-options";
    comp.options.forEach((option) => {
      var optionEl = document.createElement("div");
      optionEl.className = "option";
      optionEl.textContent = option.value;
      optionEl.onclick = () => {
        room.send("option", option);
      };
      componentOptions.appendChild(optionEl);
    });
    component.appendChild(componentOptions);
    componentsList.appendChild(component);
  });
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
  addLives(newState, gameboard);
  addGuesses(newState, gameboard);
  addAdjOptions(newState, room, gameboard);
  addNounOptions(newState, room, gameboard);
  addComponents(newState, room, gameboard);
}

document.addEventListener("DOMContentLoaded", async () => {
  const client = new Colyseus.Client("ws://localhost:2567"); // + port.toString());

  client
    .joinById(roomId, { host: false })
    .then((room) => {
      askNickname(room);
      setReadyModal(room, false);
      return room;
    })
    .catch((e) => {
      const room = client
        .create("dying_message", { roomId: roomId, host: true })
        .then((room) => {
          askNickname(room);
          setReadyModal(room, true);
          return room;
        });
      return room;
    })
    .then((room) => {
      room.onStateChange((newState: GameState) => {
        if (newState.phase === 2) {
          drawGameboard(newState, room);
          
        }
      });
    });
});
