// Hide navbar when nav-item has been clicked
$('.nav-item').on('click',function() {
    $('.navbar-collapse').collapse('hide');
});


// Add active class to current id in navbar when scrolling down the page
$(window).on('scroll', function(event){
    var scrollPos = $(document).scrollTop();
    $(".navbar .nav-item .nav-link").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      //If scrolling-position goes below the certain section id breaking point, 
      //then the active class goes next to that specific id and active class removed from previous link.
      if (refElement.position().top <= scrollPos+1 && refElement.position().top + refElement.height() > scrollPos ) {
        currLink.parent().addClass("active").siblings().removeClass("active"); 
        return;
      }
      //Else remove the current active class.
      else{
        currLink.parent().removeClass("active");
      }
    })
})