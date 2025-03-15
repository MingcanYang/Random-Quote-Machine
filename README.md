# Random Quote Machine
Solution Link: https://randomquotemachine-mingcanyang.netlify.app/ <br /><br />
![chrome-capture-2025-3-16](https://github.com/user-attachments/assets/62562803-9dfa-46e3-85a5-c5ef08409491)<br /><br />
This is a React + jQuery-based random quote generator that meets all the user stories required by the FreeCodeCamp Random Quote Machine project. Clicking the New Quote button fetches a new quote, while also changing the background and button colors. You can also share the current quote via Twitter and Tumblr.

## Features
1.	Random Quote Retrieval<br />
	•	Fetches a set of quotes from a Camperbot Gist (quotes.json) using jQuery, then randomly displays one.
2.	Background & Button Color Changes<br />
	•	Each time you click New Quote, the background color, text color, and button colors change, with a smooth transition effect.
3.	Fade-in Animation<br />
	•	Uses jQuery to change the text opacity, creating a fade-out/fade-in effect when quotes are updated.
4.	Social Sharing<br />
	•	Click the Twitter button to share the current quote on Twitter.<br />
	•	Click the Tumblr button (optional) to share the current quote on Tumblr.
5.	Meets FreeCodeCamp Requirements<br />
	•	Includes all the required elements and functionality for the Random Quote Machine tests.

## Tech Stack
1.	React (Create React App)
2.	jQuery (AJAX requests for random quotes and handling fade-in animations)
3.	CSS (CSS transitions and custom styling)
4.	Font Awesome (optional, for social icons)

## Testing
1.	Include the test script in your public/index.html (or add it via your browser console):<br />
`<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>`  
2.	Open the app in your browser, click on the test menu in the top-right corner, choose Random Quote Machine, and run the tests.
