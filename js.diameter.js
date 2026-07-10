/*======================================================
                MATH HUB
              DIAMETER.JS
======================================================*/


function calculateDiameter(){


let radius=document.getElementById("radius");

let result=document.getElementById("diameterResult");



if(radius && result){


let diameter =
2 * radius.value;



result.innerHTML =
"Diameter = "
+
diameter
+
" units";


}


}