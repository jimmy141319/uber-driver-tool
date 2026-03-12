function calculate(){
let start = document.getElementById("startTime").value;
let income = document.getElementById("income").value;
if(!start || !income){
document.getElementById("result").innerHTML="Enter data first";
return;
}
let startHour = parseInt(start.split(":")[0]);
let startMin = parseInt(start.split(":")[1]);
let now = new Date();
let nowHour = now.getHours();
let nowMin = now.getMinutes();
let startTotal = startHour*60 + startMin;
let nowTotal = nowHour*60 + nowMin;
let hours = (nowTotal - startTotal)/60;
let hourly = income / hours;
hourly = Math.round(hourly);
document.getElementById("result").innerHTML =
"Hourly Income: " + hourly + " TWD";
}
