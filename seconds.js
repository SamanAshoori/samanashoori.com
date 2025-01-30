let secondsLeft = document.getElementById('SecondsLeft').querySelector('.stat-value');
let secondsLived = document.getElementById('SecondsLived').querySelector('.stat-value');
let percentLived = document.getElementById('PercentLived').querySelector('.stat-value');

let dateBorn;
let dateDepart;

function setBirthday() {
    let userBirthday = document.getElementById('userBirthday').value;
    if (!userBirthday) {
        alert("Please enter your birthday in dd-mm-yyyy format!");
        return;
    }

    // Validate the date format
    let datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!datePattern.test(userBirthday)) {
        alert("Invalid date format! Please use dd-mm-yyyy.");
        return;
    }

    // Convert the input to a Date object
    let [day, month, year] = userBirthday.split('-');
    dateBorn = new Date(`${year}-${month}-${day}`);

    // Check if the date is valid
    if (isNaN(dateBorn.getTime())) {
        alert("Invalid date! Please enter a valid date in dd-mm-yyyy format.");
        return;
    }

    // Calculate departure date (80 years after birthday)
    dateDepart = new Date(dateBorn);
    dateDepart.setFullYear(dateBorn.getFullYear() + 80);

    updateDisplay();
}

function updateDisplay() {
    var display = setInterval(function() {
        var dateNow = new Date();

        // Calculate seconds lived
        let dif = Math.abs(dateNow.getTime() - dateBorn.getTime()) / 1000;

        // Calculate seconds left
        let dif2 = Math.abs(dateDepart.getTime() - dateNow.getTime()) / 1000;

        // Calculate total lifespan in seconds
        let totalLifeSpan = Math.abs(dateDepart.getTime() - dateBorn.getTime()) / 1000;

        // Calculate percentage lived
        let percent = ((dif / totalLifeSpan) * 100).toFixed(4);

        // Update the DOM
        secondsLived.textContent = Math.floor(dif).toLocaleString();
        secondsLeft.textContent = Math.floor(dif2).toLocaleString();
        percentLived.textContent = percent + "%";
    }, 1000);
}