let rock = document.querySelector(".input1");
let paper = document.querySelector(".input2");
let scisors = document.querySelector(".input3");
let allInput = document.querySelectorAll(".input")
let output = document.querySelector(".output");

let randomValue = ["Rock", "Paper", "Scissors"];

let ran = Math.floor(Math.random() * randomValue.length);



window.setInterval(() => {
  output.innerHTML = randomValue[ran];
}, 100);

