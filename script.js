var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
// alert(randomNumber1);
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var path1 = "images/" + randomDiceImage1;
var replace1 = document.querySelectorAll("img")[0];
replace1.setAttribute("src", path1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var path2 = "images/" + randomDiceImage2;
var replace2 = document.querySelectorAll("img")[1].setAttribute("src", path2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
