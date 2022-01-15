let apiQuotes = [];

const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
};

// GET QUOTES FROM API
const getQuotes = async () => {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catching error here, but not in this project
  }
};

// ON LOAD - APPLICATION STARTS/IS LOADED...
getQuotes();
console.log(apiQuotes);
