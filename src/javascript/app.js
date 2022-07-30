"use strict";

var mouseCursor = document.querySelector(".cursor");
var navLinks = document.querySelectorAll(".nav-item");
var projects = document.querySelectorAll(".project-card");

var projectH2 = document.getElementsByClassName("benefits-h2");

window.addEventListener("mousemove", (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
});

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });

  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

projects.forEach((project) => {
  project.addEventListener("mousevoer", () => {
    projectH2.classList.add("project-hovered");
  });
  project.addEventListener("mouseleave", () => {
    projectH2.classList.remove("project-hovered");
  });
});
