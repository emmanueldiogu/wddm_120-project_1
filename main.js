/* 
Listen for windows load 
call the necessary functions
 */
window.addEventListener('DOMContentLoaded', () => {
    popover();
    let colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (colorScheme === 'dark') {
        colorSchemeToggle.checked = true;
        toggleSwitch.style.transform = 'translate(100%)';
    }
    loadColorScheme(colorScheme);
});

/* 
Content Replacement:
When a user clicks on an item in the sidebar, change the content on the section in the main content area.
*/
const cityList = document.getElementById('side-list');
const currentCity = document.getElementById('current-city');
// Listen for click
cityList.addEventListener('click', function (event) {
    if (event.target.tagName === "LI") {
        let element = getTextWithoutChildren(event.target);
        currentCity.textContent = element;
    }
    if (event.target.tagName == "BUTTON") {
        if (event.target.parentElement.parentElement.childElementCount > 1) {
            event.target.parentElement.remove();
            currentCity.textContent = "Current City"
        }
    }
});

// function to remove child elements
function getTextWithoutChildren(element) {
    let text = '';
    for (let node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            text += node.textContent;
        }
    }
    return text.trim();
}

/* 
Style Alteration:
Add a button that when clicked, changes the color of the page (e.g. background color, text color).
*/
const colorSchemeToggle = document.getElementById('checkbox');
const toggleSwitch = document.querySelector('.ball');

colorSchemeToggle.addEventListener('change', function () {
    let colorScheme = getCurrentColorScheme();
    if (this.checked) {
        // If checked, apply dark and translate 100%
        colorScheme = 'dark';
        toggleSwitch.style.transform = 'translate(100%)';
    } else {
        // If not checked, apply light and translate 0%
        colorScheme = 'light';
        toggleSwitch.style.transform = 'translate(0%)';
    }
    localStorage.setItem('emmanuel.colorScheme', `${colorScheme}`);
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
Allow the user to add new items to the sidebar list and remove existing items.
*/
const cityInput = document.getElementById('city');
const inputBtn = document.getElementById('add-city');

// Listen for click of the add button
inputBtn.addEventListener('click', () => {
    if (cityInput.value.length > 1) {
        addSidebarList(cityInput.value);
        cityInput.value = '';
    }
})

// Listen for keypress event of the enter key
cityInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        if (cityInput.value.length > 1) {
            addSidebarList(cityInput.value);
            cityInput.value = '';
        }
    }
});

/* 
    Function to append city name, 
    it takes in the city name as a parameter
*/
const addSidebarList = function (city) {
    const li = document.createElement('li');
    var textNode = document.createTextNode(city); // Add your text here


    // Create the button element
    const button = document.createElement('button');
    button.textContent = 'x'; // Set the button text
    li.appendChild(textNode);
    li.appendChild(button);
    cityList.appendChild(li);
};

const resetInput = () => {

}

/* 
Event Handling:
Display a pop-up message when a user hovers the header.
*/
const popover = function () {
    var popoverElements = document.querySelectorAll('.popover');

    popoverElements.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            var content = this.getAttribute('data-popover-content');
            var popoverDiv = document.createElement('div');
            popoverDiv.classList.add('popover-content');
            popoverDiv.textContent = content;
            this.appendChild(popoverDiv);
        });

        elem.addEventListener('mouseleave', function () {
            this.removeChild(this.querySelector('.popover-content'));
        });
    });
};
