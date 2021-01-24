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
  setInterval(function () { displayTime() }, 1000)
}


//set current time to refer back to 
let currentTime = moment()
//change color of schedule-text for each hour depending on whether time is in the past, future, or present
let nineAM = moment().startOf('day').add(9, 'h');
console.log(nineAM.format('HH:mm:ss'));
if (currentTime.isBefore(nineAM)) {
  $('#nineAM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(nineAM)) {
  $('#nineAM').addClass('past')
  console.log('after')
}
let hourStartNine = moment("9:00:00", "HH:mm:ss")
let hourEndNine = moment("9:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartNine, hourEndNine)) {
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
let hourStartTen = moment("10:00:00", "HH:mm:ss")
let hourEndTen = moment("10:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartTen, hourEndTen)) {
  $('#tenAM').addClass('present')
  console.log('now')
}

let elevenAM = moment().startOf('day').add(11, 'h');
console.log(elevenAM.format('HH:mm:ss'));
if (currentTime.isBefore(elevenAM)) {
  $('#elevenAM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(elevenAM)) {
  $('#elevenAM').addClass('past')
  console.log('after')
}
let hourStartEleven = moment("11:00:00", "HH:mm:ss")
let hourEndeleven = moment("11:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartEleven, hourEndeleven)) {
  $('#elevenAM').addClass('present')
  console.log('now')
}


let twelvePM = moment().startOf('day').add(12, 'h');
console.log(twelvePM.format('HH:mm:ss'));
if (currentTime.isBefore(twelvePM)) {
  $('#twelvePM').addClass('future')
  console.log('before');
} else if (currentTime.isAfter(twelvePM)) {
  $('#twelvePM').addClass('past')
  console.log('after')
}
let hourStartTwelve = moment("12:00:00", "HH:mm:ss")
let hourEndTwelve = moment("12:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartTwelve, hourEndTwelve)) {
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
let hourStartOne = moment("13:00:00", "HH:mm:ss")
let hourEndOne = moment("13:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartOne, hourEndOne)) {
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
let hourStartTwo = moment("14:00:00", "HH:mm:ss")
let hourEndTwo = moment("14:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartTwo, hourEndTwo)) {
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
let hourStartThree = moment("15:00:00", "HH:mm:ss")
let hourEndThree = moment("15:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartThree, hourEndThree)) {
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
let hourStartFour = moment("16:00:00", "HH:mm:ss")
let hourEndFour = moment("16:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartFour, hourEndFour)) {
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
let hourStartFive = moment("17:00:00", "HH:mm:ss")
let hourEndFive = moment("17:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartFive, hourEndFive)) {
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
let hourStartSix = moment("18:00:00", "HH:mm:ss")
let hourEndSix = moment("18:59:59", "HH:mm:ss")
if (currentTime.isBetween(hourStartSix, hourEndSix)) {
  $('#sixPM').addClass('present')
  console.log('now')
}

//set things to local storage when save button is clicked for each hour 


$(document).ready(function () {
  $("button").on("click", function () {
  let valueAtNine = $('#nineAM').val()
  console.log(valueAtNine); 
  localStorage.setItem("9AM", (valueAtNine))
})
$("#nineAM").append(localStorage.getItem("9AM"))

$("button").on("click", function () {
  let valueAtTen = $('#tenAM').val()
  console.log(valueAtTen); 
  localStorage.setItem("10AM", (valueAtTen))
})
$("#tenAM").append(localStorage.getItem("10AM"))

$("button").on("click", function () {
  let valueAtEleven = $('#elevenAM').val()
  console.log(valueAtEleven); 
  localStorage.setItem("11AM", (valueAtEleven))
})
$("#elevenAM").append(localStorage.getItem("11AM"))

$("button").on("click", function () {
  let valueAtTwelve = $('#twelvePM').val()
  console.log(valueAtTwelve); 
  localStorage.setItem("12PM", (valueAtTwelve))
})
$("#twelvePM").append(localStorage.getItem("12PM"))

$("button").on("click", function () {
  let valueAtOne = $('#onePM').val()
  console.log(valueAtOne); 
  localStorage.setItem("1PM", (valueAtOne))
})
$("#onePM").append(localStorage.getItem("1PM"))

$("button").on("click", function () {
  let valueAtTwo = $('#twoPM').val()
  console.log(valueAtTwo); 
  localStorage.setItem("2PM", (valueAtTwo))
})
$("#twoPM").append(localStorage.getItem("2PM"))

$("button").on("click", function () {
  let valueAtThree = $('#threePM').val()
  console.log(valueAtThree); 
  localStorage.setItem("3PM", (valueAtThree))
})
$("#threePM").append(localStorage.getItem("3PM"))

$("button").on("click", function () {
  let valueAtFour = $('#fourPM').val()
  console.log(valueAtFour); 
  localStorage.setItem("4PM", (valueAtFour))
})
$("#fourPM").append(localStorage.getItem("4PM"))

$("button").on("click", function () {
  let valueAtFive = $('#fivePM').val()
  console.log(valueAtFive); 
  localStorage.setItem("5PM", (valueAtFive))
})
$("#fivePM").append(localStorage.getItem("5PM"))

$("button").on("click", function () {
  let valueAtSix = $('#sixPM').val()
  console.log(valueAtSix); 
  localStorage.setItem("6PM", (valueAtSix))
})
$("#sixPM").append(localStorage.getItem("6PM"))

})