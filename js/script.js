$(document).ready(function(){
    $('#overlay').addClass('overlay-fade');

    // sidebar functions
    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active')
        $('.sidebarBtn').toggleClass('toggle')
    })
      
})