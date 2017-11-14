/*-------------------------------
link none link off まだできてないページのリンクを切る

Copyright (c) 2017 emi

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
-------------------------------*/
$(function(){

//mainnavi
  $('#mainnavi ul:not(".submenu") li:not(".dropmenu") a').each(function() {
   var LinkHref = $(this).attr("href");
//取得したLinkHrefにまだできてないページの文字が含まれていたら
 if(LinkHref.match('./menu01')) {
   $(this).parents('li').addClass("a_url_none");
　}
 if(LinkHref.match('menu05')) {
   $(this).parents('li').addClass("a_url_none");
　} 
 if(LinkHref.match('/submenu01')) {
   $(this).parents('li:not(.dropmenu)').addClass("a_url_none");
　} 
  // .a_url_noneの子要素のタグのみ削除
  $('.a_url_none').children('a').contents().unwrap();
  });

});
