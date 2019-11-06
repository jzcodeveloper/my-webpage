const initialize = () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", e => {
    e.preventDefault();
  });

  window.addEventListener("scroll", checkScrollPosition);
  checkAge();
};

const checkAge = () => {
  const yearsOld = document.getElementById("years-old");
  const age = new Date().getFullYear() - 1999;
  yearsOld.innerText = `I'm a ${age}-year-old web developer with around a year of experience building full-stack applications using the MERN stack.`;
};

const checkScrollPosition = () => {
  const { innerHeight, scrollY } = window;

  const text = document.querySelectorAll(".text");
  const sections = document.getElementById("top-section");
  const aboutSection = document.getElementById("about-section");
  const servicesSection = document.getElementById("services-section");
  const skillsSection = document.getElementById("skills-section");
  const projectsSection = document.getElementById("projects-section");
  const contactSection = document.getElementById("contact-section");
  const formSection = document.getElementById("form-section");

  if (innerHeight + scrollY > aboutSection.offsetTop + text[0].offsetTop) {
    text[0].classList.add("animate-text-fade-in");
  } else {
    text[0].classList.remove("animate-text-fade-in");
  }
  if (innerHeight + scrollY > servicesSection.offsetTop + text[1].offsetTop) {
    text[1].classList.add("animate-text-fade-in");
  } else {
    text[1].classList.remove("animate-text-fade-in");
  }
  if (innerHeight + scrollY > skillsSection.offsetTop + text[2].offsetTop) {
    text[2].classList.add("animate-text-fade-in");
  } else {
    text[2].classList.remove("animate-text-fade-in");
  }
  if (innerHeight + scrollY > projectsSection.offsetTop + text[3].offsetTop) {
    text[3].classList.add("animate-text-fade-in");
  } else {
    text[3].classList.remove("animate-text-fade-in");
  }
  if (innerHeight + scrollY > contactSection.offsetTop + text[4].offsetTop) {
    text[4].classList.add("animate-text-fade-in");
  } else {
    text[4].classList.remove("animate-text-fade-in");
  }
  if (innerHeight + scrollY > formSection.offsetTop + text[5].offsetTop) {
    text[5].classList.add("animate-text-fade-in");
  } else {
    text[5].classList.remove("animate-text-fade-in");
  }
};

window.addEventListener("load", initialize);
