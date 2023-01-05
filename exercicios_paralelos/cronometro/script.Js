var sec = 0
var min = 0
var msec = 0
var interval

const start = () => {
  const start = document.querySelector('.start-btn')
    start.addEventListener('click', () => {
     interval =  setInterval(counter, 100)
    })
};
const pause = () => {
  const pause = document.querySelector('.pause-btn')
    pause.addEventListener('click', function(){
        clearInterval(interval)
    })
};
const zerar = () => {
  const zerar = document.querySelector('.zerar-btn')
    zerar.addEventListener('click', function(){
       sec = 0;
       min = 0;
       document.getElementById('timer').innerText = '00:00:00'
    })
};

function counter(){
    sec ++
    if(sec == 60){
        min++
        sec = 0
    }
    document.getElementById('timer').innerText = min + ':' + sec
}

start();
pause();
zerar();