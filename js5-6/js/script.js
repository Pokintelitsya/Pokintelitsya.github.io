
var tm = new function Tm(){
  this.h = 0;
  this.m = 0;
  this.s = 0;
  this.ms = 0;
  this.time = 0;
  this.currentTime = 0;
//Timer's counting
  var timerCount = function(startTime){

      tm.time = new Date() - startTime;

      tm.h = (Math.floor((tm.time/1000)/3600))%60;
      if(tm.h < 10) {
        hours.innerHTML = "0"+tm.h;
      } else hours.innerHTML = tm.h;

      tm.m = (Math.floor((tm.time/1000)/60))%60;
      if(tm.m < 10) {
        min.innerHTML = "0"+tm.m;
      } else min.innerHTML = tm.m;

      tm.s = (Math.floor(tm.time/1000))%60;
      if(tm.s < 10) {
        sec.innerHTML  = "0"+tm.s;
      } else sec.innerHTML  = tm.s;

      tm.ms = ((tm.time)%1000);
      if( tm.ms < 100){
        msec.innerHTML = "0" + tm.ms;
      }else msec.innerHTML = tm.ms;
  }

//Handlers
  this.tmStart = function(sT){
      tm.timerId = setInterval(timerCount, 25, sT);
  }

  this.tmStop = function(){
    clearInterval(tm.timerId);
    this.h = 0;
    this.m = 0;
    this.s = 0;
    this.ms = 0;
    this.time = 0;
    hours.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    msec.innerHTML = "000";
  }

  this.tmPause = function(){
    clearInterval(tm.timerId);
  }
}

function changeStartButton(){
  this.setAttribute('style','display:none');
  pause.setAttribute('style','display:inline-block');
  var startTime = new Date();
  tm.tmStart(startTime);
}
function changePauseButton(){
  this.setAttribute('style','display:none');
  cont.setAttribute('style','display:inline-block');
  tm.currentTime = tm.time;
  tm.tmPause();
}
function changeContButton(){
  this.setAttribute('style','display:none');
  pause.setAttribute('style','display:inline-block');
  var startTime = new Date();
  startTime -= tm.currentTime;
  tm.tmStart(startTime);
}
function changeStopButton(){
  pause.setAttribute('style','display:none');
  cont.setAttribute('style','display:none');
  start.setAttribute('style','display:inline-block');
  tm.tmStop();
}

//Listeners
start.addEventListener("click", changeStartButton);
pause.addEventListener("click", changePauseButton);
cont.addEventListener("click", changeContButton);
stp.addEventListener("click", changeStopButton);
