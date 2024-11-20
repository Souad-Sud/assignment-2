const navBar = document.querySelector('.nav');
const hamburgerBar = document.querySelector('.hamurger');
 


hamburgerBar.addEventListener('click' , ()=>{
    //toggle to apear and disappear the nav
  navBar.classList.toggle('nav__open');
  //that's the class that I added to the hamburger in order to change the bars in X
  hamburgerBar.classList.toggle('hamburger__open');
});

//also should disappear after we click on the links and navbar so instead od toggle we add remove

navBar.addEventListener('click', () =>{
    navBar.classList.remove('nav__open');
    hamburgerBar.classList.remove('hamburger__open');
});