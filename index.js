document.addEventListener("DOMContentLoaded", function() {
document.querySelector("ul").style.marginLeft;
document.getElementById("botonizquierdo").addEventListener("click", myFunction);
 document.getElementById("botonderecho").addEventListener("click", myFunction2);
function myFunction() {

   
    document.getElementById("lista").style.animationDirection="normal";
  }
  function myFunction2() {


    document.getElementById("lista").style.animationDirection="reverse";
  }
});