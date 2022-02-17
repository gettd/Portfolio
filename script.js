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
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "> Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "< Read less";
      moreText.style.display = "inline";
    }
  }