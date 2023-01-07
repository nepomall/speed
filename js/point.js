$(function () {
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

    let page = $('#wrap').hasClass('Present');
    let state = page ? [false , false , false, false] : [false , false , false]

    function checking(){
        let check = state.findIndex((item) => {
            return item === false 
        } )
        if(check === -1){
            $(".point_wrap .btn").removeClass('opacity');
        }else{
            $(".point_wrap .btn").addClass('opacity');
        }
    }

    $('.present_id input').on('input',function () {
        let val = $(this).val()
        if(val){
            state[3] = true;
            checking();
        }else{
            state[3] = false;
            checking();
        }
    })

    $('.charging_money .money_list').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            state[0] = false
        } else {
            $(".charging_money .money_list").removeClass('active');
            $(this).addClass('active');
            state[0] = true
        }
    })
    
    $('.payment .payment_option').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            state[1] = false
        } else {
            $(".payment .payment_option").removeClass('active');
            $(this).addClass('active');
            state[1] = true
        }
    })

    $('.chk').click(function () {
        if($(this).is(':checked')){
            state[2] = true
        }else{
            state[2] = false
        }
        
    })

    $('.charging_money .money_list,.payment .payment_option, .chk').click(function () {
        checking()
    })
    
    $(".charging_btn .btn").click(function(){
        $(".cash_modal").fadeIn(200);
        scrollOff();

    })

});