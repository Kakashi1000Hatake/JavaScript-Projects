var follow = document.querySelector(".follow");

var body = document.querySelector(".body");

body.addEventListener("mousemove", function (dets) {
  follow.style.visibility = "visible";
  const height = follow.offsetHeight;
  const width = follow.offsetWidth;
  follow.style.top = `${dets.pageY - height / 2}px`;
  follow.style.left = `${dets.pageX - width / 2}px`;

  // body.style.backgroundColor = "red"
});

body.addEventListener("mouseleave", function () {
  follow.style.visibility = "hidden";
});
