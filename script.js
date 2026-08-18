const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const galleryItems = document.querySelectorAll('.gallery-item');

// Search functionality
searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value.toLowerCase();

    galleryItems.forEach(function(item) {
        const image = item.querySelector('img');
        const imageName = image.alt.toLowerCase();

        if (imageName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


// Lightbox
const images = document.querySelectorAll('.gallery-item img');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const close = document.getElementById('close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;


// Open image in lightbox
images.forEach(function(image, index) {
    image.addEventListener('click', function() {
        currentIndex = index;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.style.display = 'flex';
    });
});


// Close lightbox
close.addEventListener('click', function() {
    lightbox.style.display = 'none';
});


// Previous image
prev.addEventListener('click', function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
});


// Next image
next.addEventListener('click', function() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
});

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', function(event) {

    if (lightbox.style.display === 'flex') {

        if (event.key === 'ArrowLeft') {
            prev.click();
        }

        if (event.key === 'ArrowRight') {
            next.click();
        }

        if (event.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    }
});
// Category filter
const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {

        const selectedCategory = button.getAttribute('data-filter');

        galleryItems.forEach(function(item) {
            const itemCategory = item.getAttribute('data-category');

            if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});