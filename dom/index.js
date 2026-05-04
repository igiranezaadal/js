

// ### Tab switcher with data attributes

// **Task:**

// Build a simple tab switcher UI with three tabs and three content panels.

// **Structure:**

// - A container with three tab buttons: “Tab 1”, “Tab 2”, “Tab 3”.
// - Three `<div>` panels, each containing some text (e.g., “Content for Tab 1” etc.).
// - Only one panel is visible at a time; the others are hidden.
// - The currently active tab is highlighted (e.g., a CSS class `active`).

// **Behaviour:**

// - Use a **single** click listener on the tab container (event delegation).
// - Link buttons to panels using `data‑*` attributes (e.g., `data-tab="1"` on button, `data-panel="1"` on panel).
// - When a tab button is clicked, show the corresponding panel and hide the others, and set the `active` class only on the clicked button.

let button1 = document.getElementById('b1')
let button2 = document.getElementById('b2')
let button3 = document.getElementById('b3')

let div1 = document.getElementById('d1')
let div2 = document.getElementById('d2')
let div3 = document.getElementById('d3')

button1.addEventListener("click", () => {
    div1.style.display = 'block'
    div2.style.display = 'none'
    div3.style.display = 'none'
    //the problem was on style('display:none')
})

button2.addEventListener("click", () => {
    div1.style.display = 'none'
    div2.style.display = 'block'
    div3.style.display = 'none'
})

button3.addEventListener("click", () => {
    div1.style.display = 'none'
    div2.style.display = 'none'
    div3.style.display = 'block'
})