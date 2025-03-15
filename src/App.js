import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';

function App() {
  // Optional color array
  const colors = [
    "#16a085", "#27ae60", "#2c3e50", "#f39c12",
    "#e74c3c", "#9b59b6", "#FB6964", "#342224",
    "#472E32", "#BDBB99", "#77B1A9", "#73A857"
  ];

  // Store All Quotes
  const [quotes, setQuotes] = useState([]);
  // Quotes currently displayed
  const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' });
  // Current color for background and button colors
  const [currentColor, setCurrentColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

  // Getting Quote Data on Component Load
  useEffect(() => {
    $.ajax({
      url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      method: 'GET',
      success: function (data) {
        const jsonData = JSON.parse(data);
        setQuotes(jsonData.quotes);
        const randomIndex = Math.floor(Math.random() * jsonData.quotes.length);
        setCurrentQuote(jsonData.quotes[randomIndex]);
      },
      error: function (err) {
        console.error('获取引用时出错：', err);
      }
    });
  }, []);

  // Get a random quote from the quotes array
  const getRandomQuote = () => {
    if (quotes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // Updates references and colors when buttons are clicked
  const fetchNewQuote = () => {
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (colors.length > 1 && newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    setCurrentColor(newColor);
  
    let newQuote = getRandomQuote();
    while (quotes.length > 1 && newQuote === currentQuote) {
      newQuote = getRandomQuote();
    }
    setCurrentQuote(newQuote);
    // set the text transparency to 0, and then use the animation to fade to 1, the animation duration of 1s
    $('#text, #author').css('opacity', 0).animate({ opacity: 1 }, 1000);
  };

  // Constructing a Twitter share link
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${currentQuote.quote}" - ${currentQuote.author}`
  )}`;

  // Constructing a Tumblr share link
  const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
    currentQuote.author
  )}&content=${encodeURIComponent(currentQuote.quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

  return (
    // The outermost container background color inline style sets the CSS transition effect
    // The inner container background color and text color are set by the currentColor state
    // The button background color is set by the currentColor state
    // The tweet and tumblr buttons are set by the currentColor state
    // The quote and author text color is set by the currentColor state
    // The quote and author text opacity is set to 0, and then animated to 1, with a duration of 1s
    // The tweet and tumblr buttons are set by the currentColor state
    <div className="App" style={{ backgroundColor: currentColor, transition: 'background-color 1s ease' }}>
      <div id="quote-box" style={{ color: currentColor }}>
        <div id="text">“{currentQuote.quote}”</div>
        <div id="author">- {currentQuote.author}</div>
        <div className="buttons">
          <button 
            id="new-quote" 
            onClick={fetchNewQuote} 
            style={{ backgroundColor: currentColor }}
          >
            New Quote
          </button>
          <a
            id="tweet-quote"
            className="social-btn"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: currentColor }}
            title="Tweet this quote!"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            id="tumblr-quote"
            className="social-btn"
            href={tumblrUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: currentColor }}
            title="Post this quote on Tumblr!"
          >
            <i className="fab fa-tumblr"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
