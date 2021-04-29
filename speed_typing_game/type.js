window.addEventListener("load", init);

let time = 6;
let score = 0;
let isplaying;

const currentword = document.querySelector(".words");
const input = document.querySelector(".input_word");
const seconds = document.querySelector(".level");
const timedisplay = document.querySelector("#time");
const scoredisplay = document.querySelector("#score");
const message = document.querySelector(".result");

const words = [
  "amount",
  "number",
  "play",
  "pause",
  "current",
  "score",
  "time",
  "display",
  "wordbeater",
  "reading",
  "comments",
  "youtube",
  "videos",
  "gmai",
  "speed",
  "cheat",
  "sheets",
  "html",
  "vyshnav",
  "chikku",
  "ajay",
  "suni",
  "winter",
  "summer",
  "easter",
  "weather",
  "climate",
  "god",
  "devil",
  "gangster",
  "cop",
];

function init() {
  showWord(words);

  window.addEventListener("input", start_match);

  setInterval(countdown, 1000);

  setInterval(check_status, 50);

}

function start_match() {
  if (match_words()) {
    time = 6;
    isplaying = true;
    showWord(words);
    score++;
    const input = document.querySelector(".input_word");
    input.value = "";
  }
  const scoredisplay = document.querySelector("#score");
  scoredisplay.innerHTML = score;
}

function match_words() {
  const input = document.querySelector(".input_word");
  const currentword = document.querySelector(".words");
  if (input.value == currentword.innerHTML) {
    const message = document.querySelector(".result");
    message.innerHTML = "correct!!!";
    return true;
  } else {
    const message = document.querySelector(".result");
    message.innerHTML = "";
    return false;
  }
}
function showWord(words) {
  const rand_word = Math.floor(Math.random() * words.length);
  const currentword = document.querySelector(".words");
  currentword.innerHTML = words[rand_word];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isplaying = false;
  }
  const timedisplay = document.querySelector("#time");
  timedisplay.innerHTML = time;
}

function check_status() {
  if (!isplaying && time === 0) {
    const message = document.querySelector(".result");
    message.innerHTML = "Game over!!!";
    const scoredisplay = document.querySelector("#score");
    score= scoredisplay.innerHTML=0;
  }
  return score;
}

