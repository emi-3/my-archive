$(function () {
  $(".logo").css({
    opacity: '0'
  });
  $("#CDT").css({
    opacity: '1',

  });


  setTimeout(function () {
    $(".logo").stop().animate({
      opacity: '1'
    }, 2200);
        $("#CDT").stop().animate({opacity: '0',top:'-50px'}, 1000);
  }, 3000);
});


