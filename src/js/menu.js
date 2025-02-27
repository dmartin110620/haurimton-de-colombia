// Hamburguer menu

const hamburguer = document.querySelector(".hamburguer");

const navMenu = document.querySelector(".navmenu");

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle("active");

    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {

    hamburguer.classList.remove("active");

    navMenu.classList.remove("active");

}))



// Hide navbar after scrolling down

// let prevScrollPosition = window.pageYOffset;

// window.onscroll = function () {

//     let currentScrollPosition = window.pageYOffset;

//     if (prevScrollPosition > currentScrollPosition) {

//         document.querySelector(".navbar") .style. top = "0";

//     } else {

//         document.querySelector(".navbar") .style. top = "-150px";

//     }

//     prevScrollPosition = currentScrollPosition;

// }