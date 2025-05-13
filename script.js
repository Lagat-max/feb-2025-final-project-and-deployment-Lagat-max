// Image slider functionality (basic example)
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Contact form validation (basic)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        event.preventDefault();
    }
});
