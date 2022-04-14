$(document).ready(function (){
    $("img").click(function(){
        $(this).fadeOut(500,function (){
            $(this).attr("src","img/lol.jpg").fadeIn(500);
        });
    });
});

$('a[href^="#"]').click(function (){
    let valHref = $(this).attr("href");
    $('html,body').animate({scrollTop : $(valHref).offset().top -35 + "px"});
});