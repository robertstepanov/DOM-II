// Your code goes here

//  -----------------  Click Event/Dark Mode Button/  ------------------>

const newButton = document.createElement("button");
newButton.textContent = "Dark Mode";

newButton.classList.add("btn");

const buttonParent = document.querySelector(".nav");
buttonParent.append(newButton);

let isColored = false;
newButton.addEventListener("click", function() {
  if (isColored) {
    document.body.style.background = "white";
    document.body.style.color = "black";
    document.querySelector(".intro").style.color = "black";
    isColored = false;
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.querySelector(".logo-heading").style.color = "black";
    document.querySelector(".intro").style.color = "white";
    isColored = true;
  }
});

//  -----------------   Mouseover and Mouseleave Event  ------------------>

let intro = document.querySelector(".intro");

intro.addEventListener("mouseover", function() {
  document.querySelector("intro, h2").style.fontSize = "50px";
  document.querySelector(".intro").style.color = "orange";
});

intro.addEventListener("mouseleave", function() {
  document.querySelector("intro, h2").style.fontSize = "32px";
  document.querySelector(".intro").style.color = "black";
});

//  -----------------   Resize Event  ------------------>

let widthP = document.createElement("p");
widthP.textContent = "Width";
widthP.classList.add("width");

const newPParent = document.querySelector(".container");
newPParent.append(widthP);

const heightOutput = document.querySelector(".height");
const widthOutput = document.querySelector(".width");

function windowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = windowSize;
