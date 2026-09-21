const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const audio = document.querySelector("audio")
let previousSecond;
let previousMinute;
let previousHour;

function setDate(){

    const date = new Date();

    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours()%12;



    console.log(second);
    console.log(minute);
    console.log(hour);
    const secondsDegrees = ((second / 60) * 360) + 90;
    const minutesDegrees = minute * 6 + 90;
    const hoursDegrees = hour * 30 + minute * 0.5 + 90;


    if(previousSecond == 59 && second == 0){
        secondHand.style.transition = 'none';
    }else{
        secondHand.style.transition = "transform 0.05s cubic-bezier(0.42, 0, 0, 2.62)"
    }

    if (previousMinute === 59 && minute === 0) {
        minuteHand.style.transition = "none";
    } else {
        minuteHand.style.transition = "transform 0.05s cubic-bezier(0.42, 0, 0, 2.62)";
    }

    if (previousHour === 11 && hour === 0) {
        hourHand.style.transition = "none";
    } else {
        hourHand.style.transition = "transform 0.05s cubic-bezier(0.42, 0, 0, 2.62)";
    }

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    audio.currentTime = 0;
    audio.play();
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    previousSecond = second;
    previousMinute = minute;
    previousHour = hour;
}

setInterval(setDate, 1000)