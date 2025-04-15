function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger-menu');
    
    // Växla synlighet på menyn
    menu.classList.toggle('open');
    
    // Växla animationen på hamburgermenyn
    hamburger.classList.toggle('open');
}
