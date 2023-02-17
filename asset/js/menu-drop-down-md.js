const dropDown = document.querySelector(".toggle-header");
const dropOff = document.querySelector(".toggle-off-menu");
let menuAbs = document.querySelector(".menu-header-container");
let menulg = document.querySelector(".menu-lg-header");
dropOff.addEventListener('click', closeMenu);
dropDown.addEventListener('click', dropMenu);
dropDown.addEventListener('click', dropMenuLg);

let dropScreen = window.matchMedia("(max-width: 1060px)");
function dropMenu() {

    if (dropScreen.matches) {
        menuAbs.classList.add("d-block-md");
        return
    }

}
function closeMenu() {
    menuAbs.classList.remove("d-block-md");
    return
}


let dropScreenLg = window.matchMedia("(min-width: 1060px)");
function dropMenuLg() {

    if (dropScreenLg.matches) {
        menulg.classList.toggle("block");
        return
    }

}







