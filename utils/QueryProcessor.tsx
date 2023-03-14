export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return "2-ez";
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    const queryArray = query.toLowerCase().split(" ");
    const firstNumber = parseInt(queryArray[2]);
    const secondNumber = parseInt(queryArray[4]);
    return (firstNumber + secondNumber).toString();
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied")) {
    const queryArray = query.toLowerCase().split(" ");
    const firstNumber = parseInt(queryArray[2]);
    const secondNumber = parseInt(queryArray[5]);
    return (firstNumber * secondNumber).toString();
  }

  if (query.toLowerCase().includes("which of the following numbers") && query.toLowerCase().includes("largest")) {
    const queryArray = query.toLowerCase().split(" ");
    let firstNumber = parseInt(queryArray[8].substring(0, queryArray[8].length - 1));
    let secondNumber = parseInt(queryArray[9].substring(0, queryArray[9].length - 1));
    let thirdNumber = parseInt(queryArray[10].substring(0, queryArray[10].length - 1));
    return Math.max(firstNumber, secondNumber, thirdNumber).toString();
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const queryArray = query.toLowerCase().split(" ");
    for (let numberIdx = 12; numberIdx < queryArray.length; numberIdx++) {
      let number = parseInt(queryArray[numberIdx].substring(0, queryArray[numberIdx].length - 1));
      if (Math.sqrt(number) % 1 === 0 && Math.cbrt(number) % 1 === 0) {
        return number.toString();
      }
    }
  }

  // Which of the following numbers are primes: 53, 24, 22, 26, 2?
  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    const queryArray = query.toLowerCase().split(" ");
    for (let numberIdx = 7; numberIdx < queryArray.length; numberIdx++) {
      let number = parseInt(queryArray[numberIdx].substring(0, queryArray[numberIdx].length - 1));
      if (isPrime(number)) {
        return number.toString();
      }
    }
  }

  return "";
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
