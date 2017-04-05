/**
 * Created by ismet on 03.04.2017.
 */
$(document).ready(function () {
    $(document).on('mouseenter', '#QA', function() {
        $(this).addClass("div-hovered");
        $(this).find("#btnEdit").show();
        $(this).find("#btnDelete").show();
    }).on('mouseleave', '#QA', function() {
        $(this).removeClass("div-hovered");
        $(this).find("#btnEdit").hide();
        $(this).find("#btnDelete").hide();
    });
});