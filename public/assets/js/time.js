var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var prepand;
if(h>=12) {
  prepand = "PM";
  h = h - 12;
}
else {
  prepand = "AM";
}

if(m<10) {
  m = "0" + m;
}

if(s<10) {
 s = "0" + s; 
}
tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
function GetClock(){
if(nyear<1000) nyear+=1900;
document.getElementById("clockbox").innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";}
document.getElementById("vtimein").innerHTML = + h + ":" + m+ " " + prepand + " ";
window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}