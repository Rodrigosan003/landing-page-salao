let links = document.querySelectorAll(".nav-bar a");
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("header nav a");

// Pega os dots da sessão depoimentos
let dotsTestimonials = document.querySelectorAll(".dots");


let menu = document.querySelector("#menu");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // remove de todos
    links.forEach((l) => l.classList.remove("active"));

    // adiciona no clicado
    link.classList.add("active");
  });
});


window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // menuIcon.classList.remove("bi-x");
  navbar.classList.remove("active");
};

dotsTestimonials.addEventListener("click", () => {
  dotsTestimonials.getAttribute.toggle("dots-check");
})