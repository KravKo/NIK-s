const images = document.querySelectorAll('.image-fade');

function rotateImages() {
    const activeImage = document.querySelector('.image-fade.active');
    activeImage.classList.remove('active');

    const nextImage = activeImage.nextElementSibling || images[0];
    nextImage.classList.add('active');
}

setInterval(rotateImages, 5000);
