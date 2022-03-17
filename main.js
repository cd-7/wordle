var currentWordleAnswer = "blast";
var currentWordLetter1 = currentWordleAnswer.charAt(0);
var currentWordLetter2 = currentWordleAnswer.charAt(1);
var currentWordLetter3 = currentWordleAnswer.charAt(2);
var currentWordLetter4 = currentWordleAnswer.charAt(3);
var currentWordLetter5 = currentWordleAnswer.charAt(4);
var guess = "";
var guess1 = "";
var guess2 = "";
var guess3 = "";
var guess4 = "";
var guess5 = "";
var guess6 = "";
var guess1Letter1 = "";
var guess1Letter2 = "";
var guess1Letter3 = "";
var guess1Letter4 = "";
var guess1Letter5 = "";
var guess2Letter1 = "";
var guess2Letter2 = "";
var guess2Letter3 = "";
var guess2Letter4 = "";
var guess2Letter5 = "";
var guess3Letter1 = "";
var guess3Letter2 = "";
var guess3Letter3 = "";
var guess3Letter4 = "";
var guess3Letter5 = "";
var guess4Letter1 = "";
var guess4Letter2 = "";
var guess4Letter3 = "";
var guess4Letter4 = "";
var guess4Letter5 = "";
var guess5Letter1 = "";
var guess5Letter2 = "";
var guess5Letter3 = "";
var guess5Letter4 = "";
var guess5Letter5 = "";
var guess6Letter1 = "";
var guess6Letter2 = "";
var guess6Letter3 = "";
var guess6Letter4 = "";
var guess6Letter5 = "";
var letters = /^[A-Za-z]+$/;

hideWarning();
function hideWarning() {
  document.getElementById("warning__label").style.display =
    "none";
}

document.getElementById("end__screen").style.display =
  "none";

function checkAllGuesses() {
  while (true) {
    guess = document.getElementById("guess__input").value;
    if (
      guess.length == 5 &&
      /^[a-zA-Z]+$/.test(guess) == true
    ) {
      break;
    } else {
      document.getElementById(
        "warning__label"
      ).style.display = "block";
      setTimeout(hideWarning, 5000);
      return;
    }
  }

  setTimeout(checkWin, 1000);
  checkGuess6();
  checkGuess5();
  checkGuess4();
  checkGuess3();
  checkGuess2();
  checkGuess1();
}

function checkWin() {
  if (guess == currentWordleAnswer) {
    document.getElementById("end__heading").innerHTML =
      "You Got It!";
    document.getElementById("end__screen").style.display =
      "grid";
  }
}

function checkGuess1() {
  if (guess1 != "") {
    return;
  }
  guess1 = guess;
  document.getElementById("guess1").style.transform =
    "rotateX(360deg)";

  guess1Letter1 = guess1.charAt(0);
  document.getElementById("guess1--letter1").innerHTML =
    guess1Letter1;
  guess1Letter2 = guess1.charAt(1);
  document.getElementById("guess1--letter2").innerHTML =
    guess1Letter2;
  guess1Letter3 = guess1.charAt(2);
  document.getElementById("guess1--letter3").innerHTML =
    guess1Letter3;
  guess1Letter4 = guess1.charAt(3);
  document.getElementById("guess1--letter4").innerHTML =
    guess1Letter4;
  guess1Letter5 = guess1.charAt(4);
  document.getElementById("guess1--letter5").innerHTML =
    guess1Letter5;

  if (guess1Letter1 == currentWordLetter1) {
    document.getElementById(
      "guess1--letter1"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter1)) {
    document.getElementById(
      "guess1--letter1"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess1--letter1"
    ).style.background = "black";
  }
  if (guess1Letter2 == currentWordLetter2) {
    document.getElementById(
      "guess1--letter2"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter2)) {
    document.getElementById(
      "guess1--letter2"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess1--letter2"
    ).style.background = "black";
  }
  if (guess1Letter3 == currentWordLetter3) {
    document.getElementById(
      "guess1--letter3"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter3)) {
    document.getElementById(
      "guess1--letter3"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess1--letter3"
    ).style.background = "black";
  }
  if (guess1Letter4 == currentWordLetter4) {
    document.getElementById(
      "guess1--letter4"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter4)) {
    document.getElementById(
      "guess1--letter4"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess1--letter4"
    ).style.background = "black";
  }
  if (guess1Letter5 == currentWordLetter5) {
    document.getElementById(
      "guess1--letter5"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter5)) {
    document.getElementById(
      "guess1--letter5"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess1--letter5"
    ).style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess2() {
  if (guess1 == "" || guess3 != "") {
    return;
  }
  guess2 = guess;
  document.getElementById("guess2").style.transform =
    "rotateX(360deg)";

  guess2Letter1 = guess2.charAt(0);
  document.getElementById("guess2--letter1").innerHTML =
    guess2Letter1;
  guess2Letter2 = guess2.charAt(1);
  document.getElementById("guess2--letter2").innerHTML =
    guess2Letter2;
  guess2Letter3 = guess2.charAt(2);
  document.getElementById("guess2--letter3").innerHTML =
    guess2Letter3;
  guess2Letter4 = guess2.charAt(3);
  document.getElementById("guess2--letter4").innerHTML =
    guess2Letter4;
  guess2Letter5 = guess2.charAt(4);
  document.getElementById("guess2--letter5").innerHTML =
    guess2Letter5;

  if (guess2Letter1 == currentWordLetter1) {
    document.getElementById(
      "guess2--letter1"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter1)) {
    document.getElementById(
      "guess2--letter1"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess2--letter1"
    ).style.background = "black";
  }
  if (guess2Letter2 == currentWordLetter2) {
    document.getElementById(
      "guess2--letter2"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter2)) {
    document.getElementById(
      "guess2--letter2"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess2--letter2"
    ).style.background = "black";
  }
  if (guess2Letter3 == currentWordLetter3) {
    document.getElementById(
      "guess2--letter3"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter3)) {
    document.getElementById(
      "guess2--letter3"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess2--letter3"
    ).style.background = "black";
  }
  if (guess2Letter4 == currentWordLetter4) {
    document.getElementById(
      "guess2--letter4"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter4)) {
    document.getElementById(
      "guess2--letter4"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess2--letter4"
    ).style.background = "black";
  }
  if (guess2Letter5 == currentWordLetter5) {
    document.getElementById(
      "guess2--letter5"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter5)) {
    document.getElementById(
      "guess2--letter5"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess2--letter5"
    ).style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess3() {
  if (guess2 == "" || guess4 != "") {
    return;
  }
  guess3 = guess;
document.getElementById("guess3").style.transform =
    "rotateX(360deg)";

  guess3Letter1 = guess3.charAt(0);
  document.getElementById("guess3--letter1").innerHTML =
    guess3Letter1;
  guess3Letter2 = guess3.charAt(1);
  document.getElementById("guess3--letter2").innerHTML =
    guess3Letter2;
  guess3Letter3 = guess3.charAt(2);
  document.getElementById("guess3--letter3").innerHTML =
    guess3Letter3;
  guess3Letter4 = guess3.charAt(3);
  document.getElementById("guess3--letter4").innerHTML =
    guess3Letter4;
  guess3Letter5 = guess3.charAt(4);
  document.getElementById("guess3--letter5").innerHTML =
    guess3Letter5;

  if (guess3Letter1 == currentWordLetter1) {
    document.getElementById(
      "guess3--letter1"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter1)) {
    document.getElementById(
      "guess3--letter1"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess3--letter1"
    ).style.background = "black";
  }
  if (guess3Letter2 == currentWordLetter2) {
    document.getElementById(
      "guess3--letter2"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter2)) {
    document.getElementById(
      "guess3--letter2"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess3--letter2"
    ).style.background = "black";
  }
  if (guess3Letter3 == currentWordLetter3) {
    document.getElementById(
      "guess3--letter3"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter3)) {
    document.getElementById(
      "guess3--letter3"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess3--letter3"
    ).style.background = "black";
  }
  if (guess3Letter4 == currentWordLetter4) {
    document.getElementById(
      "guess3--letter4"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter4)) {
    document.getElementById(
      "guess3--letter4"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess3--letter4"
    ).style.background = "black";
  }
  if (guess3Letter5 == currentWordLetter5) {
    document.getElementById(
      "guess3--letter5"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter5)) {
    document.getElementById(
      "guess3--letter5"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess3--letter5"
    ).style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess4() {
  if (guess3 == "" || guess5 != "") {
    return;
  }
  guess4 = guess;
document.getElementById("guess4").style.transform =
    "rotateX(360deg)";

  guess4Letter1 = guess4.charAt(0);
  document.getElementById("guess4--letter1").innerHTML =
    guess4Letter1;
  guess4Letter2 = guess4.charAt(1);
  document.getElementById("guess4--letter2").innerHTML =
    guess4Letter2;
  guess4Letter3 = guess4.charAt(2);
  document.getElementById("guess4--letter3").innerHTML =
    guess4Letter3;
  guess4Letter4 = guess4.charAt(3);
  document.getElementById("guess4--letter4").innerHTML =
    guess4Letter4;
  guess4Letter5 = guess4.charAt(4);
  document.getElementById("guess4--letter5").innerHTML =
    guess4Letter5;

  if (guess4Letter1 == currentWordLetter1) {
    document.getElementById(
      "guess4--letter1"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter1)) {
    document.getElementById(
      "guess4--letter1"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess4--letter1"
    ).style.background = "black";
  }
  if (guess4Letter2 == currentWordLetter2) {
    document.getElementById(
      "guess4--letter2"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter2)) {
    document.getElementById(
      "guess4--letter2"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess4--letter2"
    ).style.background = "black";
  }
  if (guess4Letter3 == currentWordLetter3) {
    document.getElementById(
      "guess4--letter3"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter3)) {
    document.getElementById(
      "guess4--letter3"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess4--letter3"
    ).style.background = "black";
  }
  if (guess4Letter4 == currentWordLetter4) {
    document.getElementById(
      "guess4--letter4"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter4)) {
    document.getElementById(
      "guess4--letter4"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess4--letter4"
    ).style.background = "black";
  }
  if (guess4Letter5 == currentWordLetter5) {
    document.getElementById(
      "guess4--letter5"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter5)) {
    document.getElementById(
      "guess4--letter5"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess4--letter5"
    ).style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess5() {
  if (guess4 == "" || guess6 != "") {
    return;
  }
  guess5 = guess;
document.getElementById("guess5").style.transform =
    "rotateX(360deg)";

  guess5Letter1 = guess5.charAt(0);
  document.getElementById("guess5--letter1").innerHTML =
    guess5Letter1;
  guess5Letter2 = guess5.charAt(1);
  document.getElementById("guess5--letter2").innerHTML =
    guess5Letter2;
  guess5Letter3 = guess5.charAt(2);
  document.getElementById("guess5--letter3").innerHTML =
    guess5Letter3;
  guess5Letter4 = guess5.charAt(3);
  document.getElementById("guess5--letter4").innerHTML =
    guess5Letter4;
  guess5Letter5 = guess5.charAt(4);
  document.getElementById("guess5--letter5").innerHTML =
    guess5Letter5;

  if (guess5Letter1 == currentWordLetter1) {
    document.getElementById(
      "guess5--letter1"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter1)) {
    document.getElementById(
      "guess5--letter1"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess5--letter1"
    ).style.background = "black";
  }
  if (guess5Letter2 == currentWordLetter2) {
    document.getElementById(
      "guess5--letter2"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter2)) {
    document.getElementById(
      "guess5--letter2"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess5--letter2"
    ).style.background = "black";
  }
  if (guess5Letter3 == currentWordLetter3) {
    document.getElementById(
      "guess5--letter3"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter3)) {
    document.getElementById(
      "guess5--letter3"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess5--letter3"
    ).style.background = "black";
  }
  if (guess5Letter4 == currentWordLetter4) {
    document.getElementById(
      "guess5--letter4"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter4)) {
    document.getElementById(
      "guess5--letter4"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess5--letter4"
    ).style.background = "black";
  }
  if (guess5Letter5 == currentWordLetter5) {
    document.getElementById(
      "guess5--letter5"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter5)) {
    document.getElementById(
      "guess5--letter5"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess5--letter5"
    ).style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess6() {
  if (guess5 == "") {
    return;
  }
  guess6 = guess;
document.getElementById("guess6").style.transform =
    "rotateX(360deg)";

  guess6Letter1 = guess6.charAt(0);
  document.getElementById("guess6--letter1").innerHTML =
    guess6Letter1;
  guess6Letter2 = guess6.charAt(1);
  document.getElementById("guess6--letter2").innerHTML =
    guess6Letter2;
  guess6Letter3 = guess6.charAt(2);
  document.getElementById("guess6--letter3").innerHTML =
    guess6Letter3;
  guess6Letter4 = guess6.charAt(3);
  document.getElementById("guess6--letter4").innerHTML =
    guess6Letter4;
  guess6Letter5 = guess6.charAt(4);
  document.getElementById("guess6--letter5").innerHTML =
    guess6Letter5;

  if (guess6Letter1 == currentWordLetter1) {
    document.getElementById(
      "guess6--letter1"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter1)) {
    document.getElementById(
      "guess6--letter1"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess6--letter1"
    ).style.background = "black";
  }
  if (guess6Letter2 == currentWordLetter2) {
    document.getElementById(
      "guess6--letter2"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter2)) {
    document.getElementById(
      "guess6--letter2"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess6--letter2"
    ).style.background = "black";
  }
  if (guess6Letter3 == currentWordLetter3) {
    document.getElementById(
      "guess6--letter3"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter3)) {
    document.getElementById(
      "guess6--letter3"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess6--letter3"
    ).style.background = "black";
  }
  if (guess6Letter4 == currentWordLetter4) {
    document.getElementById(
      "guess6--letter4"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter4)) {
    document.getElementById(
      "guess6--letter4"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess6--letter4"
    ).style.background = "black";
  }
  if (guess6Letter5 == currentWordLetter5) {
    document.getElementById(
      "guess6--letter5"
    ).style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter5)) {
    document.getElementById(
      "guess6--letter5"
    ).style.background = "#b59f3a";
  } else {
    document.getElementById(
      "guess6--letter5"
    ).style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}


function resetGame() {
guess = “”;
guess1 = “”;
guess2 = “”;
guess3 = “”;
guess4 = “”;
guess5 = “”;
guess6 = “”;
document.getElementById("end__screen").style.display =
  "none";
}

async function getData() {
  const response = await fetch("test.csv");
  const data = await response.text();
  console.log(data);

  const rows = data.split("\n").slice(1);
  rows.forEach((elt) => {
    const row = elt.split(",");
    const validWordleGuess = row[1];
    const validWordleAnswer = row[2];
    console.log(
      validWordleAnswer[
        Math.floor(Math.random() * validWordleAnswer.length)
      ]
    );
  });
}
getData();

fetch(
  "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key":
        "f5b9e8b4f3mshc0d805627b4285cp12a3a1jsn532c645ae2e9",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

//https://english.api.rakuten.net/dpventures/api/wordsapi?endpoint=54b6af68e4b02f9493f90b22
