const quoteElement = document.getElementById("quote");
let lastIndex = -1;
let prevIndex = -1;
const likedQuotes = JSON.parse(localStorage.getItem("likedQuotes")) || [];

window.onload = () => {

if (document.getElementById("quote")) {
        newQuote();
    }

    if (document.getElementById("likedQuotesList")) {
        displayLikedQuotes();
    }

}

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "ArrowRight") {
        newQuote();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        if (prevIndex === -1) return;
        quoteElement.classList.add("hide");

        setTimeout(() => {
            const selectedQuote = quoteList[prevIndex];
            quoteElement.innerHTML = selectedQuote;
            
            updateLikeButtonState();

            const tmp = lastIndex;
            lastIndex = prevIndex;
            prevIndex = tmp;

            
            quoteElement.classList.remove("hide");
        }, 1000);
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
        
        updateLikeButtonState();
        quoteElement.classList.remove("hide");
        
        prevIndex = lastIndex;
        lastIndex = randomIndex;
    }, 1000);
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const heading = document.querySelector("h1");
    if (heading) heading.classList.toggle("dark-mode");
    if (quoteElement) quoteElement.classList.toggle("dark-mode");
    document.getElementById("modeToggle").classList.toggle("dark-mode");
    const newQuoteBtn = document.getElementById("newQuoteButton");
    if (newQuoteBtn) newQuoteBtn.classList.toggle("dark-mode");
    const likeBtn = document.getElementById("likeButton");
    if (likeBtn) likeBtn.classList.toggle("dark-mode");
    const likedBtn = document.getElementById("likedQuotesButton");
    if (likedBtn) likedBtn.classList.toggle("dark-mode");
    const homeBtn = document.getElementById("homeButton");
    if (homeBtn) homeBtn.classList.toggle("dark-mode");
    const clearLikedBtn = document.getElementById("clearLikedQuotes");
    if (clearLikedBtn) clearLikedBtn.classList.toggle("dark-mode");
    const likedQuotesList = document.getElementById("likedQuotesList");
    if (likedQuotesList) likedQuotesList.classList.toggle("dark-mode");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleMode();
}

function likeQuote() {
    const likeButton = document.getElementById("likeButton");
    if (likeButton.classList.contains("liked")) {
        likeButton.classList.remove("liked");
        likeButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    } else {
        likeButton.classList.add("liked");
        likeButton.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    }
    saveLikedQuotes();
}

function saveLikedQuotes() {
    const currentQuote = quoteElement?.innerHTML || "";
    const likeButton = document.getElementById("likeButton");
    if (likeButton && likeButton.classList.contains("liked")) {
        if (!likedQuotes.includes(currentQuote)) {
            likedQuotes.push(currentQuote);
        }
    } else {
        const index = likedQuotes.indexOf(currentQuote);
        if (index > -1) {
            likedQuotes.splice(index, 1);
        }
    }
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
}


function isQuoteLiked(quote) {
    return likedQuotes.includes(quote);
}


function updateLikeButtonState() {
    const likeButton = document.getElementById("likeButton");
    if (!likeButton || !quoteElement) return;
    const currentQuote = quoteElement.innerHTML || "";
    if (isQuoteLiked(currentQuote)) {
        likeButton.classList.add("liked");
        likeButton.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
        likeButton.classList.remove("liked");
        likeButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
}

function displayLikedQuotes() {
    document.getElementById("likedQuotesList").innerHTML = "";
    if (likedQuotes.length === 0) {
        document.getElementById("likedQuotesList").innerHTML = "<li>No liked quotes yet.</li>";
        return;
    }
    likedQuotes.forEach(quote => {
        const li = document.createElement("li");
        li.innerHTML = quote;
        document.getElementById("likedQuotesList").appendChild(li);
    });
}

function clearLikedQuotes() {
    likedQuotes.length = 0;
    localStorage.removeItem("likedQuotes");
    if (document.getElementById("likedQuotesList")) {
        displayLikedQuotes();
    }
    updateLikeButtonState();
}


const authorsList = [
    {id: 1, name: "Oscar Wilde"},
    {id: 2, name: "Steve Jobs"},
    {id: 3, name: "Neil Armstrong"},
    {id: 4, name: "William Shakespeare"},
    {id: 5, name: "Wayne Gretzky"},
    {id: 6, name: "Friedrich Nietzsche"},
    {id: 7, name: "Theodore Roosevelt"},
    {id: 8, name: "Dorothy Gale"},
    {id: 9, name: "Franklin D. Roosevelt"},
    {id: 10, name: "Frank Zappa"},
    {id: 11, name: "Mae West"},
    {id: 12, name: "Mahatma Gandhi"},
    {id: 13, name: "Maya Angelou"},
    {id: 14, name: "Sherlock Holmes*"},
    {id: 15, name: "Rene Descartes"},
    {id: 16, name: "Terminator*"},
    {id: 17, name: "Albert Einstein"},
    {id: 18, name: "Star Wars*"},
    {id: 19, name: "J.R.R. Tolkien"},
    {id: 20, name: "The Bible*"},
    {id: 21, name: "Aesop*"},
    {id: 22, name: "Martin Luther King Jr."},
    {id: 23, name: "Horace"},
    {id: 24, name: "Francis Bacon"},
    {id: 25, name: "Buzz Lightyear*"},
    {id: 26, name: "Henry Longfellow"},
    {id: 27, name: "John A. Shedd"},
    {id: 28, name: "The Highwayman*(OTGW)"},
    {id: 29, name: "Arthur C. Clarke"},
    {id: 30, name: "George Orwell"},

];

const quoteList = [
    {text:"Be yourself; everyone else is already taken.", authorId: 1},
    {text:"The only way to do great work is to love what you do.", authorId: 2},
    {text:"That's one small step for a man, one giant leap for mankind.", authorId: 3},
    {text:"To thine own self be true.", authorId: 4},
    {text:"You miss 100% of the shots you don't take.", authorId: 5},
    {text:"That which does not kill us makes us stronger.", authorId: 6},
    {text:"Believe you can and you're halfway there.", authorId: 7},
    {text:"There's no place like home.", authorId: 8},
    {text:"The only thing we have to fear is fear itself.", authorId: 9},
    {text:"So many books, so little time.", authorId: 10},
    {text:"You only live once, but if you do it right, once is enough.", authorId: 11},
    {text:"Be the change that you wish to see in the world.", authorId: 12},
    {text:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", authorId: 13},
    {text:"All that glitters is not gold.", authorId: 4},
    {text:"Elementary, my dear Watson.", authorId: 14},
    {text:"I think, therefore I am.", authorId: 15},
    {text:"I'll be back.", authorId: 16},
    {text:"Life is like riding a bicycle. To keep your balance, you must keep moving.", authorId: 17},
    {text:"May the Force be with you.", authorId: 18},
    {text:"Not all those who wander are lost.", authorId: 19},
    {text:"Parting is such sweet sorrow.", authorId: 4},
    {text:"Speak softly and carry a big stick; you will go far.", authorId: 7},
    {text:"The truth will set you free.", authorId: 20},
    {text:"To be, or not to be, that is the question.", authorId: 4},
    {text:"United we stand, divided we fall.", authorId: 21},
    {text:"I have a dream.", authorId: 22},
    {text:"Carpe diem.", authorId: 23},
    {text:"Knowledge is power.", authorId: 24},
    {text:"To infinity and beyond!", authorId: 25},
    {text:"We judge ourselves by what we feel capable of doing, while others judge us by what we have already done.", authorId: 26},
    {text:"A ship in harbor is safe, but that is not what ships are built for.", authorId: 27},
    {text:"I'm the Highwayman.", authorId: 28},
    {text:"Any sufficiently advanced technology is indistinguishable from magic.", authorId: 29},
    {text:"Big Brother is watching you.", authorId: 30},


].map(quote => {
    const author = authorsList.find(a => a.id === quote.authorId);
    return `${quote.text} <br> <span class='author'>-${author.name}</span>`;
});