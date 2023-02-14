$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:true,
    dots:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class="fa-solid fa-angles-right"></i></button>',

})


// 슬라이드 화면 정지,시작 버튼 효과 
$('.article1 .plpa i').on('click', function(){
    if($(this).hasClass('fa-pause')){
        $('.article1 .slide_group').slick('slickPause')
        $(this).removeClass('fa-pause').addClass('fa-play')
    }else{
        $('.article1 .slide_group').slick('slickPlay')
        $(this).removeClass('fa-play').addClass('fa-pause')
    }
})


//스크롤 이벤트 

//article2, article4, article6 부분

let article2Near = $('.article2').offset().top - $(window).height()/2

let article4Near = $('.article4').offset().top - $(window).height()/2

let article6Near = $('.article6').offset().top - $(window).height()/2


$(window).on('scroll', function(){
   let sct =  $(this).scrollTop()
   if(sct >= article2Near){
    $('.aboutus').addClass('on')
   }else{
    $('.aboutus').removeClass('on')
   }


   if(sct >= article4Near){
    $('.article4').addClass('on')
   }else{
    $('.article4').removeClass('on')
   }


   if(sct >= article6Near){
    $('.article6').addClass('on')
   }else{
    $('.article6').removeClass('on')
   }

})


// article4 이미지 클릭하면 이미지를 모달창에서 크게 보기

$('.article4 ul li img').on('click', function(){
    let src = $(this).attr('src')
    let modal = '<div class="modal">'
    modal += `<div class="imgbox">`
    modal += `<img src="${src}" alt="">`
    modal += `<button type="button"><i class="fa-solid fa-x"></i></button>`
    modal += `</div>`
    modal += `</div>`

    $('body').append(modal)

    $('.modal').css({
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        background:'rgba(0,0,0,0.7)'
    })


    if ($('html').hasClass('pc')){
        $('.imgbox').css({
            position:'absolute',
            width:'35vw',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)'
        })
    }else {
        $('.imgbox').css({
            position:'absolute',
            width:'80vw',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)'
        })
    }

    $('.imgbox button').css({
        position:'absolute',
        top:'0',
        right:'0',
        background:'#000',
        color:'#fff',
        border : 'none',
        padding:'4px 4px',
        fontSize: '18px'
    })

})

// 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
$('body').on('click', '.modal button, .modal', function(){
    $('.modal').hide()
})




// article6 이미지 클릭하면 이미지를 모달창에서 크게 보기

$('.article6 ul li img').on('click', function(){
    let src = $(this).attr('src')
    let modal = '<div class="modal">'
    modal += `<div class="imgbox">`
    modal += `<img src="${src}" alt="">`
    modal += `<button type="button"><i class="fa-solid fa-x"></i></button>`
    modal += `</div>`
    modal += `</div>`

    $('body').append(modal)

    $('.modal').css({
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        background:'rgba(0,0,0,0.7)'
    })


    if ($('html').hasClass('pc')){
        $('.imgbox').css({
            position:'absolute',
            width:'30vw',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)'
        })
    }else {
        $('.imgbox').css({
            position:'absolute',
            width:'80vw',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)'
        })
    }

    $('.imgbox button').css({
        position:'absolute',
        top:'0',
        right:'0',
        background:'#000',
        color:'#fff',
        padding:'5px 5px',
        fontSize: '20px'
    })

})

