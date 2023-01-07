$(function () {
    // body 스크롤 막음
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };
    // body 스크롤 풀기
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    };

    $('.lesson_time .lesson_btn_wrap .lesson_btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.lesson_time .lesson_btn_wrap .lesson_btn').removeClass('active');
            $(this).addClass('active');
        };
    });

    $('.lesson_area .lesson_btn_wrap .lesson_btn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.lesson_area .lesson_btn_wrap .lesson_btn').removeClass('active');
            $(this).addClass('active');
        };
    });

    // 예약하기 결제 페이지
    function rezPay(){

        // 쿠폰사용
        const couponUse = $('#coupon_chk');
        const pointInput = $('.lesson .point_input');
        const pointAll = $('.lesson .input_btn');
        couponUse.click(()=>{
          if(couponUse.is(":checked")){
            pointInput.attr("disabled", false);
            pointAll.attr("disabled", false);
          }else{
            pointInput.attr("disabled", true);
            pointAll.attr("disabled", true);
          };
        });

        // 결제동의
        const agreeChk = $('.lesson #allagree');
        const rezBtn = $('.lesson .btn_group .red_btn');
        agreeChk.click(()=>{
          if(agreeChk.is(":checked")){
            rezBtn.attr("disabled", false);
          }else{
            rezBtn.attr("disabled", true);
          };
        });

        // 예약진행취소, 확인 모달
        const lastBtn = $('.reservation_info .rez_btn');
        const rezModal = $('.lessonRez_modal');
        
        lastBtn.click(()=>{
          rezModal.fadeIn(200);
          scrollOff();
        });

        // 예약취소 모달
        const rezCancel = {
          btn : $('.complete_section .cancel_btn'),
          modal : $('.rez_complete_page .rezCancel_modal')
        };

        rezCancel.btn.click(()=>{
          rezCancel.modal.fadeIn(200);
          scrollOff();
        });

        const cancelApply = rezCancel.modal.find('.apply_btn');

        
        cancelApply.click(()=>{
          rezCancel.modal.fadeOut(200);
          $('.rez_complete_page .btn_group').css('display','none');
          $('.rez_complete_page .re_rez_btn').css('display','block');
          $('.rez_complete_page .enter_num').remove();
          $('.rez_complete_page strong').remove();
          $('.rez_complete_page h3').empty();
          $('.rez_complete_page h3').text('예약이 취소되었습니다.');
          scrollOn();

        });
      }
      rezPay();

    //모달
    $(".lesson_gogo").click(function(){
        $(".lesson_modal").fadeIn(200);
        scrollOff();
    });

    $(".modal_cancel").click(function(){
        $(".lesson_clear_modal").fadeIn(200);
        scrollOff();
    });

    // 레슨예약 강사선택 활성화
    let lessonObj = "";
    const storeList = $(".lesson .lesson_day_wrap .select_list .list");
    const inputDate = $('.lesson input[type=date]');

    storeList.click(()=>{
      lessonObj = inputDate.val();
      if(lessonObj !== ""){
        if($('.select').hasClass('inactive_select')){
          $('.select').removeClass('inactive_select');
          $('.select').addClass('select_wrap');
        };
      };
    });

    inputDate.on('change', ()=>{
      if(storeList.hasClass('selected')){
        $('.select').removeClass('inactive_select');
        $('.select').addClass('select_wrap');
      };
    });

    // 시간선택, 강사프로필 보이기
    $(document).on('click', '.lesson_teacher_wrap .select_list .list', function(){
      $('.teacher_profil').removeClass('hide_content');
      $('.lesson_time').removeClass('hide_content');
    });

    // 타석선택 보이기
    $('.lesson_time .lesson_btn').click(()=>{
      const activeBtn = $('.lesson_time .lesson_btn.active').length

      if(activeBtn == 1){
        $('.lesson_area').removeClass('hide_content');
      }else{
        $('.lesson_area').addClass('hide_content');
      };
    });

    // 예약버튼 보이기
    $('.lesson_area .lesson_btn').click(()=>{
      const activeBtn = $('.lesson_area .lesson_btn.active').length

      if(activeBtn == 1){
        $('.btn').removeClass('hide_content');
      }else{
        $('.btn').addClass('hide_content');
      };
    });
})