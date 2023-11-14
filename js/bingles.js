let buttonMenu = document.querySelector(".menu-bar");
let navList = document.querySelector(".nav-list");
let closeBtn = document.querySelector(".nav-list .close");
buttonMenu.addEventListener("click", () => {
  navList.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navList.classList.remove("active");
});
// foq

let button = document.querySelectorAll(".adocation");
let infoFoqContent = document.querySelectorAll(".info-foq .content");
button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    button.forEach(btnRemove => {
      infoFoqContent.forEach(content => (content.style.display = "none"));
      infoFoqContent[index].style.display = "block";

      btnRemove.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

// navbar

window.addEventListener("scroll", () => {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("active", window.scrollY > 10);
});

// move links of section

let navlist = document.querySelectorAll(" .nav-list a");
let section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 10;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document
        .querySelector("nav .nav-menu ul li a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav .nav-menu ul li a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};

// scroll top
let toTop = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("active", this.scrollY > 100);
});
toTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
