const track = document.querySelector(".image-track");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

const totalSlides = 3;

const slideWidth = 25;


/* =========================
   NEXT
   ========================= */

function nextSlide() {

    currentSlide++;

    track.style.transition =
        "transform 0.8s ease-in-out";

    track.style.transform =
        `translateX(-${currentSlide * slideWidth}%)`;


    /*
       Reached duplicate Image 1
    */

    if (currentSlide === totalSlides) {

        setTimeout(() => {

            track.style.transition = "none";

            currentSlide = 0;

            track.style.transform =
                "translateX(0)";

        }, 800);
    }
}


/* =========================
   PREVIOUS
   ========================= */

function previousSlide() {

    if (currentSlide === 0) {

        /*
           Jump to duplicate Image 1
        */

        track.style.transition = "none";

        currentSlide = totalSlides;

        track.style.transform =
            `translateX(-${currentSlide * slideWidth}%)`;


        /*
           Then slide backwards to Image 3
        */

        setTimeout(() => {

            track.style.transition =
                "transform 0.8s ease-in-out";

            currentSlide = totalSlides - 1;

            track.style.transform =
                `translateX(-${currentSlide * slideWidth}%)`;

        }, 50);

    }

    else {

        currentSlide--;

        track.style.transition =
            "transform 0.8s ease-in-out";

        track.style.transform =
            `translateX(-${currentSlide * slideWidth}%)`;
    }
}


/* =========================
   BUTTON CLICK
   ========================= */

nextBtn.addEventListener("click", () => {

    nextSlide();

    restartAutoSlide();

});


prevBtn.addEventListener("click", () => {

    previousSlide();

    restartAutoSlide();

});


/* =========================
   AUTO SLIDE
   ========================= */

let autoSlide = setInterval(() => {

    nextSlide();

}, 4000);


/* =========================
   RESTART AUTO SLIDE
   ========================= */

function restartAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        nextSlide();

    }, 4000);
}