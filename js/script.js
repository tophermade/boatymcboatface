$(document).ready(function(){
    var w                       = $( document ).width();
    var sd                      = 0;
    var canRunSlider            = true;
    var headshotAnimationName   = "boingOutDown";



    // functions
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

    function MoveHero(){
        heroOffset = sd/6;

        if(heroOffset > 150){
            heroOffset = 150;
        } else if(heroOffset < 0){
            heroOffset =0;
        }

        $(".hero-image").css({
            top: -heroOffset,
            bottom: heroOffset,
            right: -100 - heroOffset/3,
            left: -100 + heroOffset/3
        });
    }



    // click functions
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

    $("#quicklinks nav strong").click(function(){
        $("#quicklinks ul").toggle();
    });

    $("#grip").click(function(){
        $("#nav ul").toggle();
    });



    // scrolling
    $(document).scroll(function() {
        if($( document ).width()>940){
            sd = $(document).scrollTop();
            MoveHero();
        }
    });



    // initalize
    if(w>940){
        SetupScroller();
    }
});