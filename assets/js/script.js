// Banner Slider
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 8000);

// Product Buttons (example)
document.getElementById('water-button').addEventListener('click', function() {
    // show water products
    console.log('Water products clicked');
});

document.getElementById('solid-button').addEventListener('click', function() {
    // show solid products
    console.log('Solid products clicked');
});
