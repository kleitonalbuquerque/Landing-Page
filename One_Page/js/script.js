$(".iframe-container").on("click", function(){
    $(this).children("iframe").addClass("active");
});
$(".iframe-container").on("mouseleave", function(){
    $(this).children("iframe").removeClass("active");
});
$('.icon-social').tooltip();
var bannerHeight = $("#banner").outerHeight(true);
$("#navbar").affix({
    offset: {
        top:  bannerHeight
    }
});
$("#navbar").on("affix.bs.affix", function(){
    $("#banner").css("margin-bottom","52px");
});
$("#navbar").on("affix-top.bs.affix", function(){
    $("#banner").css("margin-bottom","");
});