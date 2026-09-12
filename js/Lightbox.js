<script>

function openLightbox(imageSrc) {

    const lightbox = document.getElementById("art-lightbox");
    const image = document.getElementById("lightbox-image");

    image.src = imageSrc;

    lightbox.classList.add("active");

    document.body.classList.add("lightbox-open");
}


function closeLightbox() {

    const lightbox = document.getElementById("art-lightbox");

    lightbox.classList.remove("active");

    document.body.classList.remove("lightbox-open");
}


/* Close when clicking the dark background */

document.getElementById("art-lightbox").addEventListener("click", function(event) {

    if (event.target === this) {
        closeLightbox();
    }

});


/* Close with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});

</script>
