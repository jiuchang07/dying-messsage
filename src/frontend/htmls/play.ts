function checknickname(nickname: String): boolean {
  return true;
}

function roomExists(client: Client): boolean {
  var exists = false;
  client.getAvailableRooms("dying_message").then((rooms) => {
    rooms.forEach((room) => {
      if (room.roomId == roomId) {
        exists = true;
      }
    });
    return exists;
  });
}

function askNickname(room: Room) {
  var nicknameModal = document.getElementById("nickname-modal");
  nicknameModal.style.display = "block";
  // document.getElementById("container").style.display = "block";
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


function readyModalForHost(el: HTMLElement, room: Room) {
  el.textContent = "Game Start";
  room.onStateChange((newState: GameState) => {
    if (newState.phase === "NOTREADY") {
      el.className = "button--secondary";
      el.removeEventListener("click", () => {});
    } else if (newState.phase === "ALLREADY") {
      el.className = "button";
      el.addEventListener("click", () => {
        document.getElementById("container").style.display = "none";
        room.send("ready", READY);
      });
    }
  });
}

function readyModalForGuest(el: HTMLElement, room: Room) {
  el.textContent = "Ready";
  el.onclick = () => {
    if (el.textContent === "Ready") {
      room.send("ready", READY);
      el.textContent = "Not Ready";
      el.className = "button-secondary";
    } else {
      room.send("ready", NOT_READY);
      el.className = "button";
      el.textContent = "Ready";
    }
  };
}

function removeReadyModal(readyModal: HTMLElement, room: Room) {
  room.onStateChange((newState: GameState) => {
    if (newState.phase === "GAMESTART") {
      readyModal.style.display = "none";
    }
  });
}

function setReadyModal(room: Room, host: boolean) {
  var readyModal = document.getElementById("ready-modal");
  readyModal.style.display = "block";
  var el = document.createElement("div");
  readyModal.appendChild(el);
  el.className = "button";
  if (host) {
    readyModalForHost(el, room);
  } else {
    readyModalForGuest(el, room);
  }
  removeReadyModal(readyModal, room);
}

function displayPhase(newState: GameState) {
  var round = document.getElementById("round");
  if (newState.phase === "GAMESTART") {
    round.textContent = "Novelist giving hints";
  } else if (newState.phase === "NOVELIST" || newState.phase === "DETECTIVE") {
    round.textContent = "Round "+ newState.round.toString();
  } else if (newState.phase === "FINALGUESS") {
    round.textContent = "Final Guess by Detectives";
  } else if (newState.phase === "REVEAL") {
    round.textContent = "Reveal";
  }
}

function reveal(newState: GameState) {
  if (newState.phase === "REVEAL") {
    if (newState.life === 0) {
      alert("You lost!");
    } else {
      alert("You won!");
    }
  }
}

function addHTMLEl(
  parent: HTMLElement,
  className: string,
  title: string,
  i: number
) {
  var el = document.createElement("div");
  el.className = className;
  if (parent.hasChildNodes() && parent.childNodes.length > 5) {
    parent.replaceChild(el, parent.childNodes[i]);
  } else {
    parent.appendChild(el);
  }
  var elTitle = document.createElement("div");
  elTitle.className = className + "-title";
  elTitle.textContent = title;
  var elList = document.createElement("div");
  elList.className = className + "-list";
  el.appendChild(elTitle);
  el.appendChild(elList);
  return elList;
}

function addLives(newState: GameState, room: Room, gameboard: HTMLElement) {
  var livesList = addHTMLEl(gameboard, "life", "Life", 0);
  for (var i = 0; i < newState.life; i++) {
    var life = document.createElement("div");
    life.className = "life-list-item";
    life.textContent = "<3";
    livesList.appendChild(life);
  }
}

function addGuesses(newState: GameState, room: Room, gameboard: HTMLElement) {
  var guessesList = addHTMLEl(gameboard, "guess", "Guesses", 1);
  for (var i = 0; i < newState.remainingGuesses; i++) {
    var guess = document.createElement("div");
    guess.className = "guess-list-item";
    guess.textContent = "<?>";
    guessesList.appendChild(guess);
    // if (newState.guessMode === false &&
    //   ((newState.phase === "DETECTIVE" && newState.remainingGuesses > 0) ||
    //   (newState.phase === "FINALGUESS" && newState.remainingGuesses > 0)) &&
    //   !newState.playerMap[room.sessionId].isNovelist
    // ) {
    //   guess.className = "guess button";
    //   guess.onclick = function () {
    //     room.send("start-guess", null);
    //   };
    // } else {
    //   guess.className = "guess secondary-button";
    //   guess.onclick = function () {};
    // }
  }
}

function enableAdjButton(newState: GameState, room: Room): boolean {
  return newState.hintMode.value === "null" &&
  ((newState.phase === "NOVELIST" && !newState.givenAllRoundHints) ||
  (newState.phase === "GAMESTART" && !newState.givenAllInitialAdjHints)) &&
  newState.playerMap[room.sessionId].isNovelist
}

function enableNounButton(newState: GameState, room: Room): boolean {
  return newState.hintMode.value === "null" &&
  ((newState.phase === "NOVELIST" && !newState.givenAllRoundHints) ||
  (newState.phase === "GAMESTART" && !newState.givenAllInitialNounHints)) &&
  newState.playerMap[room.sessionId].isNovelist
}

function enableCompButton(newState: GameState, room: Room, comp: any): boolean {
  return newState.hintMode.value != "null" &&
  ((newState.phase === "NOVELIST") || 
  (newState.phase === "GAMESTART" &&
  ((newState.hintMode.type === "adjective" && comp.hintAdj.size == 0) ||
  (newState.hintMode.type === "noun" && comp.hintNoun.size == 0)))) &&
  newState.playerMap[room.sessionId].isNovelist
}

function addAdjOptions(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var adjOptionsList = addHTMLEl(gameboard, "adj", "Adjectives", 2);
  newState.adjOptions.forEach((adj) => {
    var adjOption = document.createElement("div");
    adjOption.textContent = adj.value;
    if (enableAdjButton(newState, room)) {
      adjOption.className = "adj-list-item button";
      adjOption.onclick = () => {
        room.send("start-hint", adj.value);
      };
    } else {
      adjOption.className = "adj-list-item button--secondary";
      adjOption.onclick = () => {};
    }
    adjOptionsList.appendChild(adjOption);
  });
}

function addNounOptions(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var nounOptionsList = addHTMLEl(gameboard, "noun", "Nouns", 3);
  newState.nounOptions.forEach((noun) => {
    var nounOption = document.createElement("div");
    nounOption.textContent = noun.value;
    if (enableNounButton(newState, room)) {
      nounOption.className = "noun-list-item button";
      nounOption.onclick = () => {
        room.send("start-hint", noun.value);
      };
    } else {
      nounOption.className = "noun-list-item button--secondary";
      nounOption.onclick = () => {};
    }
    nounOptionsList.appendChild(nounOption);
  });
}

function addCompOptions(newState: GameState, room: Room, component: HTMLElement, comp: any): HTMLElement {
  var componentOptions = document.createElement("div");
  componentOptions.className = "option-list";
  console.log(comp.options);
  comp.options.forEach((option, key) => {
    var optionEl = document.createElement("div");
    var optionClassDefault = "option-list-item";
    if (option.isSolution && newState.playerMap[room.sessionId].isNovelist) {
      optionClassDefault += " option--solution";
    }
    var optionClassGuessed = "";
    if (option.isExcluded) {
      optionClassGuessed = " option--excluded";
    } else if (option.isGuessed) {
      optionClassGuessed = " option--guessed";
    } else {
      optionClassGuessed = "";
    }
    optionEl.className = optionClassDefault;
    optionEl.textContent = option.value;
    componentOptions.appendChild(optionEl);
    if (
      (newState.phase === "DETECTIVE" || (newState.phase === "FINALGUESS")) &&
      !newState.playerMap[room.sessionId].isNovelist
    ) {
      if (option.isGuessed) {
        optionEl.className = " option-cancel-button " + optionClassDefault + optionClassGuessed;
        optionEl.onclick = () => {
          room.send("cancel-guess", option);
        };
      } else if (newState.phase === "DETECTIVE" || (newState.phase === "FINALGUESS" && !comp.finalGuessed)) {
        optionEl.className = " option-button " + optionClassDefault + optionClassGuessed;
        optionEl.onclick = () => {
          room.send("guess", option);
        };
      }
    } else {
      optionEl.className = " option-button-secondary " + optionClassDefault + optionClassGuessed;
      optionEl.onclick = () => {};
    }
  });
  component.appendChild(componentOptions);
}

function addCompAdj(room: Room, component: HTMLElement, comp: any): HTMLElement {
  var componentAdj = document.createElement("div");
  componentAdj.className = "adj-component";
  comp.hintAdj.forEach((adj, key) => {
    var adjEl = document.createElement("div");
    adjEl.className = "adj-list-item";
    adjEl.textContent = key;
    if (!adj.assigned) {
      adjEl.onclick = () => {
        room.send("cancel-hint", {hint: adj, comp: comp.value});
      };
    } else {
      adjEl.onclick = () => {};
    }
    componentAdj.appendChild(adjEl);
  });
  component.appendChild(componentAdj);
}

function addCompNoun(room: Room, component: HTMLElement, comp: any): HTMLElement {
  var componentNoun = document.createElement("div");
  componentNoun.className = "noun-component";
  comp.hintNoun.forEach((noun, key) => {
    var nounEl = document.createElement("div");
    nounEl.className = "noun-list-item";
    nounEl.textContent = key;
    if (!noun.assigned) {
      nounEl.onclick = () => {
        room.send("cancel-hint", {hint: noun, comp: comp.value});
      };
    } else {
      nounEl.onclick = () => {};
    }
    componentNoun.appendChild(nounEl);
  });
  component.appendChild(componentNoun);
}

function addComponents(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var componentsList = addHTMLEl(gameboard, "component", "Components", 4);
  console.log(newState.components, newState.components["motives"].options);
  newState.components.forEach((comp, key) => {
    var component = document.createElement("div");
    var componentTitle = document.createElement("div");
    componentTitle.className = "component-list-item-title";
    componentTitle.textContent = key;
    component.appendChild(componentTitle);
    if (enableCompButton(newState, room, comp)) {
      component.className = "component button";
      component.onclick = () => {
        room.send("hint", comp.value);
      };
    } else {
      component.className = "component button--secondary";
      component.onclick = () => {};
    }
    addCompOptions(newState, room, component, comp);
    addCompAdj(room, component, comp);
    addCompNoun(room, component, comp);
    componentsList.appendChild(component);
  });
}

function addEndTurnButtonForNovelist(newState: GameState, room: Room, guessButton: HTMLElement) {
  guessButton.textContent = "Finish giving hints";
  if (
    (newState.phase === "GAMESTART" && newState.givenAllInitialHints) ||
    (newState.phase === "NOVELIST" && newState.givenAllRoundHints)
  ) {
    guessButton.onclick = () => {
      room.send("end-turn", null);
    };
    guessButton.className = "button";
  } else {
    guessButton.onclick = () => {};
    guessButton.className = "button--secondary";
  }
}

function addEndTurnButtonForDetective(newState: GameState, room: Room, guessButton: HTMLElement) {
  guessButton.textContent = "Finish guessing";
  if (newState.remainingGuesses == 0) {
    guessButton.onclick = () => {
      room.send("end-turn", null);
    };
    guessButton.className = "button";
  } else {
    guessButton.onclick = () => {};
    guessButton.className = "button--secondary";
  }
}

function addEndTurnButton(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var guessButton = document.createElement("div");
  if (newState.playerMap[room.sessionId].isNovelist) {
    addEndTurnButtonForNovelist(newState, room, guessButton);
  } else {
    addEndTurnButtonForDetective(newState, room, guessButton);
  }
  if (gameboard.hasChildNodes() && gameboard.childNodes.length > 5) {
    gameboard.replaceChild(guessButton, gameboard.lastChild);
  } else {
    gameboard.appendChild(guessButton);
  }
}

function drawGameboard(newState: GameState, room: Room) {
  displayPhase(newState);
  var gameboard = document.getElementById("gameboard");
  addLives(newState, room, gameboard);
  addGuesses(newState, room, gameboard);
  addAdjOptions(newState, room, gameboard);
  addNounOptions(newState, room, gameboard);
  addComponents(newState, room, gameboard);
  addEndTurnButton(newState, room, gameboard);
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
        drawGameboard(newState, room);
        reveal(newState);
      });
    });
});
