# 12 Days of JavaScript DOM Mini-Projects

## Overview
This repository contains 12 small, focused JavaScript projects, built as part of a personal challenge to solidify DOM manipulation and event handling skills. Each project was designed to be completed within a short timeframe (1-2 hours) to reinforce fundamental concepts learned during the Free Code Camp JavaScript Algorithms and Data Structures curriculum.

This challenge served as a practical application phase after completing 88 days of coding, leading up to the 100-day milestone.

## Projects
Each project is located in its own directory (e.g., day-89-counter-app/). To view a project, navigate to its directory and open the index.html file in your web browser.

### Day 89: Simple Counter App
Description: A basic web counter with buttons to increment, decrement, and reset the displayed number.

Key Concepts Practiced: document.getElementById(), element.addEventListener(), element.textContent, element.classList.add()/remove().

### Day 90: Basic To-Do List (Add Only)
Description: Allows users to input tasks and add them to a dynamic list.

Key Concepts Practiced: inputElement.value, document.createElement(), parentElement.appendChild().

### Day 91: Interactive Image Gallery (Simple Carousel)
Description: A basic image carousel with "Next" and "Previous" buttons to cycle through a predefined set of images.

Key Concepts Practiced: imageElement.src (changing image source), Arrays, managing state (current image index).

### Day 92: Background Color Changer
Description: Buttons that dynamically change the entire page's background color. Includes a random color generator.

Key Concepts Practiced: document.querySelectorAll(), document.body.style.backgroundColor, element.dataset, Math.random().

### Day 93: Simple Modal / Pop-up Window
Description: A clickable button that opens a modal overlay, which can be closed via a button or by clicking outside the modal content.

Key Concepts Practiced: element.style.display (toggling visibility), Event delegation.

### Day 94: Accordion / Collapsible Content
Description: Interactive sections of content that expand and collapse when their headers are clicked. Ensures only one section is open at a time.

Key Concepts Practiced: element.nextElementSibling, element.classList.toggle(), element.scrollHeight (for dynamic max-height transitions), Looping for state management.

### Day 95: Character Count / Word Count Tool
Description: A text area with real-time displays of character count and word count as the user types.

Key Concepts Practiced: element.addEventListener('input'), string.length, string.split(), Array.prototype.filter().

### Day 96: Digital Clock
Description: A real-time digital clock that updates every second.

Key Concepts Practiced: setInterval(), new Date() object methods (getHours, getMinutes, getSeconds), string.padStart().

### Day 97: Simple Calculator (Basic Operations)
Description: A web-based calculator capable of performing basic arithmetic operations.

Key Concepts Practiced: Event delegation, string concatenation, eval() (used for simple expression evaluation).

### Day 98: Interactive Rating Widget
Description: A row of stars where users can hover to highlight a rating and click to confirm their selection.

Key Concepts Practiced: mouseover, mouseout, click events, element.classList.add()/remove(), element.dataset.

### Day 99: Dynamic List Filter
Description: An input field that filters a predefined list of items in real-time as the user types.

Key Concepts Practiced: element.addEventListener('input'), string.includes(), element.style.display (toggling visibility).

### Day 100: Simple Light/Dark Mode Toggle
Description: A button that switches the entire page's theme between a light and dark mode.

Key Concepts Practiced: document.body.classList.toggle(), CSS custom properties (optional), localStorage (optional bonus).

## How to Run These Projects
### Clone the Repository:

Bash

git clone https://github.com/bray-hiramis/12-days-of-code.git
### Navigate to a Project Directory:

Bash

cd 12-days-of-code/day-XX-project-name/
(Replace XX-project-name with the specific day's project, e.g., day-89-counter-app)

### Open index.html:
Simply open the index.html file in your preferred web browser. You can usually do this by double-clicking the file.

## Learning Reflections
This challenge was instrumental in solidifying my understanding of:

Core DOM API methods: getElementById, querySelectorAll, createElement, appendChild, textContent, innerHTML, classList.

Event handling: addEventListener, input event, click event, mouseover, mouseout, change.

JavaScript logic: Conditional statements, loops, array methods (split, filter), string methods (toLowerCase, includes), and basic arithmetic.

Problem-solving: Breaking down larger tasks into smaller, manageable steps and debugging common issues.

While I occasionally sought hints, the primary focus was on independent problem-solving and applying theoretical knowledge in practical scenarios.

## Credits
Special thanks to Free Code Camp for providing the excellent curriculum that inspired these projects, and to my AI coding assistant, Ava, for providing targeted hints and explanations when I got stuck, facilitating a deeper understanding of the concepts.
