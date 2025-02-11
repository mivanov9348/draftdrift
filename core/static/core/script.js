document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-content");

        button.addEventListener("click", function (event) {
            event.stopPropagation();
            menu.classList.toggle("show");
        });

        document.addEventListener("click", function () {
            menu.classList.remove("show");
        });
    });
});