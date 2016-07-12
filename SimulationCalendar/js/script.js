//1468334719356 17:45 -> 1/10
var day=1;
var month=10;
var oneDay = 120000;

var date = new Date();
var t = date.getTime()-1468334719356;
t=t/(1000*60); //in minutes
t=t/2; // in simulation days
t=parseInt(t);
console.log(t);

var temp=t/30;//
month =month + parseInt(temp);
day=day+(t%30);
day=day-3; //xathike sti poreia
document.addEventListener("DOMContentLoaded",function (){
document.getElementById("time").innerHTML=day+"/"+month;
setInterval(incDay, oneDay);
});

function incDay(){
  day=day+1;
  if (day>30){
    month=month+1;
    day = 0;
  }
display(day,month);
}

function display(day,month){
  document.getElementById("time").innerHTML=day+"/"+month;
}