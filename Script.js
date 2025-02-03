document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    const h1 = document.querySelector('h1');


    setTimeout(() => {
        box.classList.add('wide');
        h1.classList.add('changed');
    }, 500); 

    setTimeout(() => {
        window.location.href = "Homepage.html"; 
    }, 3000); 
});
