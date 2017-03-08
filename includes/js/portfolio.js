$(document).ready(function(){
	$('li#all').hide();
  
  // When the label is clicked
  $('.menu-label').click(function(){
    $('.dropdown').slideToggle();
  });
	
  $(".horizontal-sort li").click(function(){
    $(".horizontal-sort li").removeClass("selected");
    $(this).addClass("selected")

  });

  // When a dropdown item is clicked
  $('.dropdown li').click(function(){
    var title = $(this).text();
    // Change the Label title
    $('.menu-label span').text(title);
    
    // Close the dropdown
    $('.dropdown').slideToggle();
    
    if ($(this).attr('id') != "all") {
      $('li#all').show();
    } 
    else {
      $('li#all').hide();
    }
    // $('li.active').fadeIn().removeClass('active');
    // $(this).addClass('active').fadeOut();
  });

  var scroll_location = 0;
  // When a portfolio element is clicked
  $('li.folio-item').click(function(){
    $('.gallery-modal').slideToggle('slow');
    scroll_location = $('body').scrollTop();
    $('body').animate({scrollTop: 0}, scroll_location/1.6);
    // Blur everything else
  })
  $('.close-modal').click(function(){
    $('.gallery-modal').slideToggle('slow');
    $('body').animate({scrollTop: scroll_location}, scroll_location/1.6);
  });

});

// Sticky header
$(document).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.main-header').addClass('fixed');
    $('.portfolio-title').css('padding-top', 100);
  }
  else {
    $('.main-header').removeClass('fixed');
    $('.portfolio-title').css('padding-top', 0);
  }
});