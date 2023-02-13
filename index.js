let minutes = 0;
let seconds = 0
let interval;

function startTimer(){
    interval = setTimeout(function(){
        seconds++
        if(seconds>=60){
            minutes++;
            seconds = 0;
        }
        
        document.getElementById('Timer').innerHTML = 
minutes+'m'+ seconds+'s';
startTimer()
    },1000)
}

function stopTimer(){
    clearTimeout(interval)
}

function resetTimeout(){
    stopTimer()
    minutes = 0;
    seconds = 0
    document.getElementById('Timer').innerHTML = '0m 0s'
}