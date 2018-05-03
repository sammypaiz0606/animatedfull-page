$(document).ready(function() {
    $('#menu').click(function() {
       $('#slideMenu').animate({width:'toggle'}, 3000); 
        $('#slideMenu').attr('style', 'display:block');
    });
});