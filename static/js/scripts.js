$(document).ready(function(){
    $('.trigger').on('click', function(e){
    	e.preventDefault();
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        $('#sample').load('/samples/accounting-degree', function(){
            $('#sample-window').hide().fadeIn('slow');
        });
    });

    $('.close-button').on('click', function(e){
    	e.preventDefault();
        var html = jQuery('html');
        html.css('overflow', 'auto');
    	$('#sample-window').fadeOut('slow');
    });
});

$(document).mouseup(function (e)
{
    var container = $('.sample-content');

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        var html = jQuery('html');
        html.css('overflow', 'auto');
        $('#sample-window').fadeOut('slow');
    }
});
