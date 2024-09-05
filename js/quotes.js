const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts",
        author: "Winston Churchill",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        quote: "A great man is alwaus willing to be little.",
        author: "R. W. Emerson",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;