/* 
Content Replacement:
TODO: When a user clicks on an item in the sidebar, change the content on the section in the main content area.
*/

/* 
Style Alteration:
Add a button that when clicked, changes the color of the page (e.g. background color, text color).
*/
const colorSchemeToggle = document.getElementById('checkbox');
const toggleSwitch = document.querySelector('.ball');

window.addEventListener('DOMContentLoaded', () => {
    let colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (colorScheme === 'dark') {
        colorSchemeToggle.checked = true;
        toggleSwitch.style.transform = 'translate(100%)';
    }
    loadColorScheme(colorScheme);

    // loadColorScheme(getCurrentColorScheme());
})

colorSchemeToggle.addEventListener('change', function () {
    let colorScheme = getCurrentColorScheme();
    if (this.checked) {
        // If checked, apply dark mode
        colorScheme = 'dark';
        toggleSwitch.style.transform = 'translate(100%)';
    } else {
        // If not checked, remove dark mode
        colorScheme = 'light';
        toggleSwitch.style.transform = 'translate(0%)';
    }
    localStorage.setItem('emmanuel.colorScheme', `${colorScheme}`);
    console.log(localStorage.getItem('emmanuel.colorScheme'));
    loadColorScheme(colorScheme);
});

function getCurrentColorScheme() {
    let colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.getItem('emmanuel.colorScheme') ? colorScheme = localStorage.getItem('emmanuel.colorScheme') : null;
    return colorScheme;
}

function loadColorScheme(colorScheme) {
    const root = document.querySelector(':root');
    root.setAttribute('color-scheme', `${colorScheme}`);
}

/* 
Element Creation and Deletion:
TODO: Allow the user to add new items to the sidebar list and remove existing items.
*/

/* 
Event Handling:
TODO: Display a pop-up message when a user hovers the header.
*/
