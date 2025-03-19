document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");
    const exercise1Content = document.getElementById("exercise1Content");
    const exercise2Content = document.getElementById("exercise2Content");
    const exercise1 = document.getElementById("exercise1");
    const exercise2 = document.getElementById("exercise2");
    const thermometer = document.getElementById("thermometer");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    exercise1.addEventListener("click", function () {
        exercise1Content.style.display = "block";
        exercise2Content.style.display = "none";
        thermometer.style.width = "0";
    });

    exercise2.addEventListener("click", function () {
        exercise2Content.style.display = "block";
        exercise1Content.style.display = "none";
    });
});

function compareAges() {
    const name1 = document.getElementById("name1").value;
    const age1 = parseInt(document.getElementById("age1").value);
    const name2 = document.getElementById("name2").value;
    const age2 = parseInt(document.getElementById("age2").value);
    const name3 = document.getElementById("name3").value;
    const age3 = parseInt(document.getElementById("age3").value);
    const result = document.getElementById("result");

    if (isNaN(age1) || isNaN(age2) || isNaN(age3)) {
        result.innerText = "Please enter valid ages.";
    } else {
        const ages = [age1, age2, age3];
        const names = [name1, name2, name3];
        const sortedAges = ages.slice().sort((a, b) => b - a);
        const sortedNames = [];

        for (const age of sortedAges) {
            const index = ages.indexOf(age);
            sortedNames.push(names[index]);
            ages[index] = -1; 
        }

        result.innerText = "Oldest to Youngest: " + sortedNames.join(", ");
    }
}

function updateThermometer() {
    const donations = parseInt(document.getElementById("donations").value);
    const thermometer = document.getElementById("thermometer");

    if (!isNaN(donations)) {
        const goal = 10000;
        const percentage = Math.min((donations / goal) * 100, 100); 
        thermometer.style.width = percentage + "%";
    }
}

