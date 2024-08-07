// 移除背景影片
// 使用$啟用jquery
$(function(){
    if($(window).width() < 821){
        $('#about video').remove();
    }
}); 

