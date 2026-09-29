function calculateArea (length, width) {
    return length * width;
}

console.log(calculateArea (13,25));

function isPrime(number) {
if (number <= 1 ){
    return false;
}

for (let i = 2; i < number; i++) {
    if (number % i === 0){
        return false;
    }    
}

    return true;
}

console.log(isPrime(7));
console.log(isPrime(4));
console.log(isPrime(1));

function gradeCalculator(grade){
    if (grade >= 90 ) {
      console.log(`grade : A`);  
    } else if (grade >= 80) {
      console.log(`grade : B`);     
    } else if (grade >= 70){
      console.log(`grade : C`);  
    } else if (grade >=60) {
        console.log(`grade : D`);
    } else {
        console.log(`grade : F`);
    }
}

console.log(gradeCalculator(65));
console.log(gradeCalculator(45));
console.log(gradeCalculator(99));

function isLeapYear(year) {
    if ((year % 4 ===0 && year % 100 !==0)|| year % 400 ===0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2540));
console.log(isLeapYear(2400));
console.log(isLeapYear(2567));