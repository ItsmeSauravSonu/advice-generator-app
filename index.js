"use strict";
let quoteId = document.getElementById('quote-id');
let adviceQuote = document.getElementById('advice-id');

const Quotes = [
    {
        id: 111,
        quote: "You're not as fat as you think you are."
    },
    {
        id: 188,
        quote: "Measure twice, cut once."
    },
    {
        id: 126,
        quote: "Taking photos with tablet devices looks weird."
    },
    {
        id: 134,
        quote: "The person who never made a mistake never made anything."
    },
    {
        id: 201,
        quote: "Don't burn bridges."
    }
];

const url = 'https://api.adviceslip.com/advice';
const getRandomAdvice = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let adviceId = data.slip.id;
            let adviceQ = data.slip.advice;

            if (adviceQ.length <= 60) {
                quoteId.innerHTML = `Advice #${adviceId}`;
                adviceQuote.innerHTML = `&#8220${adviceQ}&#8221`;
            } else {
                // Display random quote from Quotes array
                const randomIndex = Math.floor(Math.random() * Quotes.length);
                const randomQuote = Quotes[randomIndex];

                quoteId.innerHTML = `Advice #${randomQuote.id}`;
                adviceQuote.innerHTML = `&#8220${randomQuote.quote}&#8221`;
            }
        });
};

// Add event listener to the dice image
const diceImage = document.getElementById('dice');

// Function to handle both click and touch events
const handleEvent = () => {
    getRandomAdvice();
};

// Add event listeners for both click and touch events
diceImage.addEventListener('click', handleEvent);
diceImage.addEventListener('touchstart', handleEvent);