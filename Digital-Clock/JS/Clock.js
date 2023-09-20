// function timer(){
//     const timeDisplay = document.getElementById("timeDisplay");

//     const clock = new Date();

//     let hh = clock.getHours().toString().padStart(2, '0');
//     let mm = clock.getMinutes().toString().padStart(2, '0');
//     let ss = clock.getSeconds().toString().padStart(2, '0');

//     let timeString = hh ;
//     timeDisplay.textContent = timeString;

// }
// timer();

// window.setInterval(timer,1000);s
function timer(){
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currntTime = new Date();

hrs.innerHTML = currntTime.getHours();
min.innerHTML = currntTime.getMinutes();
sec.innerHTML = currntTime.getSeconds();
}

timer();
 setInterval(timer,1000);
