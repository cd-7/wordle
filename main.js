var currentWordleAnswer = "blast";
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
  document.getElementById("warning__label").style.display =
    "none";
}

function checkGuess() {
  while (true) {
    guess = document.getElementById("guess__input").value;

    if (guess.length == 5) {
      guess1 = guess;
      break;
    } else {
      document.getElementById(
        "warning__label"
      ).style.display = "block";
      setTimeout(hideWarning, 5000);
      return;
    }
  }
  guess1Letter1 = guess1.charAt(0);
  document.getElementById("guess1--letter1").innerHTML = guess1Letter1;
  guess1Letter2 = guess1.charAt(1);
  guess1Letter3 = guess1.charAt(2);
  guess1Letter4 = guess1.charAt(3);
  guess1Letter5 = guess1.charAt(4);
}
