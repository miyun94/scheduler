// current day is displayed at top of calendar - somehow connect to the currentDay tag
function getHeaderDate() {
  let today = moment().format('dddd, MMMM Do')
  $("#currentDay").append(today);
  console.log(today);}

function displayTime() {
  let now = moment().format('HH:mm:ss')
  $("#currentTime").html(now);
  console.log(now); 
}

getHeaderDate();
displayTime(); 
//timer(); 

//function timer() {
  //setInterval(function(){displayTime()}, 1000)
//}

  //make a function where something is set to each hour
  //.removeclass
  //.addclass

//change color of schedule-text

let nineAM = moment().startOf('day').add(9, 'h'); 
console.log(nineAM.format('HH:mm:ss')); 

let currentTime = moment()

if (currentTime.isBefore(nineAM)) {
  $('#nineAM').addClass('future')
  console.log('before');
} else if(currentTime.isAfter(nineAM)) {
  $('#nineAM').addClass('past')
  console.log('after')}
else {$('#nineAM').addClass('present')
  console.log('now')}

//function backgroundColor(){
  //let currentTime = 
//if (currentTime > ) // should connect to .past
//else if (currentTime = ) // should connect to .present
//else if (currentTime < ) // should connect to .future/
//}

//localStorage.setItem("schedule", $('#scheduler-text').val());
//$('#scheduler-text').val(localStorage.getItem("schedule"))