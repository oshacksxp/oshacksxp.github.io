/* When the user scrolls down, hide the webiste header. When the user scrolls up, show it */
/* Script taken from https://www.w3schools.com/cssref/pr_background-image.asp */ 
/*
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("website-header").style.top = "0";
  } else {
    document.getElementById("website-header").style.top = "-15vh";
  }
  prevScrollpos = currentScrollPos;
}
*/

window.onload = function(){
  let accordions = document.getElementsByClassName("accordion");
  for (let i = 0; i < accordions.length; i++) {
    /*Add Onclick Event*/
    accordions[i].addEventListener("click", function() {
      /*Set Active*/
      this.classList.toggle("active");
      /*Toggle Panel Onclick*/
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) { /*if max height is greater than 0 //  panel is visible */
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
