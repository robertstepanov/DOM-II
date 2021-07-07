// Your code goes here

//  -----------------  Click Event/Dark Mode Button/  ------------------>

const newButton = document.createElement("button");
newButton.textContent = "Dark Mode";

newButton.classList.add("btn");

const buttonParent = document.querySelector(".nav");
buttonParent.append(newButton);

let isColored = false;
newButton.addEventListener("click", function(e) {
  if (isColored) {
    document.body.style.background = "white";
    document.body.style.color = "black";
    document.querySelector(".intro").style.color = "black";
    document.querySelector(".logo-heading").style.color = "black";
    document.querySelector(".main-navigation").style.background = "white";
    document.querySelector(".nav-link").style.color = "black";
    document.querySelector(".footer").style.background = "#FFEBCD";
    document.querySelector(".footer p").style.color = "#212529";
    const navColor = document.querySelectorAll(".nav-link");
    navColor.forEach(element => {
      element.style.color = "black";
    });
    isColored = false;
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.querySelector(".logo-heading").style.color = "white";
    document.querySelector(".main-navigation").style.background = "black";
    document.querySelector(".intro").style.color = "white";
    document.querySelector(".footer").style.background = "black";
    document.querySelector(".footer p").style.color = "white";
    const navColor = document.querySelectorAll(".nav-link");
    navColor.forEach(element => {
      element.style.color = "white";
    });
    isColored = true;
  }
  e.stopPropagation();
});

//  -----------------   Mouseenter and Mouseleave Event  ------------------>

document.querySelectorAll(".img-content").forEach(e => {
  e.addEventListener("mouseenter", () => {
    e.style.transform = "scale(1.3)";
    e.style.transition = "transform 0.3s";
  });
  e.addEventListener("mouseleave", () => {
    e.style.transform = "scale(1)";
    e.style.transition = "transform 0.3s";
  });
});

//  -----------------   Resize Event  ------------------>

const firstImg = document.querySelector(".intro img");

window.addEventListener("resize", () => {
  firstImg.src =
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
});

//  -----------------   Wheel Event  ------------------>

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(0.125, scale), 2);

  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".intro img");
el.onwheel = zoom;

//  -----------------   Dblclick Event  ------------------>

const changeTitle = document.querySelectorAll("h2").forEach(e => {
  e.addEventListener("dblclick", () => {
    e.style.color = "orange";
  });
});

//  -----------------   Keydown Event  ------------------>

document.addEventListener("keydown", logKey);

function logKey(e) {
  alert(` ${e.code}`);
}

//  ----------------- Copy Event  ----------------------->

const logo_heading = document.querySelector(".logo-heading");

logo_heading.addEventListener("copy", event => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});

//  --------------- Drag/Drop Event  ------------------------->

let dragged;

document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    dragged = event.target;

    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    event.target.style.opacity = "";
  },
  false
);

document.addEventListener(
  "dragover",
  function(event) {
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    if (event.target.className == "dropzone") {
      event.target.style.background = "orange";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(event) {
    event.preventDefault();

    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

//  -----------------   Nav Prevent Default  ------------------>

const stopNav = document.querySelectorAll(".nav-link");
stopNav.forEach(e => {
  e.addEventListener("click", link => {
    link.preventDefault();
    console.log("stopped link");
  });
});
