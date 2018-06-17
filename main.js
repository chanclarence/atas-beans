$(document).ready(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling (thanks to Kevin Powell for the tutorial - https://www.youtube.com/watch?v=x0YnVwAuNQI)
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500)
    })
});