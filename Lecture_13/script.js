function calculateArea (length, width) {
    return length * width;
}

console.log(calculateArea (4, 12));

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function gradeCalculator(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score >= 0 && score <= 59) {
    return 'F';
  } else {
    return 'not correct';
  }
}