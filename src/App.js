import { useState } from 'react';
import './App.css';

function App() {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
];
const [randomQuote, setRandomQuote] = useState("");
const [randomAuthr, setRandomAuthor] = useState("");
const handleClick=()=>{
  const randIndex=Math.floor(Math.random()*quotes.length);
  const quot=quotes[randIndex].quote
  const author=quotes[randIndex].author
  setRandomQuote(quot)
  setRandomAuthor(author)
}

  return (
    <div>
    <div id="quote-box" class="container">
        <h1>Random Quote Machine</h1>
        <div id="quote">
        {randomQuote ? (
        <div>{randomQuote}</div>
      ) : (
        <p id="text">Click the button below to generate a random quote.</p>
      )}
      {randomAuthr?(
        <p id='author'>-{randomAuthr}</p>
      ):(
        <p id="author"></p>
      )}
        </div>
        <button id="new-quote" onClick={handleClick}>New Quote</button>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet Quote</a>
      </div>
      </div>
  );
}

export default App;
