let demo = document.querySelector(".demo")

function showTime() {
let date = document.querySelector("#date")
let time = document.querySelector("#time")
let dateTime = new Date()
let year = dateTime.getFullYear();
let month = dateTime.getMonth();
let day = dateTime.getDate();
let hour = dateTime.getHours()
let minute = dateTime.getMinutes()
let second = dateTime.getSeconds()
let xm = "am";

    if (hour > 12) {
        hour = hour - 12;
        xm = "pm"
    } 
    
    hour = hour < 10 ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    month = month < 10 ? "0" + parseFloat(month+1) : month;
    day = day < 10 ? "0" + day : day;

    date.innerHTML = `${year} / ${month} / ${day}`;

    time.innerHTML = `${hour} : ${minute} : ${second} ${xm}`;

    setTimeout(showTime ,1000);
}

demo.addEventListener("load",showTime())






















