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

    function checkItem () {
        let max = $('.my_coupon_list.click').length;
        let arr = $(".my_coupon_list_wrap .on").length;
        if(arr == max){
            return true
        }else{
            return false
        }
    }

    function all (){
        if(!checkItem()){
            $("#all_agree").prop('checked',false)
        }else{
            $("#all_agree").prop('checked',true)
        }
    }
    
    $('.my_coupon_list.click').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            all();
        } else {
            $(this).addClass('on');
            all();
        }
        useBtn()
    })
    function useBtn (){
        let arr = $('.my_coupon_list.click.on').length
        if(arr !== 0){
            $('.my_coupon_go').addClass('use');
            $(".my_coupon_go img").addClass('on');
            $(".my_coupon_go p").addClass('on');
        }else{
            $('.my_coupon_go').removeClass('use');
            $(".my_coupon_go img").removeClass('on');
            $(".my_coupon_go p").removeClass('on');
        }
    }
    let allChk = () => {  
        if($("#all_agree").is(':checked')){
            $(".my_coupon_list_wrap").find(".my_coupon_list.click").addClass('on')
        }else{
            $(".my_coupon_list_wrap").find(".my_coupon_list.click").removeClass('on')
        }
        useBtn()
    }

    $("#all_agree").on("click", function () {        
        allChk();
    })

    //정보수정 모달
    $(".signUp_btn").click(function(){
        $(".retouch_modal").fadeIn(200);
        scrollOff();
    })

    $(".retouch_modal .apply_btn").click(function(){
        $(".retouch_modal").fadeOut(200);
        scrollOff();
    })
    
    $(".end_btn").click(function(){
        $(".retouch_clear").fadeIn(200);
        scrollOff();
    })
   
    //쿠폰사용 모달
    $(document).on('click', '.my_coupon_go.use', function(){
        $(".coupon_modal1").fadeIn(200);
        scrollOff();
    });

    $(".coupon_modal1 .apply_btn").click(function(){
        $(".coupon_modal1").fadeOut(200);
        $(".coupon_modal2").fadeIn(200);
        scrollOff();
    })

    $(".save_btn").click(function(){
        $(".one_modal").fadeIn(200)
        scrollOff();
    })

    //메달
    $(".my_lank .what_icon").click(function(){
        $(".medal_modal").fadeIn(200);
        scrollOff();
    })

});