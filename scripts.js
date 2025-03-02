document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.backgroundColor = "#e8f5e9";
        });

        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "white";
        });
    });
});





