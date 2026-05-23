# CalcPro - Advanced Web Calculator

A sleek, responsive, and feature-rich web calculator built using HTML, CSS, and Vanilla JavaScript. This project was developed as part of my internship to demonstrate DOM manipulation, event handling, and modern UI/CSS design principles.

## ✨ Features

### 🧮 Advanced Mathematical Operations
*   **Core Logic:** Handles standard arithmetic (Addition, Subtraction, Multiplication, Division).
*   **Advanced Functions:** Supports percentages (`%`), exponents (`^`), and square roots (`√`).
*   **Smart Expression Handling:** Automatically detects and closes missing brackets in user expressions before calculating.
*   **Precision Control:** Automatically rounds long floating-point numbers to 8 decimal places to prevent display overflow.
*   **Error Handling:** Gracefully handles invalid inputs, division by zero (`Infinity`), and `NaN` values by outputting a clean "Error" message instead of crashing.

### ⌨️ Full Keyboard Support
You don't need to click the buttons! The app maps physical keyboard inputs to calculator functions for a seamless user experience.

| Key / Shortcut | Function |
| :--- | :--- |
| `0`-`9`, `.`, `+`, `-`, `*`, `/` | Standard input and operators |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete the last character |
| `Escape` or `c` | Clear the display (C) |
| `r` | Insert Square Root `√(` |
| `^`, `%`, `(`, `)` | Directly mapped to respective functions |

### 🎨 Modern UI & Animations
*   **Animated Gradient Background:** Uses a continuous 15-second gradient shifting animation to keep the interface feeling dynamic.
*   **Tactile Feedback:** Incorporates a custom JavaScript-triggered `typing-pulse` effect that slightly scales the calculator and enhances the box-shadow every time a key is pressed or clicked.
*   **CSS Grid Layout:** Ensures a perfectly aligned and scalable keypad interface.
*   **Color-Coded Actions:** Distinct colors for standard operators, the calculate button, and the clear button to guide the user's eye.

## 🛠️ Technologies Used

*   **HTML5:** Semantic structure and layout.
*   **CSS3:** Custom animations (`@keyframes`), flexbox, grid, and glassmorphism-inspired design elements.
*   **Vanilla JavaScript (ES6):** Core calculation logic using `eval()` with sanitized string replacement, event listeners for keyboard integration, and DOM manipulation for visual feedback.
