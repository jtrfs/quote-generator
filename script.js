const newQuote = () => {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
};

newQuote();
