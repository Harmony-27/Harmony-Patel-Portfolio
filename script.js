// ==============================
// MOBILE NAVIGATION
// ==============================

const menuButton = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// Close navigation after clicking a link

navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Open navigation");

    });

});


// ==============================
// CONTACT PLACEHOLDERS
// ==============================

document.querySelectorAll("[data-placeholder]").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const platform = link.dataset.placeholder;

        alert(
            `Add your ${platform} link in index.html to activate this button.`
        );

    });

});


// ==============================
// CURRENT YEAR
// ==============================

const footerName = document.querySelector(".footer-name");

if (footerName) {

    footerName.textContent = `© ${new Date().getFullYear()} Harmony Patel`;

}