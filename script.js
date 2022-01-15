// html elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// SHOW LOADING
const loading = () => {
  quoteContainer.hidden = true;
  loader.hidden = false;
};

// HIDE LOADING
const complete = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

// GET QUOTES FROM API ... only once at the start
const getQuotes = async () => {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    // catching error here, but not in this project
  }
};

// GET A NEW QUOTE
const newQuote = () => {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  complete();
};

// TWEET QUOTE
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
  console.log("hello");
};

// EVENT LISTENERS
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// ON LOAD - APPLICATION STARTS/IS LOADED...
getQuotes();
