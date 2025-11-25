// =============================
// MENU BURGER ACCESSIBLE
// =============================

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

// Ajout ARIA pour accessibilité
burger.setAttribute("aria-expanded", "false");
burger.setAttribute("aria-label", "Ouvrir le menu");

// Ouverture / fermeture du menu
burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open'); // ouvre/ferme le menu
    burger.classList.toggle('active');           // animation croix

    // Mise à jour ARIA
    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
});

// Fermer le menu quand on clique sur un lien
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Ouvrir le menu");
    });
});
