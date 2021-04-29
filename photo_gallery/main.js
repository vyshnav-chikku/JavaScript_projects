const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".img");


imgs.forEach((a) => a.addEventListener("click", img_fun));

function img_fun(b) { 

  //change the target of current image
  current.src = b.target.src;

  //add class fade-in
  current.classList.add('fade-in');

  setTimeout(() => current.classList.remove('fade-in'),500);

}
