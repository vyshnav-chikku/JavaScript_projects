window.addEventListener("load", () => {
  const pads = document.querySelectorAll(".pads div");
  const sounds = document.querySelectorAll(".sounds");
  const visual =document.querySelector('.visual')

  //pads & sounds is an array
  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      sounds[index].currentTime = 0; //it will reset the audio play positin to 0s
      sounds[index].play();
      console.log(sounds[index]);

      create_anima(index);
    });
  });
  const colors = [
    "#f00909",
    "#c1f505",
    "#076bee",
    "#e780f0",
    "#0e0d0d",
    "#67e4e4",
  ];

  const create_anima = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.background=colors[index];
    bubble.style.animation='jump 1s ease';
    bubble.addEventListener("animationend",function(){
        visual.removeChild(this);
    } )
  };
})