/*======================================================
                MATH HUB
           SCIENTIFIC CALCULATOR
======================================================*/

const display = document.getElementById("display");

// Add value
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Square Root
function squareRoot() {
    display.value = Math.sqrt(Number(display.value));
}

// Cube Root
function cubeRoot() {
    display.value = Math.cbrt(Number(display.value));
}

// Square
function square() {
    display.value = Math.pow(Number(display.value), 2);
}

// Cube
function cube() {
    display.value = Math.pow(Number(display.value), 3);
}

// Power
function power() {
    display.value += "**";
}

// Sine (Degrees)
function sin() {
    display.value = Math.sin(Number(display.value) * Math.PI / 180);
}

// Cosine (Degrees)
function cos() {
    display.value = Math.cos(Number(display.value) * Math.PI / 180);
}

// Tangent (Degrees)
function tan() {
    display.value = Math.tan(Number(display.value) * Math.PI / 180);
}

// Log base 10
function log() {
    display.value = Math.log10(Number(display.value));
}

// Natural Log
function ln() {
    display.value = Math.log(Number(display.value));
}

// PI
function pi() {
    display.value += Math.PI;
}

// Euler's Number
function euler() {
    display.value += Math.E;
}