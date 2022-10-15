function newQuote() {
  const quotes = loadQuotes();
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index].quote;
  const author = quotes[index].author;
  const role = quotes[index].role;
  document.getElementById("quoteDisplay").innerHTML = `<p class='quote'> ${quote.replace(/(?:\r\n|\r|\n)/g, '<br>')} </p> <p class='author'> ${author} </p> <p class='role'> ${role} </p>`;
}

function loadQuotes() {
  return FIRST_FIVE_QUOTES;
}


const FIRST_FIVE_QUOTES = [
    {
        quote: "Art is the\ngreatest possible\nrationalization of our\ndeepest fears, joys,\nand instincts as\nhuman beings.",
        author: "Martha Mayer Erlebacher",
        role: "American painter"
    },
    {
        quote: "Art is the desire of a man to express\nhimself, to record the reactions of his\npersonality to the world he lives in.",
        author: "Amy Lowell",
        role: "American poet"
    },
    {
        quote: "I believe that if it were left to artists to choose\ntheir own labels, most would choose none.",
        author: "Ben Shahn",
        role: "Lithuanian-American artist"
    },
    {
        quote: "Let each man exercise the art he knows.",
        author: "Aristophanes",
        role: "Ancient Greek playwright"

    },
    {
        quote: "When I can no longer create anything,\nI'll be done for.",
        author: "Coco Chanel",
        role: "French fashion designer"
    }
]
