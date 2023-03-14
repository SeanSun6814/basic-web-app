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

  if (query.toLowerCase().includes("which of the following numbers") && query.toLowerCase().includes("largest")) {
    const queryArray = query.toLowerCase().split(" ");
    let firstNumber = parseInt(queryArray[8].substring(0, queryArray[8].length - 1));
    let secondNumber = parseInt(queryArray[9].substring(0, queryArray[9].length - 1));
    let thirdNumber = parseInt(queryArray[10].substring(0, queryArray[10].length - 1));
    return Math.max(firstNumber, secondNumber, thirdNumber).toString();
  }

  console.log("QUERY:", query.toLowerCase());

  return "";
}
