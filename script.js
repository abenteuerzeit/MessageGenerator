const fs = require('fs');

function newQuote(){
    const q = getRandomQuote();
    console.log(q);
    return document.getElementById("quoteDisplay").innerHTML = `<p class='quote' id=${q.id};> ${q.quote} </p> <p class='author'> ${q.author} </p> <p class='role'> ${q.about} </p>`;
}

const newQuote = newQuote();

function loadQuotes() {
    const filepath = "./src/quotes.txt";
    const data = fs.readFileSync(filepath, "utf8").split('\r\n');
    const quotes = [];
    for (let i = 0; i < data.length; i++) {
        const quoteData = data[i].split("\n");
        const element = quoteData[0].split("|");
        const quote = {
            id: element[0],
            author: element[1],
            about: element[2],
            quote: element[3],
            toString() {
                return `"${this.quote.replace(/<br\s*[\/]?>/gi, " ")}"\n\t ${this.author}, ${this.about}`;
            },
            updateQuote(newQuote) {
                this.quote = newQuote;
            }
        }
        if (quote.id !== "") {
            quotes.push(quote);
        }
    }
    return quotes;
}

function getRandomQuote() {
    const QUOTES = loadQuotes();
    const index = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[index];
}



