var wordleAnswers = [
  "which",
  "there",
  "their",
  "about",
  "would",
  "these",
  "other",
  "words",
  "could",
  "write",
  "first",
  "water",
  "after",
  "where",
  "right",
  "think",
  "three",
  "years",
  "place",
  "sound",
  "great",
  "again",
  "still",
  "every",
  "small",
  "found",
  "those",
  "never",
  "under",
  "might",
  "while",
  "house",
  "world",
  "below",
  "asked",
  "going",
  "large",
  "until",
  "along",
  "shall",
  "being",
  "often",
  "earth",
  "began",
  "since",
  "study",
  "night",
  "light",
  "above",
  "paper",
  "parts",
  "young",
  "story",
  "point",
  "times",
  "heard",
  "whole",
  "white",
  "given",
  "means",
  "music",
  "miles",
  "thing",
  "today",
  "later",
  "using",
  "money",
  "lines",
  "order",
  "group",
  "among",
  "learn",
  "known",
  "space",
  "table",
  "early",
  "trees",
  "short",
  "hands",
  "state",
  "black",
  "shown",
  "stood",
  "front",
  "voice",
  "kinds",
  "makes",
  "comes",
  "close",
  "power",
  "lived",
  "vowel",
  "taken",
  "built",
  "heart",
  "ready",
  "quite",
  "class",
  "bring",
  "round",
  "horse",
  "shows",
  "piece",
  "green",
  "stand",
  "birds",
  "start",
  "river",
  "tried",
  "least",
  "field",
  "whose",
  "girls",
  "leave",
  "added",
  "color",
  "third",
  "hours",
  "moved",
  "plant",
  "doing",
  "names",
  "forms",
  "heavy",
  "ideas",
];

var currentWordleAnswer = wordleAnswers[Math.floor(Math.random() * 126)];
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

var game = document.getElementById("game");
var game__height = game.offsetHeight;
var html = document.getElementById("html");
var html__height = html.offsetHeight;
console.log(html__height - game__height);

document.getElementById("game__keyboard").style.marginTop =
  html__height - game__height - 10 + "px";

function focusInput() {
  document.getElementById("guess__input").focus();
}

async function checkAllGuesses() {
  while (true) {
    guess = document.getElementById("guess__input").value;
    if (guess == "their") {
      break;
    }
    var checkApiURL =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + guess;
    if (guess.length != 5 || /^[a-zA-Z]+$/.test(guess) == false) {
      apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/a";
    }
    const checkResponse = await fetch(checkApiURL);
    const checkData = await checkResponse.json();

    if (
      guess.length != 5 ||
      /^[a-zA-Z]+$/.test(guess) == false ||
      checkData.title == "No Definitions Found"
    ) {
      document.getElementById("warning__label").style.display = "block";
      setTimeout(hideWarning, 5000);
      return;
    } else {
      break;
    }
  }

  setTimeout(checkWin, 2000);
  checkGuess6();
  checkGuess5();
  checkGuess4();
  checkGuess3();
  checkGuess2();
  checkGuess1();
  focusInput();
}

function checkWin() {
  if (guess == currentWordleAnswer) {
    document.getElementById("end__heading").innerHTML = "You Got It!";
    document.getElementById("end__screen").style.display = "grid";
  }
}

function checkGuess1() {
  if (guess1 != "") {
    return;
  }
  guess1 = guess;
  document.getElementById("guess1").style.transform = "rotateX(360deg)";
  guess1Letter1 = guess1.charAt(0);
  document.getElementById("guess1--letter1").innerHTML = guess1Letter1;
  guess1Letter2 = guess1.charAt(1);
  document.getElementById("guess1--letter2").innerHTML = guess1Letter2;
  guess1Letter3 = guess1.charAt(2);
  document.getElementById("guess1--letter3").innerHTML = guess1Letter3;
  guess1Letter4 = guess1.charAt(3);
  document.getElementById("guess1--letter4").innerHTML = guess1Letter4;
  guess1Letter5 = guess1.charAt(4);
  document.getElementById("guess1--letter5").innerHTML = guess1Letter5;

  if (guess1Letter1 == currentWordLetter1) {
    document.getElementById("guess1--letter1").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter1)) {
    document.getElementById("guess1--letter1").style.background = "#b59f3a";
  } else {
    document.getElementById("guess1--letter1").style.background = "black";
  }
  if (guess1Letter2 == currentWordLetter2) {
    document.getElementById("guess1--letter2").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter2)) {
    document.getElementById("guess1--letter2").style.background = "#b59f3a";
  } else {
    document.getElementById("guess1--letter2").style.background = "black";
  }
  if (guess1Letter3 == currentWordLetter3) {
    document.getElementById("guess1--letter3").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter3)) {
    document.getElementById("guess1--letter3").style.background = "#b59f3a";
  } else {
    document.getElementById("guess1--letter3").style.background = "black";
  }
  if (guess1Letter4 == currentWordLetter4) {
    document.getElementById("guess1--letter4").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter4)) {
    document.getElementById("guess1--letter4").style.background = "#b59f3a";
  } else {
    document.getElementById("guess1--letter4").style.background = "black";
  }
  if (guess1Letter5 == currentWordLetter5) {
    document.getElementById("guess1--letter5").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess1Letter5)) {
    document.getElementById("guess1--letter5").style.background = "#b59f3a";
  } else {
    document.getElementById("guess1--letter5").style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess2() {
  if (guess1 == "" || guess3 != "") {
    return;
  }
  guess2 = guess;
  document.getElementById("guess2").style.transform = "rotateX(360deg)";

  guess2Letter1 = guess2.charAt(0);
  document.getElementById("guess2--letter1").innerHTML = guess2Letter1;
  guess2Letter2 = guess2.charAt(1);
  document.getElementById("guess2--letter2").innerHTML = guess2Letter2;
  guess2Letter3 = guess2.charAt(2);
  document.getElementById("guess2--letter3").innerHTML = guess2Letter3;
  guess2Letter4 = guess2.charAt(3);
  document.getElementById("guess2--letter4").innerHTML = guess2Letter4;
  guess2Letter5 = guess2.charAt(4);
  document.getElementById("guess2--letter5").innerHTML = guess2Letter5;

  if (guess2Letter1 == currentWordLetter1) {
    document.getElementById("guess2--letter1").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter1)) {
    document.getElementById("guess2--letter1").style.background = "#b59f3a";
  } else {
    document.getElementById("guess2--letter1").style.background = "black";
  }
  if (guess2Letter2 == currentWordLetter2) {
    document.getElementById("guess2--letter2").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter2)) {
    document.getElementById("guess2--letter2").style.background = "#b59f3a";
  } else {
    document.getElementById("guess2--letter2").style.background = "black";
  }
  if (guess2Letter3 == currentWordLetter3) {
    document.getElementById("guess2--letter3").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter3)) {
    document.getElementById("guess2--letter3").style.background = "#b59f3a";
  } else {
    document.getElementById("guess2--letter3").style.background = "black";
  }
  if (guess2Letter4 == currentWordLetter4) {
    document.getElementById("guess2--letter4").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter4)) {
    document.getElementById("guess2--letter4").style.background = "#b59f3a";
  } else {
    document.getElementById("guess2--letter4").style.background = "black";
  }
  if (guess2Letter5 == currentWordLetter5) {
    document.getElementById("guess2--letter5").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess2Letter5)) {
    document.getElementById("guess2--letter5").style.background = "#b59f3a";
  } else {
    document.getElementById("guess2--letter5").style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess3() {
  if (guess2 == "" || guess4 != "") {
    return;
  }
  guess3 = guess;
  document.getElementById("guess3").style.transform = "rotateX(360deg)";

  guess3Letter1 = guess3.charAt(0);
  document.getElementById("guess3--letter1").innerHTML = guess3Letter1;
  guess3Letter2 = guess3.charAt(1);
  document.getElementById("guess3--letter2").innerHTML = guess3Letter2;
  guess3Letter3 = guess3.charAt(2);
  document.getElementById("guess3--letter3").innerHTML = guess3Letter3;
  guess3Letter4 = guess3.charAt(3);
  document.getElementById("guess3--letter4").innerHTML = guess3Letter4;
  guess3Letter5 = guess3.charAt(4);
  document.getElementById("guess3--letter5").innerHTML = guess3Letter5;

  if (guess3Letter1 == currentWordLetter1) {
    document.getElementById("guess3--letter1").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter1)) {
    document.getElementById("guess3--letter1").style.background = "#b59f3a";
  } else {
    document.getElementById("guess3--letter1").style.background = "black";
  }
  if (guess3Letter2 == currentWordLetter2) {
    document.getElementById("guess3--letter2").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter2)) {
    document.getElementById("guess3--letter2").style.background = "#b59f3a";
  } else {
    document.getElementById("guess3--letter2").style.background = "black";
  }
  if (guess3Letter3 == currentWordLetter3) {
    document.getElementById("guess3--letter3").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter3)) {
    document.getElementById("guess3--letter3").style.background = "#b59f3a";
  } else {
    document.getElementById("guess3--letter3").style.background = "black";
  }
  if (guess3Letter4 == currentWordLetter4) {
    document.getElementById("guess3--letter4").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter4)) {
    document.getElementById("guess3--letter4").style.background = "#b59f3a";
  } else {
    document.getElementById("guess3--letter4").style.background = "black";
  }
  if (guess3Letter5 == currentWordLetter5) {
    document.getElementById("guess3--letter5").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess3Letter5)) {
    document.getElementById("guess3--letter5").style.background = "#b59f3a";
  } else {
    document.getElementById("guess3--letter5").style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess4() {
  if (guess3 == "" || guess5 != "") {
    return;
  }
  guess4 = guess;
  document.getElementById("guess4").style.transform = "rotateX(360deg)";

  guess4Letter1 = guess4.charAt(0);
  document.getElementById("guess4--letter1").innerHTML = guess4Letter1;
  guess4Letter2 = guess4.charAt(1);
  document.getElementById("guess4--letter2").innerHTML = guess4Letter2;
  guess4Letter3 = guess4.charAt(2);
  document.getElementById("guess4--letter3").innerHTML = guess4Letter3;
  guess4Letter4 = guess4.charAt(3);
  document.getElementById("guess4--letter4").innerHTML = guess4Letter4;
  guess4Letter5 = guess4.charAt(4);
  document.getElementById("guess4--letter5").innerHTML = guess4Letter5;

  if (guess4Letter1 == currentWordLetter1) {
    document.getElementById("guess4--letter1").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter1)) {
    document.getElementById("guess4--letter1").style.background = "#b59f3a";
  } else {
    document.getElementById("guess4--letter1").style.background = "black";
  }
  if (guess4Letter2 == currentWordLetter2) {
    document.getElementById("guess4--letter2").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter2)) {
    document.getElementById("guess4--letter2").style.background = "#b59f3a";
  } else {
    document.getElementById("guess4--letter2").style.background = "black";
  }
  if (guess4Letter3 == currentWordLetter3) {
    document.getElementById("guess4--letter3").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter3)) {
    document.getElementById("guess4--letter3").style.background = "#b59f3a";
  } else {
    document.getElementById("guess4--letter3").style.background = "black";
  }
  if (guess4Letter4 == currentWordLetter4) {
    document.getElementById("guess4--letter4").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter4)) {
    document.getElementById("guess4--letter4").style.background = "#b59f3a";
  } else {
    document.getElementById("guess4--letter4").style.background = "black";
  }
  if (guess4Letter5 == currentWordLetter5) {
    document.getElementById("guess4--letter5").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess4Letter5)) {
    document.getElementById("guess4--letter5").style.background = "#b59f3a";
  } else {
    document.getElementById("guess4--letter5").style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess5() {
  if (guess4 == "" || guess6 != "") {
    return;
  }
  guess5 = guess;
  document.getElementById("guess5").style.transform = "rotateX(360deg)";

  guess5Letter1 = guess5.charAt(0);
  document.getElementById("guess5--letter1").innerHTML = guess5Letter1;
  guess5Letter2 = guess5.charAt(1);
  document.getElementById("guess5--letter2").innerHTML = guess5Letter2;
  guess5Letter3 = guess5.charAt(2);
  document.getElementById("guess5--letter3").innerHTML = guess5Letter3;
  guess5Letter4 = guess5.charAt(3);
  document.getElementById("guess5--letter4").innerHTML = guess5Letter4;
  guess5Letter5 = guess5.charAt(4);
  document.getElementById("guess5--letter5").innerHTML = guess5Letter5;

  if (guess5Letter1 == currentWordLetter1) {
    document.getElementById("guess5--letter1").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter1)) {
    document.getElementById("guess5--letter1").style.background = "#b59f3a";
  } else {
    document.getElementById("guess5--letter1").style.background = "black";
  }
  if (guess5Letter2 == currentWordLetter2) {
    document.getElementById("guess5--letter2").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter2)) {
    document.getElementById("guess5--letter2").style.background = "#b59f3a";
  } else {
    document.getElementById("guess5--letter2").style.background = "black";
  }
  if (guess5Letter3 == currentWordLetter3) {
    document.getElementById("guess5--letter3").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter3)) {
    document.getElementById("guess5--letter3").style.background = "#b59f3a";
  } else {
    document.getElementById("guess5--letter3").style.background = "black";
  }
  if (guess5Letter4 == currentWordLetter4) {
    document.getElementById("guess5--letter4").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter4)) {
    document.getElementById("guess5--letter4").style.background = "#b59f3a";
  } else {
    document.getElementById("guess5--letter4").style.background = "black";
  }
  if (guess5Letter5 == currentWordLetter5) {
    document.getElementById("guess5--letter5").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess5Letter5)) {
    document.getElementById("guess5--letter5").style.background = "#b59f3a";
  } else {
    document.getElementById("guess5--letter5").style.background = "black";
  }
  document.getElementById("guess__input").value = "";
}

function checkGuess6() {
  if (guess5 == "") {
    return;
  }
  guess6 = guess;
  document.getElementById("guess6").style.transform = "rotateX(360deg)";

  guess6Letter1 = guess6.charAt(0);
  document.getElementById("guess6--letter1").innerHTML = guess6Letter1;
  guess6Letter2 = guess6.charAt(1);
  document.getElementById("guess6--letter2").innerHTML = guess6Letter2;
  guess6Letter3 = guess6.charAt(2);
  document.getElementById("guess6--letter3").innerHTML = guess6Letter3;
  guess6Letter4 = guess6.charAt(3);
  document.getElementById("guess6--letter4").innerHTML = guess6Letter4;
  guess6Letter5 = guess6.charAt(4);
  document.getElementById("guess6--letter5").innerHTML = guess6Letter5;

  if (guess6Letter1 == currentWordLetter1) {
    document.getElementById("guess6--letter1").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter1)) {
    document.getElementById("guess6--letter1").style.background = "#b59f3a";
  } else {
    document.getElementById("guess6--letter1").style.background = "black";
  }
  if (guess6Letter2 == currentWordLetter2) {
    document.getElementById("guess6--letter2").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter2)) {
    document.getElementById("guess6--letter2").style.background = "#b59f3a";
  } else {
    document.getElementById("guess6--letter2").style.background = "black";
  }
  if (guess6Letter3 == currentWordLetter3) {
    document.getElementById("guess6--letter3").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter3)) {
    document.getElementById("guess6--letter3").style.background = "#b59f3a";
  } else {
    document.getElementById("guess6--letter3").style.background = "black";
  }
  if (guess6Letter4 == currentWordLetter4) {
    document.getElementById("guess6--letter4").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter4)) {
    document.getElementById("guess6--letter4").style.background = "#b59f3a";
  } else {
    document.getElementById("guess6--letter4").style.background = "black";
  }
  if (guess6Letter5 == currentWordLetter5) {
    document.getElementById("guess6--letter5").style.background = "#538d4e";
  } else if (currentWordleAnswer.includes(guess6Letter5)) {
    document.getElementById("guess6--letter5").style.background = "#b59f3a";
  } else {
    document.getElementById("guess6--letter5").style.background = "black";
  }
  document.getElementById("guess__input").disabled = true;
  document.getElementById("guess__input").value = "";
  if (guess != currentWordleAnswer) {
    document.getElementById("end__heading").innerHTML =
      "You Lose. Word was " + currentWordleAnswer + ".";
    document.getElementById("end__screen").style.display = "grid";
  }
}

function resetGame() {
  document.getElementById("guess__input").disabled = false;

  document.getElementById("guess1").style.transform = "rotateX(0deg)";
  document.getElementById("guess2").style.transform = "rotateX(0deg)";
  document.getElementById("guess3").style.transform = "rotateX(0deg)";
  document.getElementById("guess4").style.transform = "rotateX(0deg)";
  document.getElementById("guess5").style.transform = "rotateX(0deg)";
  document.getElementById("guess6").style.transform = "rotateX(0deg)";

  guess = "";
  guess1 = "";
  guess2 = "";
  guess3 = "";
  guess4 = "";
  guess5 = "";
  guess6 = "";
  guess1Letter1 = "";
  guess1Letter2 = "";
  guess1Letter3 = "";
  guess1Letter4 = "";
  guess1Letter5 = "";
  guess2Letter1 = "";
  guess2Letter2 = "";
  guess2Letter3 = "";
  guess2Letter4 = "";
  guess2Letter5 = "";
  guess3Letter1 = "";
  guess3Letter2 = "";
  guess3Letter3 = "";
  guess3Letter4 = "";
  guess3Letter5 = "";
  guess4Letter1 = "";
  guess4Letter2 = "";
  guess4Letter3 = "";
  guess4Letter4 = "";
  guess4Letter5 = "";
  guess5Letter1 = "";
  guess5Letter2 = "";
  guess5Letter3 = "";
  guess5Letter4 = "";
  guess5Letter5 = "";
  guess6Letter1 = "";
  guess6Letter2 = "";
  guess6Letter3 = "";
  guess6Letter4 = "";
  guess6Letter5 = "";

  guess1Letter1 = "";
  document.getElementById("guess1--letter1").innerHTML = "";
  guess1Letter2 = "";
  document.getElementById("guess1--letter2").innerHTML = "";
  guess1Letter3 = "";
  document.getElementById("guess1--letter3").innerHTML = "";
  guess1Letter4 = "";
  document.getElementById("guess1--letter4").innerHTML = "";
  guess1Letter5 = "";
  document.getElementById("guess1--letter5").innerHTML = "";
  guess2Letter1 = "";
  document.getElementById("guess2--letter1").innerHTML = "";
  guess2Letter2 = "";
  document.getElementById("guess2--letter2").innerHTML = "";
  guess2Letter3 = "";
  document.getElementById("guess2--letter3").innerHTML = "";
  guess2Letter4 = "";
  document.getElementById("guess2--letter4").innerHTML = "";
  guess2Letter5 = "";
  document.getElementById("guess2--letter5").innerHTML = "";
  guess3Letter1 = "";
  document.getElementById("guess3--letter1").innerHTML = "";
  guess3Letter2 = "";
  document.getElementById("guess3--letter2").innerHTML = "";
  guess3Letter3 = "";
  document.getElementById("guess3--letter3").innerHTML = "";
  guess3Letter4 = "";
  document.getElementById("guess3--letter4").innerHTML = "";
  guess3Letter5 = "";
  document.getElementById("guess3--letter5").innerHTML = "";
  guess4Letter1 = "";
  document.getElementById("guess4--letter1").innerHTML = "";
  guess4Letter2 = "";
  document.getElementById("guess4--letter2").innerHTML = "";
  guess4Letter3 = "";
  document.getElementById("guess4--letter3").innerHTML = "";
  guess4Letter4 = "";
  document.getElementById("guess4--letter4").innerHTML = "";
  guess4Letter5 = "";
  document.getElementById("guess4--letter5").innerHTML = "";
  guess5Letter1 = "";
  document.getElementById("guess5--letter1").innerHTML = "";
  guess5Letter2 = "";
  document.getElementById("guess5--letter2").innerHTML = "";
  guess5Letter3 = "";
  document.getElementById("guess5--letter3").innerHTML = "";
  guess5Letter4 = "";
  document.getElementById("guess5--letter4").innerHTML = "";
  guess5Letter5 = "";
  document.getElementById("guess5--letter5").innerHTML = "";
  guess6Letter1 = "";
  document.getElementById("guess6--letter1").innerHTML = "";
  guess6Letter2 = "";
  document.getElementById("guess6--letter2").innerHTML = "";
  guess6Letter3 = "";
  document.getElementById("guess6--letter3").innerHTML = "";
  guess6Letter4 = "";
  document.getElementById("guess6--letter4").innerHTML = "";
  guess6Letter5 = "";
  document.getElementById("guess6--letter5").innerHTML = "";

  document.getElementById("guess1--letter1").style.background = "none";
  document.getElementById("guess1--letter2").style.background = "none";
  document.getElementById("guess1--letter3").style.background = "none";
  document.getElementById("guess1--letter4").style.background = "none";
  document.getElementById("guess1--letter5").style.background = "none";
  document.getElementById("guess2--letter1").style.background = "none";
  document.getElementById("guess2--letter2").style.background = "none";
  document.getElementById("guess2--letter3").style.background = "none";
  document.getElementById("guess2--letter4").style.background = "none";
  document.getElementById("guess2--letter5").style.background = "none";
  document.getElementById("guess3--letter1").style.background = "none";
  document.getElementById("guess3--letter2").style.background = "none";
  document.getElementById("guess3--letter3").style.background = "none";
  document.getElementById("guess3--letter4").style.background = "none";
  document.getElementById("guess3--letter5").style.background = "none";
  document.getElementById("guess4--letter1").style.background = "none";
  document.getElementById("guess4--letter2").style.background = "none";
  document.getElementById("guess4--letter3").style.background = "none";
  document.getElementById("guess4--letter4").style.background = "none";
  document.getElementById("guess4--letter5").style.background = "none";
  document.getElementById("guess5--letter1").style.background = "none";
  document.getElementById("guess5--letter2").style.background = "none";
  document.getElementById("guess5--letter3").style.background = "none";
  document.getElementById("guess5--letter4").style.background = "none";
  document.getElementById("guess5--letter5").style.background = "none";
  document.getElementById("guess6--letter1").style.background = "none";
  document.getElementById("guess6--letter2").style.background = "none";
  document.getElementById("guess6--letter3").style.background = "none";
  document.getElementById("guess6--letter4").style.background = "none";
  document.getElementById("guess6--letter5").style.background = "none";

  document.getElementById("end__screen").style.display = "none";
  setTimeout(focusInput, 1000);

  currentWordleAnswer = wordleAnswers[Math.floor(Math.random() * 126)];
  currentWordLetter1 = currentWordleAnswer.charAt(0);
  currentWordLetter2 = currentWordleAnswer.charAt(1);
  currentWordLetter3 = currentWordleAnswer.charAt(2);
  currentWordLetter4 = currentWordleAnswer.charAt(3);
  currentWordLetter5 = currentWordleAnswer.charAt(4);
}
