var samples = ['accounting-degree','icon-color','job-board','anvil','hay-merchant','nightingale','julep','underbelly','hpc','pastry-war','rice','hmh','tsd','slideshow'];
var samplesQuantity = samples.length;

var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#desktop').outerHeight();
var mobilebarHeight = $('#mobile').outerHeight() + $('#mobile-sub').outerHeight();


$(document).ready(function(){
    $sampleDiv = $('<div id="sample"></div>')
    $("body").append($sampleDiv);


    var didScroll;
    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event){
        didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    

    $("#desktop").sticky({topSpacing:0});
    $("#mobile").sticky({topSpacing:0});
    $("#mobile-sub").sticky({topSpacing:60});

    if ( $(window).width() > 870) {
        console.log("shouldn't be small screen");
        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            
            //if(Math.abs(lastScrollTop - st) <= delta)
            //    return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $("#desktop-sticky-wrapper").fadeOut(200);
                
                
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    
                    $("#desktop-sticky-wrapper").fadeIn(200);
                }
            }
            
            lastScrollTop = st;
        }
    } else {
        console.log("should be small screen");
        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            
            //if(Math.abs(lastScrollTop - st) <= delta)
            //    return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > mobilebarHeight){
                // Scroll Down
                $("#desktop").unstick();
                $("#mobile").unstick();
                $("#mobile-sub").unstick();
                
                
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    
                    $("#desktop").sticky({topSpacing:0});
                    $("#mobile").sticky({topSpacing:0});
                    $("#mobile-sub").sticky({topSpacing:60});
                }
            }
            
            lastScrollTop = st;
        }
        

    }
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);


    $(window).onpopstate = function(){
         console.log("beforeUnload event!");
     };

    

    $('.trigger').on('click', function(e){
        e.preventDefault();
        for (var i = 0; i < samplesQuantity; i++) {
            var sample = samples[i];
            if ( $(this).hasClass(sample) ) {
                var scrollPosition = [
                    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                    self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
                ];
                var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
                html.data('scroll-position', scrollPosition);
                html.data('previous-overflow', html.css('overflow'));
                html.css('overflow', 'hidden');
                window.scrollTo(scrollPosition[0], scrollPosition[1]);
                $('#sample').load('/samples/'+sample, function(){
                    $('#sample-window').hide().fadeIn(200);
                });
            }
        }
    });




});

$(document).mouseup(function (e)
{
    $('.close-button').on('click', function(e){
        e.preventDefault();
        var html = jQuery('html');
        html.css('overflow', 'auto');
        $('#sample-window').fadeOut(200);
        $('#sample header').hide();
        $('#sample footer').hide();
    });

    var container = $('.sample-container');

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        var html = jQuery('html');
        html.css('overflow', 'auto');
        $('#sample-window').fadeOut(200);
        $('#sample header').hide();
        $('#sample footer').hide();
    }
});
