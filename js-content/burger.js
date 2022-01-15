const navSlide = () => {
    const burger = document.querySelector(".menu-btn");
  
    const nav = document.querySelector(".full-nav");
    const navLinks = document.querySelectorAll(".full-nav li");
    let menuOpen = false;
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      if (!menuOpen) {
        burger.classList.add("open");
        menuOpen = true;
      } else {
        burger.classList.remove("open");
        menuOpen = false;
      }
    });
  };
  
  navSlide();