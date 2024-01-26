$(document).ready(() => {
    for (i = 0; i < 12; i++) {
        var spoke = "<span class=spiral id='line" + i + "'></span>";
        var deg = 15 * i;
        $(".pos").append(spoke);
        $("#line" + i + "").css("rotate", deg + "deg");
    }
});