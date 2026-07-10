/*======================================================
                MATH HUB
             PERIMETER.JS
======================================================*/

// Square
function squarePerimeter() {

    let side = Number(document.getElementById("squareSide").value);
    let answer = document.getElementById("squareAnswer");

    if (side <= 0) {
        answer.innerHTML = "Please enter a valid side.";
        return;
    }

    answer.innerHTML = "Perimeter = " + (4 * side).toFixed(2) + " units";
}


// Rectangle
function rectanglePerimeter() {

    let length = Number(document.getElementById("rectLength").value);
    let width = Number(document.getElementById("rectWidth").value);
    let answer = document.getElementById("rectangleAnswer");

    if (length <= 0 || width <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    let perimeter = 2 * (length + width);

    answer.innerHTML = "Perimeter = " + perimeter.toFixed(2) + " units";
}


// Triangle
function trianglePerimeter() {

    let a = Number(document.getElementById("sideA").value);
    let b = Number(document.getElementById("sideB").value);
    let c = Number(document.getElementById("sideC").value);
    let answer = document.getElementById("triangleAnswer");

    if (a <= 0 || b <= 0 || c <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    answer.innerHTML = "Perimeter = " + (a + b + c).toFixed(2) + " units";
}


// Circle
function circlePerimeter() {

    let radius = Number(document.getElementById("circleRadius").value);
    let answer = document.getElementById("circleAnswer");

    if (radius <= 0) {
        answer.innerHTML = "Please enter a valid radius.";
        return;
    }

    let circumference = 2 * Math.PI * radius;

    answer.innerHTML = "Circumference = " + circumference.toFixed(2) + " units";
}


// Parallelogram
function parallelogramPerimeter() {

    let base = Number(document.getElementById("paraBase").value);
    let side = Number(document.getElementById("paraSide").value);
    let answer = document.getElementById("paraAnswer");

    if (base <= 0 || side <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    let perimeter = 2 * (base + side);

    answer.innerHTML = "Perimeter = " + perimeter.toFixed(2) + " units";
}


// Regular Polygon
function polygonPerimeter() {

    let sides = Number(document.getElementById("polygonSides").value);
    let length = Number(document.getElementById("polygonLength").value);
    let answer = document.getElementById("polygonAnswer");

    if (sides <= 2 || length <= 0) {
        answer.innerHTML = "Please enter valid values.";
        return;
    }

    let perimeter = sides * length;

    answer.innerHTML = "Perimeter = " + perimeter.toFixed(2) + " units";
}