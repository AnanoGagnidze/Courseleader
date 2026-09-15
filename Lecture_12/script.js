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
    let order = Number(document.getElementById("order").value)
    let discount = 0

    if (order) {
        if (order >= 100 && order <= 200) {
            discount = order * 0.1;
        } else if (order > 200) {
            discount = order * 0.15;
        }

        document.getElementById("discount").innerHTML = "Your Discount is " + discount + "$";
    }
}