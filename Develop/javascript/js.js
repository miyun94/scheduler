//current day is displayed at top of calendar - somehow connect to the currentDay tag
function getHeaderDate() {
  let today = moment().format('dddd, MMMM Do')
  $("#currentDay").append(today);
  console.log(today);
}

//display current time in jumbotron 
function displayTime() {
  let now = moment().format('HH:mm:ss')
  $("#currentTime").html(now);
  console.log(now);
}

getHeaderDate();
displayTime();
timer(); 

//makes the time on top change every second
function timer() {
setInterval(function(){displayTime()}, 1000)
}

//change color of schedule-text for each hour depending on whether time is in the past, future, or present 
let currentTime = moment()

let nineAM = moment().startOf('day').add(9, 'h');
console.log(nineAM.format('HH:mm:ss'));
if (currentTime.isBefore(nineAM)) {
  $('#nineAM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(nineAM)) {
  $('#nineAM').addClass('past')
  console.log('after')
}
else {
  $('#nineAM').addClass('present')
  console.log('now')
}

let tenAM = moment().startOf('day').add(10, 'h');
console.log(tenAM.format('HH:mm:ss'));
if (currentTime.isBefore(tenAM)) {
  $('#tenAM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(tenAM)) {
  $('#tenAM').addClass('past')
  console.log('after')
}
else {
  $('#tenAM').addClass('present')
  console.log('now')
}

let elevenAM = moment().startOf('day').add(11, 'h'); 
console.log(elevenAM.format('HH:mm:ss')); 
if (currentTime.isBefore(elevenAM)) {
  $('#elevenAM').addClass('future')
  console.log('before');
} else if(currentTime.isAfter(elevenAM)) {
  $('#elevenAM').addClass('past')
  console.log('after')}
else {$('#elevenAM').addClass('present')
  console.log('now')}


let twelvePM = moment().startOf('day').add(12, 'h');
console.log(twelvePM.format('HH:mm:ss'));
if (currentTime.isBefore(twelvePM)) {
  $('#twelvePM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(twelvePM)) {
  $('#twelvePM').addClass('past')
  console.log('after')
}
else {
  $('#twelvePM').addClass('present')
  console.log('now')
}

let onePM = moment().startOf('day').add(13, 'h');
console.log(onePM.format('HH:mm:ss'));
if (currentTime.isBefore(onePM)) {
  $('#onePM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(onePM)) {
  $('#onePM').addClass('past')
  console.log('after')
}
else {
  $('#onePM').addClass('present')
  console.log('now')
}

let twoPM = moment().startOf('day').add(14, 'h');
console.log(twoPM.format('HH:mm:ss'));
if (currentTime.isBefore(twoPM)) {
  $('#twoPM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(twoPM)) {
  $('#twoPM').addClass('past')
  console.log('after')
}
else {
  $('#twoPM').addClass('present')
  console.log('now')
}

let threePM = moment().startOf('day').add(15, 'h');
console.log(threePM.format('HH:mm:ss'));
if (currentTime.isBefore(threePM)) {
  $('#threePM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(threePM)) {
  $('#threePM').addClass('past')
  console.log('after')
}
else {
  $('#threePM').addClass('present')
  console.log('now')
}

let fourPM = moment().startOf('day').add(16, 'h');
console.log(fourPM.format('HH:mm:ss'));
if (currentTime.isBefore(fourPM)) {
  $('#fourPM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(fourPM)) {
  $('#fourPM').addClass('past')
  console.log('after')
}
else {
  $('#fourPM').addClass('present')
  console.log('now')
}

let fivePM = moment().startOf('day').add(17, 'h');
console.log(fivePM.format('HH:mm:ss'));
if (currentTime.isBefore(fivePM)) {
  $('#fivePM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(fivePM)) {
  $('#fivePM').addClass('past')
  console.log('after')
}
else {
  $('#fivePM').addClass('present')
  console.log('now')
}

let sixPM = moment().startOf('day').add(18, 'h');
console.log(sixPM.format('HH:mm:ss'));
if (currentTime.isBefore(sixPM)) {
  $('#sixPM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(sixPM)) {
  $('#sixPM').addClass('past')
  console.log('after')
}
else {
  $('#sixPM').addClass('present')
  console.log('now')
}

//set things to local storage when save button is clicked
var saveButton = document.querySelector('btn')
saveButton.onclick = saveData;

function saveData(){
  var input = document.getElementById("nineAM");
  localStorage.setItem("form-control", input.value);
  var storedValue = localStorage.getItem("form-control");
}