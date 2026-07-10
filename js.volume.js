/*======================================================
                MATH HUB
               VOLUME.JS
======================================================*/

// Cube
function cubeVolume() {

    let side = Number(document.getElementById("cubeSide").value);
    let answer = document.getElementById("cubeAnswer");

    if (isNaN(side) || side <= 0) {
        answer.innerHTML = "Please enter a valid side length.";
        return;
    }

    answer.innerHTML = "Volume = " + (side ** 3).toFixed(2) + " units³";
}


// Rectangular Prism
function rectangularPrism() {

    let length = Number(document.getElementById("rectLength").value);
    let width = Number(document.getElementById("rectWidth").value);
    let height = Number(document.getElementById("rectHeight").value);
    let answer = document.getElementById("rectAnswer");

    if (length <= 0 || width <= 0 || height <= 0) {
        answer.innerHTML = "Please enter valid dimensions.";
        return;
    }

    answer.innerHTML = "Volume = " + (length * width * height).toFixed(2) + " units³";
}


// Cylinder
function cylinderVolume() {

    let radius = Number(document.getElementById("cylRadius").value);
    let height = Number(document.getElementById("cylHeight").value);
    let answer = document.getElementById("cylAnswer");

    if (radius <= 0 || height <= 0) {
        answer.innerHTML = "Please enter valid dimensions.";
        return;
    }

    let volume = Math.PI * radius * radius * height;

    answer.innerHTML = "Volume = " + volume.toFixed(2) + " units³";
}


// Cone
function coneVolume() {

    let radius = Number(document.getElementById("coneRadius").value);
    let height = Number(document.getElementById("coneHeight").value);
    let answer = document.getElementById("coneAnswer");

    if (radius <= 0 || height <= 0) {
        answer.innerHTML = "Please enter valid dimensions.";
        return;
    }

    let volume = (Math.PI * radius * radius * height) / 3;

    answer.innerHTML = "Volume = " + volume.toFixed(2) + " units³";
}


// Sphere
function sphereVolume() {

    let radius = Number(document.getElementById("sphereRadius").value);
    let answer = document.getElementById("sphereAnswer");

    if (radius <= 0) {
        answer.innerHTML = "Please enter a valid radius.";
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    answer.innerHTML = "Volume = " + volume.toFixed(2) + " units³";
}


// Pyramid
function pyramidVolume() {

    let length = Number(document.getElementById("pyramidLength").value);
    let width = Number(document.getElementById("pyramidWidth").value);
    let height = Number(document.getElementById("pyramidHeight").value);
    let answer = document.getElementById("pyramidAnswer");

    if (length <= 0 || width <= 0 || height <= 0) {
        answer.innerHTML = "Please enter valid dimensions.";
        return;
    }

    let volume = (length * width * height) / 3;

    answer.innerHTML = "Volume = " + volume.toFixed(2) + " units³";
}