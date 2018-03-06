/*-------------------------------
「同意する」にチェックが入ったらボタン　(aタグ使用)を表示する　

Copyright (c) 2018 emi

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
-------------------------------*/
//sample1
$(function(){
  $('.agreechk').change(function() {
    var chkprop = $(this).prop('checked');
    if(chkprop == true ){
     $('.btn').addClass('a_on');
    }else{
      $('.btn').removeClass('a_on');
    }
  });
});

//sample2
$(function(){
  a_tag = $('.detach_a').contents().detach();
  $('.agreechk2').change(function() {
    var chkprop2 = $(this).prop('checked');
    if(chkprop2 == true ){
      $('.detach_a').html(a_tag);
    }else{
      a_tag = $('.detach_a').contents().detach();
    }
  });
});

//sample3
$(function(){
  $('.agreechk3').change(function() {
    var chkprop3 = $(this).prop('checked');
    if(chkprop3 == true ){
     $('.btn3 a').removeClass('a_disabled');
    }else{
      $('.btn3 a').addClass('a_disabled');
    }
  });
});
