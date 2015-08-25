var samples = ['accounting-degree','icon-color','job-board'];
var samplesQuantity = samples.length;

$(document).ready(function(){

    for (var i = 0; i < samplesQuantity; i++) {
        var sample = samples[i];


    }
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
    });

    var container = $('.sample-content');

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        var html = jQuery('html');
        html.css('overflow', 'auto');
        $('#sample-window').fadeOut(200);
    }
});
