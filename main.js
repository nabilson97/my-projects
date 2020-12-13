var countdown=document.getElementById('countdown')

var count=10
var timer=setInterval(function(){
  count --
  countdown.textContent=count
  if (count<10 && count>0) {
    count='0'+count
    countdown.textContent=count
  }
  if (count===0) {
    countdown.textContent='00'
  }
  if (count<0) {
    countdown.textContent='complete...!'
    clearInterval(timer)
  }
},1000)
