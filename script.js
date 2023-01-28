const navBar = document.getElementById("navbar");
const bottomCtn = document.querySelector(".bottom-container");

window.onscroll = () => {
  if (window.scrollY > bottomCtn.offsetTop - navBar.offsetHeight - 50) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
};
