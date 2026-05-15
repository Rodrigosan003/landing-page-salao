let links = document.querySelectorAll(".nav-bar a");
let sections = document.querySelectorAll(".section");
let menu = document.querySelector("#menu");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // remove de todos
    links.forEach((l) => l.classList.remove("active"));

    // adiciona no clicado
    link.classList.add("active");
  });
});
