let [seconds,minutes,hours] = [0,0,0];

let displayTime = document.getElementById('displayTime');
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes=0;
            hours++;
        }
    }

    let hh = hours < 10 ? "0"+hours : hours;
    let mm = minutes < 10 ? "0"+minutes : minutes;
    let ss = seconds < 10 ? "0"+seconds : seconds;

    displayTime.innerHTML= hh + ":" + mm + ":" + ss;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);

}

function watchstop(){
    clearInterval(timer);
}


function watchreset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML="00:00:00"
}