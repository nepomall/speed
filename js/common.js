function goBack(){
    window.history.back();
}

$(document).ready(()=>{
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
    
    // 모달 닫기 스크립트------
    const modalWrap = document.querySelectorAll('.modal_bg');
    modalWrap.forEach((item, idx) => {
        const closeBtn = item.querySelectorAll('.close_btn');
    
        closeBtn.forEach((items, i) => {
            items.addEventListener('click', () => {
                $(item).fadeOut(200);
                scrollOn();
            });
        });
    });

    // 별버튼 스크립트----------
    const favWrap = document.querySelectorAll('.store_list .list');
    favWrap.forEach((item, index) => {
      const favIcon = item.querySelectorAll('.fav_icon');

      favIcon.forEach((items, i) => {
        items.addEventListener('click', () => {
            if(items.classList.contains('active')){
              items.classList.remove('active');
            }else{
              items.classList.add('active');
              $(".addComplete").fadeIn(200);
                setTimeout(() => {
                    $(".addComplete").fadeOut();
                }, 1000);
            }
        });
      });
    });

    // 셀렉트박스
    function selectBox(){
        const selectBox = $('.select_wrap');
        const selectList = $('.select_list');
        const selectClick = $('.select_list .list');
        // 셀렉트박스 오픈
        $(document).on('click', '.select_wrap', function(){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).find(selectList).slideUp(200);
            }else{
                selectList.slideUp(200);
                selectBox.removeClass('open');
                $(this).addClass('open');
                $(this).find(selectList).slideDown(200);
            };
        });

        // 셀렉트 리스트 클릭
        $(document).on('click', '.select_list .list', function(){
          const selectData = $(this).html();
            if($(this).hasClass('selected')){
                $(this).removeClass('selected');
            }else{
                selectClick.removeClass('selected');
                $(this).addClass('selected');
                $(this).closest('.select_wrap').find('.select_title').html(selectData);
                $(this).closest('.select_wrap').find('.select_title').addClass('active');
            };
        });
        
        // 외부 영역 클릭
        $(document).mouseup(function (e) {
            if ($('.select_wrap').has(e.target).length === 0) {
                selectList.stop().slideUp(200);
                $('.select_wrap').removeClass('open');
            };
        });

        
    }
    selectBox();

    //숫자만 입력 스크립트
    $("input:text[numberOnly]").on("keyup", function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
    });

    // 인풋 텍스트 세자리 수 콤바
    $(document).on('keyup', 'input[inputmode=numeric]', function (event) {
        this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

    // 비밀번호 일치 불일치 스크립트-------------------
    const pw = {
        input : $('.pw_part input'),
        warning : $('.pw_part .warning'),
        possible : $('.pw_part .possible'),
        wrap : $('.pw_part')
    };
    pw.input.keyup(()=>{
        const pwValue = {
            a : $('#pw1').val(),
            b : $('#pw2').val()
        };

        if(pwValue.a != "" || pwValue.b != ""){
            if(pwValue.a == pwValue.b){
                pw.warning.css('display','none');
                pw.possible.css('display','inline');
                pw.wrap.removeClass('active');
            }else{
                pw.warning.css('display','inline');
                pw.possible.css('display','none');
                pw.wrap.addClass('active');
            }
        }else{
            pw.warning.css('display','none');
            pw.possible.css('display','none');
            pw.wrap.removeClass('active');
        }
    });

    // 이메일 유효성 검사 스크립트----------------------
    const eMail = {
        input : $('#emInput'),
        warning : $('.mail_part .warning'),
        possible : $('.mail_part .possible'),
        wrap : $('.mail_part')
    }

    eMail.input.keyup((e)=>{
        const emailVal = $("#emInput").val();
        if(emailVal != ""){
            validEmail(e.target);
        }else{
            eMail.warning.css('display','none');
            eMail.possible.css('display','none');
            eMail.wrap.removeClass('active');
        };
    });

    function validEmail(obj){
        if(validEmailCHeck(obj)==false){
            eMail.warning.css('display','inline');
            eMail.possible.css('display','none');
            eMail.wrap.addClass('active');
        }else{
            eMail.warning.css('display','none');
            eMail.possible.css('display','inline');
            eMail.wrap.removeClass('active');
        };
    }

    function validEmailCHeck(obj){
        const emailChk = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
        return (obj.value.match(emailChk)!=null);
    }

});
