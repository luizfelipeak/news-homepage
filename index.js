// ------------ Mobile navbar functions ------------
  // ------------ Navbar variables ------------
    const navButton = document.getElementById("nav-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMobileNav = document.getElementById("close-mobile-nav");
    let removeTimeOut;
  // ------------------------------------------

  navButton.addEventListener("click", () => {
    mobileNav.setAttribute("data-state", "opening");

    removeTimeOut = setTimeout(() => {
      navButton.setAttribute("aria-expanded", "true");
      mobileNav.setAttribute("data-state", "opened");
    }, 1000);
  });

  closeMobileNav.addEventListener("click", () => {
    clearTimeout(removeTimeOut);
    mobileNav.setAttribute("data-state", "closing");
    
    setTimeout(() => {
      navButton.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("data-state", "closed");
    }, 350);
  });
// -------------------------------------------------