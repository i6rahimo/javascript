const day     = document.querySelector('.days p')
const hour    = document.querySelector('.hours p')
const mins    = document.querySelector('.mins p')
const seconds = document.querySelector('.seconds p')

const newYears = '1 Jan 2022';
function coutdown() {
    const newYearsDate = new Date(newYears);
    const currentDate  = new Date()

    const totralSeconds = (newYearsDate - currentDate) / 1000;

    const days    = Math.floor(totralSeconds / 3600 / 24)
    const hours   = Math.floor(totralSeconds / 3600 )  %24
    const minutes = Math.floor(totralSeconds / 60 ) % 60
    const second  = Math.floor(totralSeconds) % 60


    day.innerHTML     = days;
    hour.innerHTML    = hours; 
    mins.innerHTML    = formatTime(minutes)
    seconds.innerHTML = formatTime(second)

    // console.log(days, hours, minutes)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

coutdown()
setInterval(coutdown, 1000)