window.addEventListener('load', loadPage);
const preLoader = document.querySelector(".preloader");

function loadPage() {
    preLoader.classList.add("preloader-hidden")
    console.log(preLoader);
}