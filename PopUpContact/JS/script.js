let pop = document.querySelector(".popBtn");
let popUp = document.querySelector(".popUp");
let close = document.querySelector(".close")
let section = document.querySelector(".section")

pop.addEventListener("click", () => {
  popUp.classList.add("openPop");
    // section.style.backgroundColor="red";
});

close.addEventListener("click", () => {
  popUp.classList.remove("openPop");
});
