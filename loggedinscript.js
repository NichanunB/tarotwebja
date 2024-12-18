function navigateWithFadeOut(url) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card, .card2, .card3");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

document.querySelector(".dropdown-button").addEventListener("click", () => {
    const menu = document.querySelector(".dropdown-menu");
    menu.classList.toggle("show");
});

document.getElementById("subscribeButton").addEventListener("click", function() {
    this.style.display = "none";

    document.getElementById("qrCodeContainer").style.display = "block";
});