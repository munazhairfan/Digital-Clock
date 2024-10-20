let clock = document.getElementsByClassName("clock")[0];

function initialize(){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds =now.getSeconds();
    let miliseconds =now.getMilliseconds();
    let time = `${hour.toString().padStart('2','0')} : ${minutes.toString().padStart('2','0')} : ${seconds.toString().padStart('2','0')} : ${miliseconds.toString().padStart('2','0')}`
    clock.textContent = time;
}
setInterval(initialize, 1);