// =====================================
// VANUMU VENKATESH - PORTFOLIO
// JavaScript Functionality
// =====================================

// 1. Select the menu button and navigation links

const menuButton = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// 2. Open and close the mobile navigation menu

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";

});

// 3. Close the menu after clicking a navigation link

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Open navigation menu");

        menuButton.textContent = "☰";

    });

});

// 4. Display the current year automatically in the footer

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// 5. Display a message in the browser console

console.log("Welcome to VANUMU VENKATESH's Portfolio!");