let secondsLeft = document.getElementById('SecondsLeft');
let secondsLived = document.getElementById('SecondsLived');

let dateBorn = new Date('12/29/2000');

var dateNow = new Date();
var dateDepart = new Date('12/29/2080')
dif = Math.abs(dateBorn.getTime() - dateNow.getTime()) /1000
dif2 = Math.abs(dateNow.getTime() - dateDepart.getTime()) / 1000
let percent

var display = setInterval(
    secondsLived.innerHTML = "Seconds Lived :" + dif ,1000)
var display1 = setInterval(
    secondsLeft.innerHTML = "Seconds left :" + dif2 ,1000)