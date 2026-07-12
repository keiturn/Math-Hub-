/*======================================================
                MATH HUB
              DIAMETER.JS
======================================================*/

/*==============================
      MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}

/*==============================
      DIAMETER FUNCTIONS
==============================*/

function calculateRadiusDiameter() {

    let radius = parseFloat(document.getElementById("radiusInput").value);

    if (isNaN(radius)) {
        document.getElementById("radiusResult").innerHTML = "Enter a value";
        return;
    }

    document.getElementById("radiusResult").innerHTML = (radius * 2).toFixed(2);

}

function calculateCircumferenceDiameter() {

    let circumference = parseFloat(document.getElementById("circumferenceInput").value);

    if (isNaN(circumference)) {
        document.getElementById("circumferenceResult").innerHTML = "Enter a value";
        return;
    }

    document.getElementById("circumferenceResult").innerHTML =
        (circumference / Math.PI).toFixed(2);

}

function calculateAreaDiameter() {

    let area = parseFloat(document.getElementById("areaInput").value);

    if (isNaN(area)) {
        document.getElementById("areaResult").innerHTML = "Enter a value";
        return;
    }

    document.getElementById("areaResult").innerHTML =
        (2 * Math.sqrt(area / Math.PI)).toFixed(2);

}

/*==============================
      BACK TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
