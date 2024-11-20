const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


// add evenlistner of type click
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
})

navMenu.addEventListener('click', () =>{
   hamburger.classList.remove("active");
   navMenu.classList.remove("active")
});

// document.querySelectorAll(".links").forEach( .
//    addEventListener("click", () => {
//       hamburger.classList.remove("active");
//       navMenu.classList.remove("active")
// }) )