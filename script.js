const quoteElement = document.getElementById("quote");

function newQuote() {
    let randomIndex = Math.floor(Math.random() * quoteList.length);
    const selectedQuote = quoteList[randomIndex]
    quoteElement.innerText = selectedQuote;
}

const quoteList = [
    "Be yourself; everyone else is already taken. -Oscar Wilde",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "That's one small step for a man, one gian leap for mankind. -Neil Armstrong",
    "Tot thine own self be true. -William Shakespeare",
    "You miss 100% of the shots you don't take. -Wayne Gretzky",
    "That which does not kill us makes us stronger. -Friedrich Nietzsche"
];