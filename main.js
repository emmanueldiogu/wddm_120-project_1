import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'));

// Assignment starts here

/* 
Content Replacement:
TODO: When a user clicks on an item in the sidebar, change the content on the section in the main content area.
*/
/* 
Style Alteration:
TODO: Add a button that when clicked, changes the color of the page (e.g. background color, text color).
*/
/* 
Element Creation and Deletion:
TODO: Allow the user to add new items to the sidebar list and remove existing items.
*/
/* 
Event Handling:
TODO: Display a pop-up message when a user hovers the header.
*/