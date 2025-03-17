let start = document.getElementById("start");
let stops = document.getElementById("stops");
let reset = document.getElementById("reset");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const darkModeToggle = document.getElementById('darkMode');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

let hrs = '0';
let min = '0';
let secd = '0';

let timer =null;

start.addEventListener('click',() =>{
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(clock,1000);

})

stops.addEventListener('click',() => {
    clearInterval(timer);
    timer = null;
})

reset.addEventListener('click',() => {
    clearInterval(timer);
    hrs = '0';
    min = '0';
    secd = '0';
    updateDisplay();
})


function clock(){
    secd++;
    if(secd == 60){
        secd = 0;
        min++;
        if(min == 60){
            min = 0;
            hrs++;
        }
    }

    updateDisplay();


}

function updateDisplay() {
    hours.innerHTML = (hrs < 10 ? "0" : "") + hrs;
    minutes.innerHTML = (min < 10 ? "0" : "") + min;
    seconds.innerHTML = (secd < 10 ? "0" : "") + secd;
}


