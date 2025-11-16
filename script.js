const quoteElement = document.getElementById("quote");
let lastIndex = -1;

window.onload = () => {
    newQuote();
}

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "ArrowRight") {
        newQuote();
    }
});

function newQuote() {
    quoteElement.classList.add("hide");
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * quoteList.length);
        while (randomIndex === lastIndex) {
            randomIndex = Math.floor(Math.random() * quoteList.length);
        }
        const selectedQuote = quoteList[randomIndex];
        quoteElement.innerHTML = selectedQuote;
        quoteElement.classList.remove("hide");
        lastIndex = randomIndex;
    }, 1000);
}



const quoteList = [
    "Be yourself; everyone else is already taken. <span class='author'> <br> -Oscar Wilde </span>",

    "The only way to do great work is to love what you do. <br> <span class='author'>-Steve Jobs</span>",

    "That's one small step for a man, one giant leap for mankind. <br> <span class='author'>-Neil Armstrong</span>",

    "To thine own self be true. <br> <span class='author'>-William Shakespeare</span>",

    "You miss 100% of the shots you don't take. <span class='author'> <br> -Wayne Gretzky</span>",
    
    "That which does not kill us makes us stronger. <span class='author'> <br> -Friedrich Nietzsche</span>",

    "Believe you can and you're halfway there. <span class='author'> <br> -Theodore Roosevelt</span>",

    "There's no place like home. <span class='author'> <br> -Dorothy Gale</span>",

    "The only thing we have to fear is fear itself. <span class='author'> <br> -Franklin D. Roosevelt</span>",

    "So many books, so little time. <span class='author'> <br> -Frank Zappa</span>",

    "You only live once, but if you do it right, once is enough. <span class='author'> <br> -Mae West</span>",

    "Be the change that you wish to see in the world. <span class='author'> <br> -Mahatma Gandhi</span>",

    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. <span class='author'> <br> -Maya Angelou</span>",
];