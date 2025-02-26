$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var fades = $(".fade");

    for (var i = 0; i < fades.length; i++) {
        var fade = fades[i];

        if ($(fade).position().top < pageBottom) {
            $(fade).addClass("visible");
        }
    }
});


const hoverLink = document.getElementById("play");
const hoverAudio = document.getElementById("click");

hoverLink.addEventListener("mouseenter", () => {
    hoverAudio.play();
});

hoverLink.addEventListener("mouseleave", () => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
});