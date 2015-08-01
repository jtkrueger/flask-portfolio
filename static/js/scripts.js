$(document).ready(function(){
    $('.trigger').on('click', function(e){
    	e.preventDefault();
        $('#sample').load('/samples/accounting-degree');
    });

    $('.close-button').on('click', function(e){
    	e.preventDefault();
    	$('#sample-content').hide();
    });

    $('#clicker').on('click', function(){
    	alert('clicker');
    	$('#clicker').hide();
    	
    });
/*
    $('.close').click(function(){
    	alert("test");
    })

    $(.'introcontent').click(function(){
    	alert('test');
    })*/

})