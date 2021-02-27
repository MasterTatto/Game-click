let clicks = 1;
let timeOut = 5000;

const display = document.getElementById('display');
const button = document.getElementById('button');
const counter = document.getElementById('counter');

button.onclick = start ;

function start() {
    button.onclick = () => counter.innerHTML = ++clicks ;

    display.innerHTML = formatTime(timeOut);
    
    let startTime = Date.now() ;

    
const interval = setInterval(() => {

          let delta = Date.now() - startTime ;

          display.innerHTML = formatTime(timeOut - delta) + ' sec'; 
 
    },100)
 
    

const finishTime = setTimeout(() => {
    
    display.innerHTML = 'Game Over' ;

     clearInterval(interval);
     clearTimeout(finishTime);
    button.onclick = 0;
    counter.innerHTML = 'Вы собрали ' + clicks + ' очков'
}, timeOut)


}

 function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(1);
}



const repeat = document.getElementById('repeat');
repeat.onclick = again ;
function again() {
        button.onclick = start;
        counter.innerHTML = 0;
        clicks = 1;
        display.innerHTML = 5 + ' sec'
}

