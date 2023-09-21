function timeUpdate(){

    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let time = new Date();

    hh.innerHTML = time.getHours().toString().padStart(2,'0');
    mm.innerHTML = time.getMinutes().toString().padStart(2,'0');
    ss.innerHTML = time.getSeconds().toString().padStart(2,'0');


}

timeUpdate();

setInterval(timeUpdate,100);