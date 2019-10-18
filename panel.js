(function($){
    $('#menu_toggle_btn').on('click', function(e){
      e.preventDefault();
      $(this).closest('.sidebar').toggleClass('active');
    });
    $('.sidebar').hover(function(){
      $('.content_area').addClass('menu-actived');
      $('.hidder').addClass('active');
    }, function(){
      $('.content_area').removeClass('menu-actived');
      $('.hidder').removeClass('active');
    });
  })(jQuery);