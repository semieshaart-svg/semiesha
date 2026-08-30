/* =========================================================
   ✦ YCH CAROUSEL
   Semi — YCH Page
========================================================= */


/* =========================================================
   YCH IMAGES
   Add or replace your image URLs here.
========================================================= */

const ychImages = [

    "IMAGE_01",
    "IMAGE_02",
    "IMAGE_03",
    "IMAGE_04",
    "IMAGE_05",
    "IMAGE_06",
    "IMAGE_07",
    "IMAGE_08",
    "IMAGE_09",
    "IMAGE_10"

];


/* =========================================================
   CURRENT YCH
========================================================= */

let currentYCH = 0;


/* =========================================================
   PAGE ELEMENTS
========================================================= */

const ychImage = document.getElementById("ych-image");

const ychLabel = document.getElementById("ych-label");

const ychNumber = document.getElementById("ych-number");

const ychDots = document.querySelectorAll(".ych-dot");

const previousButton =
    document.querySelector(".ych-arrow-left");

const nextButton =
    document.querySelector(".ych-arrow-right");


/* =========================================================
   UPDATE CAROUSEL
========================================================= */

function updateYCH() {

    /* Safety check */

    if (!ychImage) {
        return;
    }


    /* YCH number */

    const number =
        String(currentYCH + 1).padStart(3, "0");


    /* Change image */

    ychImage.src =
        ychImages[currentYCH];


    /* Change image label */

    if (ychLabel) {

        ychLabel.textContent =
            "YCH · " + number;

    }


    /* Change information number */

    if (ychNumber) {

        ychNumber.textContent =
            "YCH · " + number;

    }


    /* Update dots */

    ychDots.forEach(function(dot, index) {

        dot.classList.toggle(
            "active",
            index === currentYCH
        );

    });

}


/* =========================================================
   SHOW SPECIFIC YCH
========================================================= */

function showYCH(index) {

    if (index < 0) {

        index =
            ychImages.length - 1;

    }


    if (index >= ychImages.length) {

        index = 0;

    }


    currentYCH = index;

    updateYCH();

}


/* =========================================================
   NEXT YCH
========================================================= */

function nextYCH() {

    showYCH(currentYCH + 1);

}


/* =========================================================
   PREVIOUS YCH
========================================================= */

function previousYCH() {

    showYCH(currentYCH - 1);

}


/* =========================================================
   ARROW BUTTONS
========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextYCH
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        previousYCH
    );

}


/* =========================================================
   DOT BUTTONS
========================================================= */

ychDots.forEach(function(dot, index) {

    dot.addEventListener(
        "click",
        function() {

            showYCH(index);

        }
    );

});


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {

            nextYCH();

        }


        if (event.key === "ArrowLeft") {

            previousYCH();

        }

    }
);


/* =========================================================
   TOUCH / SWIPE
========================================================= */

let touchStartX = 0;

let touchEndX = 0;


if (ychImage) {

    ychImage.addEventListener(
        "touchstart",
        function(event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    ychImage.addEventListener(
        "touchend",
        function(event) {

            touchEndX =
                event.changedTouches[0].screenX;


            const difference =
                touchStartX - touchEndX;


            /* Swipe left */

            if (difference > 50) {

                nextYCH();

            }


            /* Swipe right */

            if (difference < -50) {

                previousYCH();

            }

        },
        { passive: true }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

updateYCH();
