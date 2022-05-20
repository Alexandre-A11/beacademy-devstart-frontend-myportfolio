const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector("h1");
    const typeSpan = '<span class="typing" aria-hidden="true"></span>';
    // array with texts to type in typewriter
    const dataText = [
        "Olá, meu nome é Alexandre.",
        "Seja bem vindo ao meu portfólio. 😁",
    ];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < text.length) {
            // add next character to h1
            h1.innerHTML = text.substring(0, i + 1) + typeSpan;

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == "function") {
            // call callback after timeout
            setTimeout(fnCallback, 4000);
            h1.innerHTML =
                text
                    .replace(".", "<span class='dot'>.</span>")
                    .replace(
                        "Alexandre",
                        "<span class='name-highlight'>Alexandre</span>"
                    ) + typeSpan;
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    // start the text animation
    StartTextAnimation(0);
});
