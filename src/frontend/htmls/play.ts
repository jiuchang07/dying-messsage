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
      if (newState.phase === "NOTREADY") {
        el.className = "button button--secondary";
        el.removeEventListener("click", () => {});
      } else if (newState.phase === "ALLREADY") {
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
    if (newState.phase === "GAMESTART") {
      readyModal.style.display = "none";
    }
  });
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
  elList.className = "adj-options-list";
  el.appendChild(elTitle);
  el.appendChild(elList);
  return elList;
}
function addLives(newState: GameState, room: Room, gameboard: HTMLElement) {
  var livesList = addHTMLEl(gameboard, "lives", "Life", 0);
  for (var i = 0; i < newState.life; i++) {
    var life = document.createElement("div");
    life.className = "life";
    life.textContent = "<3";
    livesList.appendChild(life);
  }
}
function addGuesses(newState: GameState, room: Room, gameboard: HTMLElement) {
  var guessesList = addHTMLEl(gameboard, "guesses", "Guesses", 1);
  for (var i = 0; i < newState.remainingGuesses; i++) {
    var guess = document.createElement("div");
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
function addAdjOptions(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var adjOptionsList = addHTMLEl(gameboard, "adj-options", "Adjectives", 2);
  newState.adjOptions.forEach((adj) => {
    var adjOption = document.createElement("div");
    adjOption.textContent = adj.value;
    if (
      newState.hintMode.value === "null" &&
      ((newState.phase === "NOVELIST" && !newState.givenAllRoundHints) ||
      (newState.phase === "GAMESTART" && !newState.givenAllInitialAdjHints)) &&
      newState.playerMap[room.sessionId].isNovelist
    ) {
      adjOption.className = "adj-option button";
      adjOption.onclick = () => {
        room.send("start-hint", adj.value);
      };
    } else {
      adjOption.className = "adj-option button--secondary";
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
  var nounOptionsList = addHTMLEl(gameboard, "noun-options", "Nouns", 3);
  newState.nounOptions.forEach((noun) => {
    var nounOption = document.createElement("div");
    nounOption.textContent = noun.value;
    if (
      newState.hintMode.value === "null" &&
      ((newState.phase === "NOVELIST" && !newState.givenAllRoundHints) ||
      (newState.phase === "GAMESTART" && !newState.givenAllInitialNounHints)) &&
      newState.playerMap[room.sessionId].isNovelist
    ) {
      nounOption.className = "noun-option button";
      nounOption.onclick = () => {
        room.send("start-hint", noun.value);
      };
    } else {
      nounOption.className = "noun-option button--secondary";
      nounOption.onclick = () => {};
    }
    nounOptionsList.appendChild(nounOption);
  });
}
function addComponents(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var componentsList = addHTMLEl(gameboard, "components", "Components", 4);
  newState.components.forEach((comp, key) => {
    var component = document.createElement("div");
    var componentTitle = document.createElement("div");
    componentTitle.className = "component-title";
    componentTitle.textContent = key;
    component.appendChild(componentTitle);
    if (
      newState.hintMode.value != "null" &&
      ((newState.phase === "NOVELIST") || 
      (newState.phase === "GAMESTART" &&
      ((newState.hintMode.type === "adjective" && comp.hintAdj.length == 0) ||
      (newState.hintMode.type === "noun" && comp.hintNoun.length == 0)))) &&
      newState.playerMap[room.sessionId].isNovelist
    ) {
      component.className = "component button";
      component.onclick = () => {
        room.send("hint", comp.value);
      };
    } else {
      component.className = "component button--secondary";
      component.onclick = () => {};
    }
    var componentOptions = document.createElement("div");
    componentOptions.className = "component-options";
    comp.options.forEach((option) => {
      var optionEl = document.createElement("div");
      var optionClassDefault = "option";
      if (option.isSolution && newState.playerMap[room.sessionId].isNovelist) {
        optionClassDefault += " option--solution";
      }
      console.log(option.value, option.isExcluded, option.isGuessed);
      var optionClassGuessed = "";
      if (option.isExcluded) {
        optionClassGuessed = " option--excluded";
      } else if (option.isGuessed) {
        optionClassGuessed = " option--guessed";
      }
      optionEl.className = optionClassDefault;
      optionEl.textContent = option.value;
      componentOptions.appendChild(optionEl);
      if (
        // newState.guessMode === true &&
        !option.isGuessed &&
        !option.isExcluded &&
        (newState.phase === "DETECTIVE" || (newState.phase === "FINALGUESS" && !comp.finalGuessed)) &&
        !newState.playerMap[room.sessionId].isNovelist
      ) {
        optionEl.className = optionClassDefault + optionClassGuessed + " button";
        optionEl.onclick = () => {
          room.send("guess", option);
        };
      } else {
        optionEl.className = optionClassDefault + optionClassGuessed + " button-secondary";
        optionEl.onclick = () => {};
      }
    });
    var componentAdj = document.createElement("div");
    componentAdj.className = "component-adj";
    comp.hintAdj.forEach((adj) => {
      var adjEl = document.createElement("div");
      adjEl.className = "option";
      adjEl.textContent = adj.value;
      componentAdj.appendChild(adjEl);
    });
    var componentNoun = document.createElement("div");
    componentNoun.className = "component-noun";
    comp.hintNoun.forEach((noun) => {
      var nounEl = document.createElement("div");
      nounEl.className = "option";
      nounEl.textContent = noun.value;
      componentNoun.appendChild(nounEl);
    });
    component.appendChild(componentAdj);
    component.appendChild(componentNoun);
    component.appendChild(componentOptions);
    componentsList.appendChild(component);
  });
}
function addEndTurnButton(
  newState: GameState,
  room: Room,
  gameboard: HTMLElement
) {
  var guessButton = document.createElement("div");
  if (newState.playerMap[room.sessionId].isNovelist) {
    guessButton.textContent = "Finish giving hints";
    if (
      (newState.phase === "GAMESTART" && newState.givenAllInitialHints) ||
      (newState.phase === "NOVELIST" && newState.givenAllRoundHints)
    ) {
      guessButton.onclick = () => {
        room.send("end-turn", null);
      };
      guessButton.className = "button guess-button";
    } else {
      guessButton.onclick = () => {};
      guessButton.className = "button--secondary guess-button";
    }
  } else {
    guessButton.textContent = "Finish guessing";
    if (newState.remainingGuesses == 0) {
      guessButton.onclick = () => {
        room.send("end-turn", null);
      };
      guessButton.className = "button guess-button";
    } else {
      guessButton.onclick = () => {};
      guessButton.className = "button--secondary guess-button";
    }
  }

  if (gameboard.hasChildNodes() && gameboard.childNodes.length > 5) {
    gameboard.replaceChild(guessButton, gameboard.lastChild);
  } else {
    gameboard.appendChild(guessButton);
  }
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
        if (newState.phase === "REVEAL") {
          if (newState.life === 0) {
            alert("You lost!");
          } else {
            alert("You won!");
          }
        }
      });
    });
});
