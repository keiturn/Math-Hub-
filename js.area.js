/*======================================================
                MATH HUB
                AREA.JS
======================================================*/

// Rectangle
function calculateRectangleArea() {

    let length = Number(document.getElementById("rectLength").value);
    let width = Number(document.getElementById("rectWidth").value);
    let answer = document.getElementById("rectangleAnswer");

    if (length <= 0 || width <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    answer.innerHTML = "Area = " + (length * width).toFixed(2) + " units²";
}


// Square
function calculateSquareArea() {

    let side = Number(document.getElementById("squareSide").value);
    let answer = document.getElementById("squareAnswer");

    if (side <= 0) {
        answer.innerHTML = "Please enter a valid side.";
        return;
    }

    answer.innerHTML = "Area = " + (side * side).toFixed(2) + " units²";
}


// Triangle
function triangleArea() {

    let base = Number(document.getElementById("triangleBase").value);
    let height = Number(document.getElementById("triangleHeight").value);
    let answer = document.getElementById("triangleAnswer");

    if (base <= 0 || height <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    answer.innerHTML = "Area = " + (0.5 * base * height).toFixed(2) + " units²";
}


// Circle
function circleArea() {

    let radius = Number(document.getElementById("circleRadius").value);
    let answer = document.getElementById("circleAnswer");

    if (radius <= 0) {
        answer.innerHTML = "Please enter a valid radius.";
        return;
    }

    let area = Math.PI * radius * radius;

    answer.innerHTML = "Area = " + area.toFixed(2) + " units²";
}


// Parallelogram
function parallelogramArea() {

    let base = Number(document.getElementById("paraBase").value);
    let height = Number(document.getElementById("paraHeight").value);
    let answer = document.getElementById("paraAnswer");

    if (base <= 0 || height <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    answer.innerHTML = "Area = " + (base * height).toFixed(2) + " units²";
}


// Trapezoid
function trapezoidArea() {

    let b1 = Number(document.getElementById("trapBase1").value);
    let b2 = Number(document.getElementById("trapBase2").value);
    let h = Number(document.getElementById("trapHeight").value);
    let answer = document.getElementById("trapAnswer");

    if (b1 <= 0 || b2 <= 0 || h <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    let area = ((b1 + b2) * h) / 2;

    answer.innerHTML = "Area = " + area.toFixed(2) + " units²";
}


// Rhombus
function rhombusArea() {

    let d1 = Number(document.getElementById("rhombusD1").value);
    let d2 = Number(document.getElementById("rhombusD2").value);
    let answer = document.getElementById("rhombusAnswer");

    if (d1 <= 0 || d2 <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    let area = (d1 * d2) / 2;

    answer.innerHTML = "Area = " + area.toFixed(2) + " units²";
}


// Kite
function kiteArea() {

    let d1 = Number(document.getElementById("kiteD1").value);
    let d2 = Number(document.getElementById("kiteD2").value);
    let answer = document.getElementById("kiteAnswer");

    if (d1 <= 0 || d2 <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    let area = (d1 * d2) / 2;

    answer.innerHTML = "Area = " + area.toFixed(2) + " units²";
}