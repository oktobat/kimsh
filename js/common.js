var deviceSize = 1024 

function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    return $('html').width()
}

var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO 

if(scD>0){
    deviceSize = deviceSize - scD 
}


let ww = $(window).width()
if(ww>deviceSize){
    $('html').addClass('pc')
}else{
    $('html').addClass('mobile')
}


$(window).on('resize', function(){
    let ww = $(window).width()
    if(ww>deviceSize && !$('html').hasClass('pc')){
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    }else if(ww<=deviceSize && !$('html').hasClass('mobile')){
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
       
})

// 인트로화면 0%~ 100% 이후에 메인화면 넘어가기 
$(window).on('load', function(){

    let count = 0; 
    let timer = setInterval(add, 25)

    function add(){
        count++
        if(count>=100) { 
            clearInterval(timer) 
            $('.introAni').delay(500).fadeOut()

        }
        $('.introAni div').eq(1).text(count+'%')
    }


    // 새로고침하면 현재 위치한 스크롤바 위치를 맨위로 
    $('html').animate({
        scrollTop:0
    }, 100)

})




//==========헤더 메뉴 하단메뉴 부분(공부목적)=============================

// $('#header .open').on('click', function(){
//     $(this).next().stop().slideToggle()
// })

// $('#nav .depth1 > li').on('mouseover mouseout', function(){
//     if ( $('html').hasClass('pc') ) {
//         $(this).find('.depth2').stop().slideToggle()
//     }
// })

//======================================================================

// $('#nav .depth1 > li > button').on('click', function(){
//     if ( $('html').hasClass('mobile') ) {
//         if ( $(this).find('i').hasClass('fa-chevron-down') ) {
//             $(this).next().stop().slideDown()
//             $(this).find('i').removeClass('fa-chevron-down')
//             .addClass('fa-chevron-up')
//         } else {
//             $(this).next().stop().slideUp()
//             $(this).find('i').removeClass('fa-chevron-up')
//             .addClass('fa-chevron-down')
//         }
//         return false
//     }
// })

