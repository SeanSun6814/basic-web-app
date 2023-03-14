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

  console.log("QUERY:", query.toLowerCase());

  return "";
}
