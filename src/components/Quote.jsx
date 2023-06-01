import React, { useState, useEffect } from "react";
import "../styles/Quote.css";

function Quote() {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [animationClass, setAnimationClass] = useState("quote-show");

  useEffect(() => {
    getQuote();

    const interval = setInterval(() => {
      setAnimationClass("quote-hide");
      setTimeout(() => {
        getQuote();
        setAnimationClass("quote-show");
      }, 1000);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  function getQuote() {
    const script = document.createElement("script");
    script.src =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote";
    document.body.appendChild(script);
  }

  window.parseQuote = (response) => {
    setQuoteText(response.quoteText);
    setQuoteAuthor(response.quoteAuthor);
  };

  return (
    <div className={`quote ${animationClass}`}>
      <div className='quote-text'>{quoteText}</div>
      <div className='quote-author'>{quoteAuthor}</div>
    </div>
  );
}

export default Quote;
