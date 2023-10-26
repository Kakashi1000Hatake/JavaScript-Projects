var pbtm = document.querySelector(".pbtm");
var time = document.querySelector(".time");

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
  setInterval(() => {
    if (i > 0) {
      i--;
      time.textContent = i;
    } else {
      i = 0;
      time.style.backgroundColor = "red";
    }
  }, 1000);
}

runTimer();
makeBubble();
