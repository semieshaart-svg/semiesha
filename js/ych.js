/* =========================================================
   ✦ YCH CAROUSEL
   Semi — YCH Page
========================================================= */


/* =========================================================
   YCH IMAGES
   Add or replace your image URLs here.
========================================================= */

const ychImages = [

    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dm9kbgg-23d7e702-8c8a-4dd8-9ab2-d5e6d63c1c6a.png/v1/fill/w_1192,h_670,q_70,strp/ych__18__open__by_semiesha_dm9kbgg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbTlrYmdnLTIzZDdlNzAyLThjOGEtNGRkOC05YWIyLWQ1ZTZkNjNjMWM2YS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Oks_1DuSoOlXZXIjElUcPD7TUhZOy_oJA7oxFnI-Ufo",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dm9sv6f-37c6fc48-dcc8-4a62-80f9-457a4cf887fd.png/v1/fill/w_1192,h_670,q_70,strp/ych__19__open__by_semiesha_dm9sv6f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbTlzdjZmLTM3YzZmYzQ4LWRjYzgtNGE2Mi04MGY5LTQ1N2E0Y2Y4ODdmZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yUX4L6b1slKH4XIevFqnYPkmitrVS6jv3qgVdZl5dpw",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dmahby1-78ccfc26-a822-42c3-bec9-5e815bda03ac.png/v1/fill/w_1192,h_670/ych__20__open__by_semiesha_dmahby1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbWFoYnkxLTc4Y2NmYzI2LWE4MjItNDJjMy1iZWM5LTVlODE1YmRhMDNhYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cdQnQwM-fXogECAtULymrpBDX8tkTGzapYn6_gBugco",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dmcpqdz-65b6c9ef-eca8-4011-8e9c-eb652f078490.png/v1/fill/w_1192,h_670,q_70,strp/ych__21__open__by_semiesha_dmcpqdz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbWNwcWR6LTY1YjZjOWVmLWVjYTgtNDAxMS04ZTljLWViNjUyZjA3ODQ5MC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vkOhj7cGD62l12EjPR5h2MDCPZXVRcz0Z92E2bjvjfg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dmcwjrl-7c6728db-5ac9-4df2-9c58-7ee72cb150b6.png/v1/fill/w_1192,h_670,q_70,strp/ych__22__open__by_semiesha_dmcwjrl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbWN3anJsLTdjNjcyOGRiLTVhYzktNGRmMi05YzU4LTdlZTcyY2IxNTBiNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oQPc8fhSJhXlhhwradFD6hKRXOMp8Y3KjR9eE63Rgt4",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dmed6nu-b9a365cc-2511-426a-98c5-27fb3e3f8fe1.png/v1/fill/w_1192,h_670,q_70,strp/ych__23__open__by_semiesha_dmed6nu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbWVkNm51LWI5YTM2NWNjLTI1MTEtNDI2YS05OGM1LTI3ZmIzZTNmOGZlMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NMNP39Ajx3cT8Js6Ql2c87wuKHDXyAh3xbfJxsXnfVU",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dmesucb-fea172b1-c09e-4362-89b5-1c7e07639e56.png/v1/fill/w_1192,h_670,q_70,strp/ych__24__open__by_semiesha_dmesucb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbWVzdWNiLWZlYTE3MmIxLWMwOWUtNDM2Mi04OWI1LTFjN2UwNzYzOWU1Ni5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jwjwNsRVVHy8ooQDcWa_htl7rXtHuallQtx9JPH8niY",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dmf0m85-b86cb4c0-14db-4c1a-bda0-bdf62951a2e0.png/v1/fill/w_1192,h_670,q_70,strp/ych__25__open__by_semiesha_dmf0m85-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzY4NDE1OGViLTVkZDMtNDg3My1hY2FiLTQyMTkzMjQ4YzBjYy9kbWYwbTg1LWI4NmNiNGMwLTE0ZGItNGMxYS1iZGEwLWJkZjYyOTUxYTJlMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oGnLNzjWlGi-Gq3R7Ou0FzgMOgoTCAM6sqqp6qP-fm0",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dm928oc-cbbac8e9-c881-4059-9289-72573b917709.png/v1/fit/w_828,h_1380,q_70,strp/ych__17__open__by_semiesha_dm928oc-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEzNCIsInBhdGgiOiIvZi82ODQxNThlYi01ZGQzLTQ4NzMtYWNhYi00MjE5MzI0OGMwY2MvZG05MjhvYy1jYmJhYzhlOS1jODgxLTQwNTktOTI4OS03MjU3M2I5MTc3MDkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Qoi_GvnhqBB6fhGC1JJQrKKzIQsOtRdZreqvAnES6Dc",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/684158eb-5dd3-4873-acab-42193248c0cc/dm8xk9e-1fa7a725-5f25-4808-89a6-3865959c18f4.png/v1/fit/w_828,h_1380,q_70,strp/ych__16__open__by_semiesha_dm8xk9e-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEzNCIsInBhdGgiOiIvZi82ODQxNThlYi01ZGQzLTQ4NzMtYWNhYi00MjE5MzI0OGMwY2MvZG04eGs5ZS0xZmE3YTcyNS01ZjI1LTQ4MDgtODlhNi0zODY1OTU5YzE4ZjQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.drgFIGSOpG7yydfsV3lCz33zS6NdYPhduynXNAs7rik"

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
