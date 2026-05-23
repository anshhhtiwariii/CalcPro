const display = document.getElementById('display');
// Added a safety fallback so the code never breaks if the ID is missing
const calculatorDiv = document.getElementById('calculator') || document.querySelector('.calculator');

// Triggers the background pulse effect safely
function triggerMotion() {
    if (!calculatorDiv) return; // Safety check prevents crashing
    calculatorDiv.classList.remove('typing-pulse');
    void calculatorDiv.offsetWidth; 
    calculatorDiv.classList.add('typing-pulse');
    
    setTimeout(() => {
        calculatorDiv.classList.remove('typing-pulse');
    }, 150);
}

// Appends characters to the screen
function appendToDisplay(value) {
    display.value += value;
    triggerMotion();
}

// Clears the screen
function clearDisplay() {
    display.value = '';
    triggerMotion();
}

// Handles the math and fixes missing brackets
function calculate() {
    try {
        triggerMotion();
        
        // Fix: Count brackets and auto-close them
        let openBrackets = (display.value.match(/\(/g) || []).length;
        let closeBrackets = (display.value.match(/\)/g) || []).length;
        
        for (let i = 0; i < (openBrackets - closeBrackets); i++) {
            display.value += ')';
        }
        
        // Convert symbols for JavaScript math
        let expression = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-')
            .replace(/\^/g, '**')          
            .replace(/√/g, 'Math.sqrt');   

        let result = eval(expression);

        // Handle errors and long decimals gracefully
        if (!isFinite(result) || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Keyboard Support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Prevent typing into the display naturally to avoid duplicate inputs
    if (document.activeElement === display) {
        event.preventDefault();
    }

    if (/[0-9.%^()]/.test(key)) {
        appendToDisplay(key);
    } 
    else if (key.toLowerCase() === 'r') {
        appendToDisplay('√(');
    }
    else if (key === '+') { appendToDisplay('+'); } 
    else if (key === '-') { appendToDisplay('−'); } 
    else if (key === '*') { appendToDisplay('×'); } 
    else if (key === '/') { 
        event.preventDefault(); 
        appendToDisplay('÷'); 
    } 
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } 
    else if (key === 'Backspace') {
        triggerMotion();
        if (display.value === 'Error') {
            clearDisplay();
        } else {
            display.value = display.value.slice(0, -1);
        }
    } 
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }
});