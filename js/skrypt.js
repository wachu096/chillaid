//----------JQuery----------//
$(document).ready(function(){

        $(".progress-bar").loading();

        $(window).scroll(function(){
            if($(window).scrollTop() > 100){
                $("#scrollButton").fadeIn();
            } else {
                $("#scrollButton").fadeOut();
            }  
            });
               
        $("#scrollButton").click(function(){
            $("html").animate({scrollTop: '0'}, 500);   
        });

});


/*$(document).scroll(function(){
        var scrollPosition = window.scrollY;
    var divPosition = $("#progressBars").offset().top;

     if(scrollPosition <= divPosition){
        $(".progress-bar").loading();
     }
    }); */