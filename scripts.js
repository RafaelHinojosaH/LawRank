document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuIcon.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const resultsGrid = document.querySelector('.results-grid');

    leftArrow.addEventListener('click', () => {
        resultsGrid.scrollBy({
            left: -300, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        resultsGrid.scrollBy({
            left: 300, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });
    });
});
