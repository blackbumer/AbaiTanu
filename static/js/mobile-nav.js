(() => {
  const setupMobileNav = (nav) => {
    const toggleButton = nav.querySelector("button.md\\:hidden");
    const overlay = nav.querySelector("div.fixed.inset-0.md\\:hidden");
    const panel = nav.querySelector("div.fixed.top-0.right-0.md\\:hidden");

    if (!toggleButton || !overlay || !panel) return;

    const menuLinks = Array.from(panel.querySelectorAll("a"));
    let isOpen = false;

    const setLinksState = (open) => {
      menuLinks.forEach((link, index) => {
        if (open) {
          link.style.transitionDelay = `${index * 60}ms`;
          link.classList.remove("opacity-0", "translate-x-10");
        } else {
          link.style.transitionDelay = "0ms";
          link.classList.add("opacity-0", "translate-x-10");
        }
      });
    };

    const closeMenu = () => {
      if (!isOpen) return;
      isOpen = false;
      overlay.classList.add("opacity-0", "invisible");
      panel.classList.add("translate-x-full");
      panel.classList.remove("translate-x-0");
      document.body.style.overflow = "";
      setLinksState(false);
    };

    const openMenu = () => {
      if (isOpen) return;
      isOpen = true;
      overlay.classList.remove("opacity-0", "invisible");
      panel.classList.remove("translate-x-full");
      panel.classList.add("translate-x-0");
      document.body.style.overflow = "hidden";
      setLinksState(true);
    };

    toggleButton.addEventListener("click", () => {
      if (isOpen) closeMenu();
      else openMenu();
    });

    overlay.addEventListener("click", closeMenu);
    menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) closeMenu();
    });
  };

  document.querySelectorAll("nav").forEach(setupMobileNav);
})();
