const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
  menu.addEventListener("click", () => nav.classList.toggle("active"));
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}
