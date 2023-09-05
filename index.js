// const randomNumber1 = Math.floor(Math.random() * 6) + 1;

// const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// document
//   .querySelectorAll("img")[0]
//   .setAttribute("src", `./images/dice${randomNumber1}.png`);

// document
//   .querySelectorAll("img")[1]
//   .setAttribute("src", `./images/dice${randomNumber2}.png`);

var randomNumber1;
var randomNumber2;
var randomNumber3;
var point = 0;

document.querySelector("button").addEventListener("click", setBattle);

function setBattle() {
  setTimeout(() => {
    playerOne();
    playerTwo();
    playerThree();
    if (randomNumber1 + randomNumber2 + randomNumber3 >= 11) {
      point += 100000;
      document.querySelector("h1").innerHTML = `${point}đ`;
    } else {
      point -= 100000;
      document.querySelector("h1").innerHTML = `${point}đ`;
    }
    audio.play();
  }, 1000);
}

function playerOne() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelectorAll("img")[0]
    .setAttribute("src", `./images/dice${randomNumber1}.png`);
}

function playerTwo() {
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", `./images/dice${randomNumber2}.png`);
}

function playerThree() {
  randomNumber3 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelectorAll("img")[2]
    .setAttribute("src", `./images/dice${randomNumber3}.png`);
}

var audio = new Audio("./sound/y2mate-mp3cut_d1tt0z9.mp3");
