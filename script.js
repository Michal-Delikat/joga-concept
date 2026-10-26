document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".site-nav");

    if (!header || !toggle || !nav) {
        return;
    }

    function closeMenu() {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
    }

    function openMenu() {
        header.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("nav-open");
    }

    function updateHeader() {
        header.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    toggle.addEventListener("click", function () {
        if (header.classList.contains("is-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    nav.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
