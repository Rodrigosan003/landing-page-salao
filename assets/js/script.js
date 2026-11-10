let links = document.querySelectorAll(".nav-bar a");
let sections = document.querySelectorAll(".section");
let navBar = document.querySelector(".nav-bar");

// Dots de depoimentos
let dots = document.querySelectorAll(".content-dots .dots");

// Troca a imagem do menu movile
let menu = document.querySelector("#menu-btn");
menu.addEventListener("click", () => {
  menu.classList.toggle("bi-x-lg");
  navBar.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    // remove de todos
    links.forEach((l) => l.classList.remove("active"));

    // adiciona no clicado
    link.classList.add("active");
    menu.classList.remove("bi-x-lg");
    navBar.classList.remove("open");
  });
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

// Dots da sessão testemunhos
dots.forEach((ball) => {
  ball.addEventListener("click", () => {
    dots.forEach((b) => b.classList.remove("dots-check"));
    ball.classList.add("dots-check");
  });
});
