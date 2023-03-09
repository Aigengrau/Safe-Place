import React, { useState, useEffect } from "react";

function Quote() {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    getQuote();

    const interval = setInterval(() => {
      getQuote();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  function getQuote() {
    const script = document.createElement("script");
    script.src =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=parseQuote";
    document.body.appendChild(script);
  }

  window.parseQuote = (response) => {
    setQuoteText(response.quoteText);
    setQuoteAuthor(response.quoteAuthor);
  };

  return (
    <div className="quote">
      <div className="quote-text">{quoteText}</div>
      <div className="quote-author">{quoteAuthor}</div>
    </div>
  );
}

export default Quote;
