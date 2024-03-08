$(document).ready((() => { 
    for (i = 0; i < 12; i++) {
        var a = "<span class=spiral id='line" + i + "'></span>", s = 15 * i;
        $(".pos").append(a), $("#line" + i).css("rotate", s + "deg")
    }
}));