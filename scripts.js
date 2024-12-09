// Простая анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const profileBlock = document.querySelector('.profile-block');
    const aboutMeCard = document.querySelector('.about-me-card');

    profileBlock.style.opacity = 0;
    aboutMeCard.style.opacity = 0;

    setTimeout(() => {
        profileBlock.style.transition = 'opacity 1s';
        aboutMeCard.style.transition = 'opacity 1s';
        profileBlock.style.opacity = 1;
        aboutMeCard.style.opacity = 1;
    }, 500);
});