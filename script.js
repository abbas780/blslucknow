// change img code here 
const images = document.querySelectorAll('.slider-container img');
let currentIndex = 0;

function slideImage() {
    // Get current, next, and previous image elements
    const currentImage = images[currentIndex];
    currentImage.classList.remove('active');
    
    // Update index for next image
    currentIndex = (currentIndex + 1) % images.length;
    const nextImage = images[currentIndex];

    // Slide the images
    currentImage.classList.add('prev');
    nextImage.classList.remove('prev');
    nextImage.classList.add('active');
}

setInterval(slideImage,2000)
    



