let slideIndex = 0;
const images = ["gambar/1.jpg", "gambar/2.jpg", "gambar/3.jpg", "gambar/4.jpg", "gambar/5.jpg", "gambar/6.jpg", "gambar/7.jpg", "gambar/8.jpg"];
const dots = document.querySelectorAll(".dot");

function plusDivs(n) {
    slideIndex += n;
    if (slideIndex >= images.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = images.length - 1;
    updateSlide();
}

function currentSlide(n) {
    slideIndex = n;
    updateSlide();
}

function updateSlide() {
    document.getElementById("slideImage").src = images[slideIndex];
    dots.forEach((dot, index) => {
        dot.style.background = index === slideIndex ? "red" : "#ccc";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateSlide();
});