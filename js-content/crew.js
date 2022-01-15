const nav = document.querySelector(".buttons");
const slides = document.querySelectorAll(".crew_slide");
const navBtn = Array.from(nav.children);
let currentImg = slides[0];
let currentBtn = navBtn[0];
console.log(navBtn);
console.log(slides);

slides.forEach((e, ind) => {
  navBtn[ind].addEventListener("click", () => {
    currentImg.classList.remove("selected");
    currentImg = e;
    e.classList.add("selected");

    currentBtn.classList.remove("selected");
    currentBtn = navBtn[ind];
    currentBtn.classList.add("selected");
  });
});
