function checkUserAge() {
    let age = Number(document.getElementById("age").value);
    let eligible = "";

    if (age) {
        eligible = (age < 18) ? "You are not eligible" : "You are eligible";
        document.getElementById("demo").innerHTML = eligible + " to drive";
    } else {
        document.getElementById("demo").innerHTML = "Please enter a valid age.";
    }
}

function calculateLateFee() {
    let days = Number(document.getElementById("days").value);
    let fee = 0;

    if (days) {
        if (days >=1 && days <=3) {
            fee = days * 1;
        } else if (days >=4 && days <=7) {
            fee = days * 2;
        } else {
            fee = days * 5;
        }

        document.getElementById("fee").innerHTML = "Your fee is " + fee + "$";

    }    
}

function calculateElectricityBill() {
    let units = Number(document.getElementById("units").value);
    let bill = 0;

    if (units) {
        if (units >=1 && units <=100) {
            bill = units * 0.5;
        } else if (units >=101 && units <=200) {
            bill = units * 0.75;
        } else  {
            bill = units * 1;
        }

        document.getElementById("bill").innerHTML = "Your Electricity Bill is " + bill + "$";
    }
}

function applyDiscount() {
    let order = Number(document.getElementById("order").value);
    let discount = 0

    if (order) {
        if (order >= 1 && order <=100 ) {
            discount = order * 0;
        } else if (order > 100 && order <=200) {
            discount = order * 0.1;
        } else {
            discount = order * 0.15;
        }

        document.getElementById("discount").innerHTML = "Your Discount is " + discount + "$";
    }
}

function calculateTax() {
    let income = Number(document.getElementById("income").value);
    let tax = 0

    if (income) {
        if (income >=1 && income <10000) {
            tax = income * 0.1;
        } else if (income >=10000 && income <=50000) {
            tax = income * 0.2;
        } else {
            tax = income * 0.3;
        }

        document.getElementById("tax").innerHTML = "Your tax is " + tax + "$";
    }
}


function isStoreOpen() {
    if (hour >=9 && hour <=21) {
        store = "is open"
    } else {
        store = "is closed"
    }

    document.getElementById("store").innerHTML = "Store " + store
}

function approveCarLoan() {
    if (creditScore > 700 && annualIncome > 50000) {
        document.getElementById("loan").innerHTML = "Loan Approved";
    } else {
        document.getElementById("loan").innerHTML = "Loan Denied";
    }
}

function checkInternetSpeed() {
    if (speed) {
        if (speed > 1 && speed < 10) {
            result = "Poor"
        } else if (speed > 10 && speed < 25) {
            result = "Average"
        } else {
            result = "Good"
        }

        document.getElementById("result").innerHTML = "internet speed is " + result;
    }                
}

function calculateTicketPrice() {
    let ageInput = document.getElementById("ageInput").value;
    let isWeekend = document.getElementById("weekend").checked;
    let ticketPrice = 0

    if (ageInput) {
        if (ageInput >= 18 && ageInput <= 60) {
            ticketPrice = 12
        } else {
            ticketPrice = 8
        }

        if (isWeekend) {
            ticketPrice = ticketPrice + 2
        }

        document.getElementById("ticketPrice").innerHTML = "Ticket price is " + ticketPrice + "$"
    }

}

function checkFitnessLevel() {
    let pushUps = document.getElementById("pushUps").value;
    let check = 0

    if (pushUps) {
        if (pushUps >=1 && pushUps < 15) {
            check = "Poor";
        } else if (pushUps >= 15 && pushUps <=29) {
            check = "Average";
        } else if (pushUps >= 30 && pushUps <= 49) {
            check = "Good";
        } else {
            check = "Excellent"
        }    
        
        document.getElementById("check").innerHTML = "Your Fitness Level is " + check;
    }
}