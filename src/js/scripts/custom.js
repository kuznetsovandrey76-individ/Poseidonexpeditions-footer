$( document ).ready(function() {

    var updateCollapse = function(block) {
        var data = $(block).attr("data-collapse");

        if (data === "true" ) {
           
            // Обнуляю
            $("[data-collapse='true']")
                .attr("data-collapse", "true")
                .removeClass("corner-up")
                .addClass("corner-down")
            $("[data-collapse='false']")
                .attr("data-collapse", "true")
                .removeClass("corner-up")
                .addClass("corner-down")

            // Выбранный 
            block.toggleClass("corner-down");
            block.toggleClass("corner-up");
            $(block).attr("data-collapse", "false")

        } else {
            block.toggleClass("corner-down");
            block.toggleClass("corner-up");
            $(block).attr("data-collapse", "true"); 
        }
    }

    $('.footer-menu__heading button').on('click', function() {
        var choose = $(this).parent().parent();
        updateCollapse(choose);
    });

}); 
