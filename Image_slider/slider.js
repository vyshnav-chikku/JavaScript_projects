const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

const prevbtn = document.querySelector("#prevbtn");
const nextbtn = document.querySelector("#nextbtn");

let counter = 1;
const size = images[0].clientWidth;

slider.style.transform = "translateX(" + -size * counter + "px)";

const body = document.querySelector("body");

//console.log(body.clientWidth);
//console.log(body.clientHeight);

nextbtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;   //to solve the performance issue
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
prevbtn.addEventListener("click", () => {
  if (counter <= 0) return;     // ""   
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

slider.addEventListener("transitionend", () => {
  if (images[counter].id == "lastclone") {
    slider.style.transition = "none";
    counter = images.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
    console.log(counter);
  }
  if (images[counter].id == "firstclone") {
    slider.style.transition = "none";
    counter = images.length - (images.length - 1); //images.length - counter is also possible
    slider.style.transform = "translateX(" + -size * counter + "px)";
    console.log(counter);
  }
});
