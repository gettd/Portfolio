$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#gotopbtn').fadeIn();
      } else{
        $('#gotopbtn').fadeOut();
      }
    });
  
    $("#gotopbtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });