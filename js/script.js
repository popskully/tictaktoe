let turn = 1;

let grid1 = document.getElementById("1");
let grid2 = document.getElementById("2");
let grid3 = document.getElementById("3");
let grid4 = document.getElementById("4");
let grid5 = document.getElementById("5");
let grid6 = document.getElementById("6");
let grid7 = document.getElementById("7");
let grid8 = document.getElementById("8");
let grid9 = document.getElementById("9");
let whosTurn = document.getElementById("player1");
let win = document.getElementById("win");

var grid = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9];

grid1.addEventListener("click", function game() {
  turn++;

  if (turn % 2 === 0) {
    grid1.value = "X";
    grid1.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid1.value = "O";
    grid1.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid2.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid2.value = "X";
    grid2.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid2.value = "O";
    grid2.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid3.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid3.value = "X";
    grid3.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid3.value = "O";
    grid3.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid4.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid4.value = "X";
    grid4.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid4.value = "O";
    grid4.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid5.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid5.value = "X";
    grid5.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid5.value = "O";
    grid5.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid6.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid6.value = "X";
    grid6.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid6.value = "O";
    grid6.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid7.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid7.value = "X";
    grid7.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid7.value = "O";
    grid7.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid8.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid8.value = "X";
    grid8.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid8.value = "O";
    grid8.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});
grid9.addEventListener("click", function game() {
  turn++;
  if (turn % 2 === 0) {
    grid9.value = "X";
    grid9.disabled = true;
    whosTurn.innerHTML = "It is Player 2's turn";
  } else {
    grid9.value = "O";
    grid9.disabled = true;
    whosTurn.innerHTML = "It is Player 1's turn";
  }
  checkwin();
});

function checkwin() {
  if (grid1.value == "X" && grid2.value == "X" && grid3.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid1.style.backgroundColor = "#1AAC7A";
    grid2.style.backgroundColor = "#1AAC7A";
    grid3.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid1.value == "O" && grid2.value == "O" && grid3.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid1.style.backgroundColor = "#1AAC7A";
    grid2.style.backgroundColor = "#1AAC7A";
    grid3.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid4.value == "X" && grid5.value == "X" && grid6.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid4.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid6.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid4.value == "O" && grid5.value == "O" && grid6.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid4.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid6.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid7.value == "X" && grid8.value == "X" && grid9.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid7.style.backgroundColor = "#1AAC7A";
    grid8.style.backgroundColor = "#1AAC7A";
    grid9.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid7.value == "O" && grid8.value == "O" && grid9.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid7.style.backgroundColor = "#1AAC7A";
    grid8.style.backgroundColor = "#1AAC7A";
    grid9.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid1.value == "X" && grid4.value == "X" && grid7.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid1.style.backgroundColor = "#1AAC7A";
    grid4.style.backgroundColor = "#1AAC7A";
    grid7.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid1.value == "O" && grid4.value == "O" && grid7.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid1.style.backgroundColor = "#1AAC7A";
    grid4.style.backgroundColor = "#1AAC7A";
    grid7.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid2.value == "X" && grid5.value == "X" && grid8.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid2.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid8.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid2.value == "O" && grid5.value == "O" && grid8.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid2.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid8.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid3.value == "X" && grid6.value == "X" && grid9.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid3.style.backgroundColor = "#1AAC7A";
    grid6.style.backgroundColor = "#1AAC7A";
    grid9.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid3.value == "O" && grid6.value == "O" && grid9.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid3.style.backgroundColor = "#1AAC7A";
    grid6.style.backgroundColor = "#1AAC7A";
    grid9.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid1.value == "X" && grid5.value == "X" && grid9.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid1.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid9.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid1.value == "O" && grid5.value == "O" && grid9.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid1.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid9.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid3.value == "X" && grid5.value == "X" && grid7.value == "X") {
    win.innerHTML = "Player 1 wins!";

    // highlight winning squares
    grid3.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid7.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (grid3.value == "O" && grid5.value == "O" && grid7.value == "O") {
    win.innerHTML = "Player 2 wins!";

    // highlight winning squares
    grid3.style.backgroundColor = "#1AAC7A";
    grid5.style.backgroundColor = "#1AAC7A";
    grid7.style.backgroundColor = "#1AAC7A";

    // disable all squares
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  } else if (turn == 10) {
    // highlight all squares
    grid1.style.backgroundColor = "#D3423D";
    grid2.style.backgroundColor = "#D3423D";
    grid3.style.backgroundColor = "#D3423D";
    grid4.style.backgroundColor = "#D3423D";
    grid5.style.backgroundColor = "#D3423D";
    grid6.style.backgroundColor = "#D3423D";
    grid7.style.backgroundColor = "#D3423D";
    grid8.style.backgroundColor = "#D3423D";
    grid9.style.backgroundColor = "#D3423D";

    // disable all squares
    win.innerHTML = "It's a tie!";
    grid1.disabled = true;
    grid2.disabled = true;
    grid3.disabled = true;
    grid4.disabled = true;
    grid5.disabled = true;
    grid6.disabled = true;
    grid7.disabled = true;
    grid8.disabled = true;
    grid9.disabled = true;
  }
}

function restart() {
  // reset all squares
  grid1.value = "";
  grid2.value = "";
  grid3.value = "";
  grid4.value = "";
  grid5.value = "";
  grid6.value = "";
  grid7.value = "";
  grid8.value = "";
  grid9.value = "";

  // reset turn
  turn = 1;

  // reset win
  win.innerHTML = "";

  // reset all squares to be enabled
  grid1.disabled = false;
  grid2.disabled = false;
  grid3.disabled = false;
  grid4.disabled = false;
  grid5.disabled = false;
  grid6.disabled = false;
  grid7.disabled = false;
  grid8.disabled = false;
  grid9.disabled = false;

  // reset all squares to be unhighlighted
  grid1.style.backgroundColor = "";
  grid2.style.backgroundColor = "";
  grid3.style.backgroundColor = "";
  grid4.style.backgroundColor = "";
  grid5.style.backgroundColor = "";
  grid6.style.backgroundColor = "";
  grid7.style.backgroundColor = "";
  grid8.style.backgroundColor = "";
  grid9.style.backgroundColor = "";
}
