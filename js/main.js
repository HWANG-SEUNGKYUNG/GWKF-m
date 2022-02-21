var $mainBtn = $('.navbar-gnb > li > a');

$mainBtn.click(function(){ //모바일 상태에서 서브메뉴 슬라이드
     if( !$(this).parents('li').is('.act') ) {  //li에 act클라스가 없을때(닫혀있는상태)
        $('.navbar-gnb > li').removeClass('act'); 
        $(this).parents('li').addClass('act');  
        $('.icon').removeClass('on');
        $(this).siblings('.icon').addClass('on'); 

    } 
    else {     //li에 act클라스가 있을때(열려있는상태)  
        $('.navbar-gnb > li').removeClass('act');
        $('.icon').removeClass('on');
    }      

});//모바일 상태에서 서브메뉴 슬라이드 -끝

//모바일 상태에서 햄버거 버튼을 누르면 사이드바 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.side-gnb').animate({right:0},500);
        $('.navbar-wrap').animate({left:-300},500);
    } else {
        $('.side-gnb').animate({right:-300},500);
        $('.navbar-wrap').animate({left:0},500);
    }
});

//메인이미지 슬라이더
$('.main_visual_imgs').slick({
    autoplay:true,
    autoplaySpeed:1200,
    speed:1800,
    arrows:false,
    dots:true
});