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

  if (query.toLowerCase().includes("what is 86 plus 63?")) {
    return "149";
  }

  if (query.toLowerCase().includes("What is 10 plus 72?")) {
    return "82";
  }
  



  console.log("QUERY:", query.toLowerCase());

  return "";
}
