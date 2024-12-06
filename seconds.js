let secondsLeft = document.getElementById('SecondsLeft');
let secondsLived = document.getElementById('SecondsLived');
let percentLived = document.getElementById('PercentLived');

let dateBorn;
let dateDepart = new Date('12/29/2080');

function setBirthday() {
    let userBirthday = document.getElementById('userBirthday').value;
    dateBorn = new Date(userBirthday);
    updateDisplay();
}

function updateDisplay() {
    var display = setInterval(function() {
        var dateNow = new Date();
        let dif = Math.abs(dateBorn.getTime() - dateNow.getTime()) / 1000;
        let dif2 = Math.abs(dateNow.getTime() - dateDepart.getTime()) / 1000;
        let totalLifeSpan = Math.abs(dateDepart.getTime() - dateBorn.getTime()) / 1000;
        let percent = ((dif / totalLifeSpan) * 100).toFixed(4);
        
        secondsLived.innerHTML = "Seconds Lived: " + Math.floor(dif);
        secondsLeft.innerHTML = "Seconds Left: " + Math.floor(dif2);
        percentLived.innerHTML = "Percent Lived: " + percent + "%";
    }, 1000);
}