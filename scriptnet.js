//alert("hello");


$(document).ready(function(){
    var factor = 2;
   
    $('#idkwhat').click(function(evt) {
        $(this).animate({
            width: $(this).width()*factor,
            left: '-=' + $(this).width()/factor
           
        });
    
    });

});