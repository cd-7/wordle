var currentWordleAnswer = "blast";
var currentWordLetter1 = currentWordleAnswer.charAt(0);
var currentWordLetter2 = currentWordleAnswer.charAt(1);
var currentWordLetter3 = currentWordleAnswer.charAt(2);
var currentWordLetter4 = currentWordleAnswer.charAt(3);
var currentWordLetter5 = currentWordleAnswer.charAt(4);
var guess = "hello";
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

hideWarning();
function hideWarning() {
  document.getElementById("warning__label").style.display = "none";
}

function checkAllGuesses() {
  while (true) {
    guess = document.getElementById("guess__input").value;
    if (guess.length == 5) {
      break;
    } else {
      document.getElementById("warning__label").style.display = "block";
      setTimeout(hideWarning, 5000);
      return;
    }
  }
  checkGuess1();
}

function checkGuess1() {
  if (guess1 != "") {
    return;
  }
  guess1 = guess;
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
}
