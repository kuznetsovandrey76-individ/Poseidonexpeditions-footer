$( document ).ready(function() {
    $('.footer-menu__heading').on('click', function() {
        $('.corner-up').toggleClass("corner-up corner-down");
        $(this).toggleClass("corner-down");
        $(this).toggleClass("corner-up");
    });
}); 