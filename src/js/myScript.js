$(document).ready(function (){
    $("img").click(function(){
        $(this).fadeOut(500,function (){
            $(this).attr("src","img/lol.jpg").fadeIn(500);
        });

    });

});

