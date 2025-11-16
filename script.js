const quoteElement = document.getElementById("quote");

function newQuote() {
    let randomIndex = Math.floor(Math.random() * quoteList.length);
    const selectedQuote = quoteList[randomIndex]
    quoteElement.innerHTML = selectedQuote;
}

const quoteList = [
    "Be yourself; everyone else is already taken. <br> <span class='author'> -Oscar Wilde </span>",

    "The only way to do great work is to love what you do. <br> <span class='author'>-Steve Jobs</span>",

    "That's one small step for a man, one gian leap for mankind. <br> <span class='author'>-Neil Armstrong</span>",

    "Tot thine own self be true. <br> <span class='author'>-William Shakespeare</span>",

    "You miss 100% of the shots you don't take. <span class='author'><br> -Wayne Gretzky</span>",
    
    "That which does not kill us makes us stronger. <span class='author'><br> -Friedrich Nietzsche</span>"
];