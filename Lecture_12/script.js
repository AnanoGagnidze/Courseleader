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
    let fee = "";

    if (days) {
        fee = (days <=3) ? "You have no late fee" : "Your late fee is";
        document.getElementById("fee").innerHTML = fee + " for" + days + " days";

    }
    
}