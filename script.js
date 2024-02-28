function mouseDown() {
    document.getElementById("one").style.color = "transparent";
    document.getElementById("one").style.textShadow = "0 0 3px rgb(202, 177, 35)";

  }
  
  function mouseUp() {
    document.getElementById("one").style.color = "gold";
    document.getElementById("one").style.opacity = 0.55;
  }




function myFunction1(element, clr) {
    element.style.color = clr;
}


function myFunction() {
    location.replace("http://127.0.0.1:5505/index.html")
  }


  // window.addEventListener("load", (event) => {
  //   new cursoreffects.followingDotCursor({ color: ["darkblue"] });
  // });