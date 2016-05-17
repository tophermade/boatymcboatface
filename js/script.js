$(document).ready(function(){
    var w                       = $( document ).width();
    var canRunSlider            = true;
    var headshotAnimationName   = "boingOutDown";

    function SetupScroller(){
        var mh = 0;
        var teamEntries = $(".team ul li ul li");

        $(teamEntries).each(function(){
            if($(this).height() > mh){
                mh = $(this).height();
            }
        });

        $(teamEntries).height(mh);
        $(".team-pics").height(mh);
    }


    $(".pic-nav a").click(function(){
        if(canRunSlider){
            canRunSlider = false;
            var showNum = $(this).attr("href").replace(/\D/g,'');

            $(".pic-nav a").removeClass("active");
            $(this).addClass("active");


            $(".team ul li ul li.active").each(function(){
                $(this).find(".headshot").addClass(headshotAnimationName);
                $(this).fadeOut(800, function(){
                    $(this).removeClass("active");
                    $(this).find(".headshot").removeClass(headshotAnimationName);
                    $(".team ul li ul li:nth-child("+ showNum +")").addClass("active");
                    canRunSlider = true;
                });

                $(".team ul li ul li:nth-child("+ showNum +")").fadeIn(1200);
            });
        }

        return false;
    });


    if(w>940){
        SetupScroller();
    }
});