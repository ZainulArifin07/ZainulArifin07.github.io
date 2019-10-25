$(document).ready( function() {
  
  $('body').on("click", ".larg div h3", function(){
    if ($(this).children('span').hasClass('closse')) {
      $(this).children('span').removeClass('closse');
    }
    else {
      $(this).children('span').addClass('closse');
    }
    $(this).parent().children('p').slideToggle(250);
  });

  $('body').on("click", "nav ul li a", function(){
    var title = $(this).data('title');
    $('.title').children('h2').html(title);
  });
});