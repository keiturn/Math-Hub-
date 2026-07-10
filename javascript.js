/*======================================================

                    MATH HUB
                    SCRIPT.JS

======================================================*/



/*==============================
        MOBILE MENU
==============================*/


let menuBtn = document.querySelector(".menu-btn");

let navLinks = document.querySelector(".nav-links");



if(menuBtn && navLinks){


    menuBtn.onclick = () =>{


        navLinks.classList.toggle("active");


    };


}






/*==============================
        CLOSE MENU WHEN CLICKING LINK
==============================*/


let navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(link =>{


    link.onclick = ()=>{


        if(navLinks){


            navLinks.classList.remove("active");


        }


    }


});









/*==============================
        BACK TO TOP BUTTON
==============================*/


let topBtn = document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(topBtn){


        if(window.scrollY > 300){


            topBtn.classList.add("show");


        }

        else{


            topBtn.classList.remove("show");


        }


    }


});





if(topBtn){


    topBtn.onclick = ()=>{


        window.scrollTo({


            top:0,


            behavior:"smooth"


        });


    };


}








/*==============================
        FADE ANIMATION
==============================*/


const animationElements = document.querySelectorAll(

".calculator-card, .skill-card, .why-card, .function-card, .instruction-card, .tip-card"

);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("fade-up");


    }


});


},


{

    threshold:0.15

}

);



animationElements.forEach(element=>{


    observer.observe(element);


});









/*======================================================

            AREA CALCULATOR FUNCTIONS

======================================================*/



function calculateSquareArea(){


    let side = document.getElementById("squareSide");


    let result = document.getElementById("squareResult");



    if(side && result){


        result.innerHTML =

        "Area = " + (side.value * side.value) + " units²";


    }


}







function calculateRectangleArea(){


    let length=document.getElementById("rectangleLength");


    let width=document.getElementById("rectangleWidth");


    let result=document.getElementById("rectangleResult");



    if(length && width && result){


        result.innerHTML =

        "Area = " + (length.value * width.value) + " units²";


    }


}








function calculateCircleArea(){


    let radius=document.getElementById("circleRadius");


    let result=document.getElementById("circleResult");



    if(radius && result){


        result.innerHTML =


        "Area = " +


        (Math.PI * radius.value * radius.value).toFixed(2)

        + " units²";


    }


}









/*======================================================

            PERIMETER FUNCTIONS

======================================================*/



function calculateSquarePerimeter(){


let side=document.getElementById("squareSide");


let result=document.getElementById("squareResult");



if(side && result){


result.innerHTML =

"Perimeter = " + (4 * side.value) + " units";


}


}







function calculateRectanglePerimeter(){


let length=document.getElementById("rectangleLength");


let width=document.getElementById("rectangleWidth");


let result=document.getElementById("rectangleResult");



if(length && width && result){


result.innerHTML =

"Perimeter = " +

(2*(Number(length.value)+Number(width.value)))

+ " units";


}


}









/*======================================================

            DIAMETER FUNCTIONS

======================================================*/



function calculateDiameter(){


let radius=document.getElementById("radius");


let result=document.getElementById("diameterResult");



if(radius && result){


result.innerHTML =

"Diameter = "

+

(2 * radius.value)

+

" units";


}


}









/*======================================================

            VOLUME FUNCTIONS

======================================================*/



function calculateCubeVolume(){


let side=document.getElementById("cubeSide");


let result=document.getElementById("cubeResult");



if(side && result){


result.innerHTML =


"Volume = "

+

(side.value ** 3)

+

" units³";


}


}







function calculateSphereVolume(){


let radius=document.getElementById("sphereRadius");


let result=document.getElementById("sphereResult");



if(radius && result){


result.innerHTML =


"Volume = "

+

((4/3)*Math.PI*(radius.value**3)).toFixed(2)

+

" units³";


}


}









/*==============================
        CONTACT BUTTON
==============================*/


let contactButtons=document.querySelectorAll(".contact-btn");



contactButtons.forEach(button=>{


button.onclick=()=>{


alert(

"Thank you for contacting Math Hub!"

);


};


});









/*==============================
        CURRENT YEAR FOOTER
==============================*/


let year=document.querySelector(".year");


if(year){


year.textContent=new Date().getFullYear();


}