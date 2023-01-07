$(function() {
    // body 스크롤 막음
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    }
    // body 스크롤 풀기
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    }
    
    function cheakInput () {
        var Input = $(".inquiry_wrap input").val();
        var textArea = $(".inquiry_wrap textarea").val();
        var goBtn = $(".inquiry_wrap .btn")
        console.log(Input,textArea)
        if (Input !== '' && textArea !== '') {
            goBtn.removeClass('opacity');
        } else {
            goBtn.addClass('opacity');
        }
    }

    $('.inquiry_wrap input , .inquiry_wrap textarea').on('keyup', cheakInput)

    //문의 등록
    $(".service_cont .inquriy_btn").click(function(){
        $(".inquiry_modal1").fadeIn(200);
        scrollOff();
    })

    $(".inquiry_modal1 .apply_btn").click(function(){
        $(".inquiry_modal1").fadeOut(200);
        $(".inquiry_modal2").fadeIn(200);
        scrollOff();
    })

    //문의 수정
    $(".service_cont .tresh_btn").click(function(){
        $(".inquiry_modal1").fadeIn(200);
        scrollOff();
    })

    $(".inquiry_modal1 .first_apply").click(function(){
        $(".inquiry_modal1").fadeOut(200);
        $(".inquiry_modal2").fadeIn(200);
        scrollOff();
    })

    $(".inquiry_modal2 .last_apply").click(function(){
        $(".inquiry_modal2").fadeOut(200);
        scrollOff();
    })
});
