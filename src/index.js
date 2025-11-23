const navEle = document.querySelector(".nav-header");
const rand = document.querySelector(".randomClick");
const menuContainer = document.getElementById("sidebar");

let isMenu = false;

const toggleMenu = navEle.addEventListener("click", (e) => {
  isMenu = !isMenu;
  e.stopPropagation();
  menuContainer.classList.toggle("hiddenCuz", !isMenu);
});
document.addEventListener("click", (e) => {
  if (
    isMenu &&
    !navEle.contains(e.target) &&
    !menuContainer.contains(e.target)
  ) {
    isMenu = false;
    menuContainer.classList.add("hiddenCuz");
  }
});
