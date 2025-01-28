document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    const h1 = document.querySelector('h1');

    // Add the 'wide' class to the box and 'changed' class to the h1 after a short delay
    setTimeout(() => {
        box.classList.add('wide');
        h1.classList.add('changed');
    }, 500); // Delay of 500ms before the animation starts

    setTimeout(() => {
        window.location.href = "Homepage/Homepage.html"; // Replace with the actual URL of your new page
    }, 3000); // 3 seconds
});
