var pbtm = document.querySelector(".pbtm");
var time = document.querySelector(".time");
var hit = document.querySelector(".hit");
var points = document.querySelector(".points");
score = 0;
var newHit = 0;

function makeBubble() {
  var clutter = "";

  for (i = 1; i <= 120; i++) {
    var x = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${x}</div>`;
  }

  pbtm.innerHTML = clutter;
}

function runTimer() {
  var i = time.innerHTML;
  var timer = setInterval(() => {
    if (i > 0) {
      i--;
      time.textContent = i;
    } else {
      i = 0;
      time.style.backgroundColor = "red";

      pbtm.innerHTML = `<h1>Game Over <br/>Your Score : ${points.innerHTML}</h1>`;
      clearInterval(timer);
    }
  }, 1000);
}

function getNewHit() {
  newHit = Math.floor(Math.random() * 10);

  hit.innerHTML = newHit;
}

function increaseScore() {
  score += 10;
  points.textContent = score;
}

pbtm.addEventListener("click", (dets) => {
  var clickedNum = Number(dets.target.textContent);

  if (newHit === clickedNum) {
    makeBubble();
    getNewHit();
    increaseScore();
  }
});

getNewHit();
runTimer();
makeBubble();
