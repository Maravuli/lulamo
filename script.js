const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 30) {
            card.classList.add('show');
        }
    });
});

function showAlert() {
    alert("Project details coming soon!");
}

function contactMessage() {
    alert("Thanks for visiting! You can email me anytime.");
}

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

