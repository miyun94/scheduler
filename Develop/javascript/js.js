// gets data for the header date
function getHeaderDate() {
    let today = moment().format('dddd, MMMM Do')
    $("#currentDay").append(today);
}

