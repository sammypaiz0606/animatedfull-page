$(document).ready(function() {
   $('#menu-button').click(function() {
       $('#menu-button').toggleClass('menu-open');
       $('#menu').toggleClass('menu-collapse');
       $('#menu ul li').toggleClass('hidden animated fadeInLeft');
        
   });
});


