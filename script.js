/* When the user scrolls down, hide the webiste header. When the user scrolls up, show it */
/* Script taken from https://www.w3schools.com/cssref/pr_background-image.asp */ 

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
