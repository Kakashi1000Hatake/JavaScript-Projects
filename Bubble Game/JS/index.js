var pbtm = document.querySelector(".pbtm");

function makeBubble() {
  var clutter = "";

  for (i = 1; i <= 152; i++) {
    var x = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${x}</div>`;
  }

  pbtm.innerHTML = clutter;
}

makeBubble();
