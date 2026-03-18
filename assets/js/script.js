// Banner Slider
let slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(showNextSlide, 3000); // 3000 = 3 seconds

// Product Buttons (example)
document.getElementById('water-button').addEventListener('click', function() {
    // show water products
    console.log('Water products clicked');
});

document.getElementById('solid-button').addEventListener('click', function() {
    // show solid products
    console.log('Solid products clicked');
});
