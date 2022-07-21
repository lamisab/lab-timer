

const timerDiv=document.getElementById("timer");
const startButton = document.getElementById('start-btn');
let didStart =false;
let timer;
function startButtonFunction(event){
    if (didStart){
        didStart=false;
        clearInterval(timer);
        timerDiv.innerText ='0';
        startButton.innerText ='Start';
    } else {
        didStart =true;
        startTimer();
        startButton.innerText ='Stop';
    }
}

function startTimer(){
    const dateRun= new Date().valueOf();

    const dateNow= new Date().valueOf();
    const newTimer= Math.floor ((dateNow- dateRun)/1000).toFixed((0));
    timerDiv.innerText=newTimer;

    timer = setInterval(()=> {
        const dateNow= new Date().valueOf();
        const newTimer= Math.floor ((dateNow- dateRun)/1000).toFixed((0));
        timerDiv.innerText=newTimer;
    },900);
}
