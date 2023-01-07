$(document).ready(()=>{
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

      // 예약하기 페이지-------------
      function rezPage(){

        // 타석 선택----------
        function sitChose(){
          const sitBtn = $('.sit_list .list');

          sitBtn.click(function(){
            sitBtn.removeClass('active');
            $(this).addClass('active');
          });
        };

        // 시간 선택----------
        // function timeChose(){
        //   const timeBlock = $('.time_bar .list');
        //   const sitBtn = $('.sit_list .list');
        //   let idxAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        //   timeBlock.click(function(){
        //     if($(this).hasClass('possible') && sitBtn.hasClass('active')){
        //       $(this).removeClass('possible');
        //       $(this).addClass('checked');
        //       btnActive();
        //       const fstClick = $(this).closest('.depth').find('.fst').length;
        //       const secClick = $(this).closest('.depth').find('.sec').length;
        //       if(fstClick < 1){
        //         $(this).removeClass('possible');
        //         $(this).addClass('checked');
        //         $(this).addClass('fst');
        //       }else if(secClick < 1){
        //         $(this).removeClass('possible');
        //         $(this).addClass('checked');
        //         $(this).addClass('sec');
                
        //         const fstIdx = $(this).closest('.depth').find('.fst').index();
        //         const secIdx = $(this).closest('.depth').find('.sec').index();
        //         let newArr = fstIdx < secIdx ? idxAll.slice(fstIdx + 1, secIdx) : idxAll.slice(secIdx, fstIdx + 1);

        //         console.log(fstIdx, secIdx, newArr);

        //         document.querySelectorAll('.time_bar .list').forEach((item, idx) => {
        //           for(let i = 0; i < newArr.length; i++) {
        //             if(idx === newArr[i]) item.closest('.depth').find('.list').classList.add('checked');
        //           };
        //         })
        //       };
        //     }else if($(this).hasClass('checked') && sitBtn.hasClass('active')){
        //       $(this).addClass('possible');
        //       $(this).removeClass('checked');
        //       btnActive();
        //     };

        //   });

        // };

        // 수정된 시간 선택 스크립트------------------------
        function newTimeJs(){

          $(document).on('click', '.time_bar .list', function(){
            const sitBtn = $('.sit_list .list');
            let idxAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

            if($(this).hasClass('possible') && sitBtn.hasClass('active')){
              const fstClick = $(this).closest('.depth').find('.fst').length;
              const secClick = $(this).closest('.depth').find('.sec').length;

              if(fstClick < 1){
                $(this).removeClass('possible');
                $(this).addClass('checked');
                $(this).addClass('fst');
              }else if(secClick < 1){
                $(this).removeClass('possible');
                $(this).addClass('checked');
                $(this).addClass('sec');
                
                const fstIdx = $(this).closest('.depth').find('.fst').index();
                const secIdx = $(this).closest('.depth').find('.sec').index();
                let newArr = fstIdx < secIdx ? idxAll.slice(fstIdx + 1, secIdx) : idxAll.slice(secIdx + 1, fstIdx);
                let slideIdx = $(this).closest('.swiper-slide').index();
                let barIdx = $(this).closest('.time_bar').index();
                console.log(fstIdx, secIdx, newArr);

                document.querySelectorAll('.swiper-slide').forEach((topItem, topIdx) => {
                  if(topIdx === slideIdx){
                    const timeBar = topItem.querySelectorAll('.time_bar');
                    timeBar.forEach((item, index) => {
                      if(index === barIdx){
                        const barList = item.querySelectorAll('.list');
                        barList.forEach((items, idx) =>{
                          for(let i = 0; i < newArr.length; i++){
                            if(idx === newArr[i]){
                              items.classList.add('checked');
                              items.classList.remove('possible');
                            };
                          };
                        });
                      };
                    });
                  };
                });

                btnActive();
              }else{
                $(this).closest('.depth').find('.checked').removeClass('fst');
                $(this).closest('.depth').find('.checked').removeClass('sec');
                $(this).closest('.depth').find('.checked').addClass('possible');
                $(this).closest('.depth').find('.list').removeClass('checked');
              };
            }else{
              $(this).closest('.depth').find('.checked').removeClass('fst');
              $(this).closest('.depth').find('.checked').removeClass('sec');
              $(this).closest('.depth').find('.checked').addClass('possible');
              $(this).closest('.depth').find('.list').removeClass('checked');
            };

          });

        };

        // 예약하기 버튼 및 시간 텍스트 활성 비활성----
        function btnActive(){
          const rezBtn = $('.rez_page .last_step .active_btn');
          const textArea = {
            chked : $('.rez_page .last_step .time_checked'),
            noChk : $('.rez_page .last_step .no_check')
          };
          const checkTime = $('.time_bar .checked').length;
            if(checkTime > 0){
              rezBtn.attr('disabled', false);
              textArea.chked.css('display','block');
              textArea.noChk.css('display','none');
            }else{
              rezBtn.attr('disabled', true);
              textArea.chked.css('display','none');
              textArea.noChk.css('display','block');
            };
        };

        // 타석 선택 클릭 활성화--------
        let rezObj = "";
        const storeList = $(".rez_page .select_list .list");
        const inputDate = $('.rez_page input[type=date]');

        storeList.click(()=>{
          rezObj = inputDate.val();
          if(rezObj !== ""){
            sitChose();
            // timeChose();
            newTimeJs();
          };
        });

        inputDate.on('change', ()=>{
          if(storeList.hasClass('selected')){
            sitChose();
            // timeChose();
            newTimeJs();
          };
        });

        // 자주가는 매장 제외 스크립트-----------------
        const favIcon = $('.rez_fav_page .fav_icon');
        const favDel = {
          modal : $('.rez_fav_page .favDelete_modal'),
          cancel : $('.rez_fav_page .favDelete_modal .cancel_btn'),
          apply : $('.rez_fav_page .favDelete_modal .apply_btn')
        };

        favIcon.click(()=>{
          $(this).addClass('active');
          favDel.modal.fadeIn(200);
          scrollOff();
        });

        favDel.cancel.click(()=>{
          favIcon.removeClass('active');
        });
        
        favDel.apply.click(()=>{
          const clickFav = $('.rez_fav_page .fav_icon.active');
          clickFav.closest('.list').remove();
          favDel.modal.fadeOut(200);
          scrollOn();

          if ($(".rez_fav_page .store_list .list").length == 0) {
            $(".rez_fav_page .empty_box").css('display', 'block');
          };
        });


      }
      rezPage();

      // 예약하기 결제 페이지
      function rezPay(){

        // 쿠폰사용
        const couponUse = $('#use_point');
        const pointInput = $('.rez_pay_page .point_input');
        const pointAll = $('.rez_pay_page .input_btn');
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
        const agreeChk = $('.rez_pay_page #agree');
        const rezBtn = $('.rez_pay_page .rez_btn');
        agreeChk.click(()=>{
          if(agreeChk.is(":checked")){
            rezBtn.attr("disabled", false);
          }else{
            rezBtn.attr("disabled", true);
          };
        });

        // 예약진행취소, 확인 모달
        const lastBtn = {
          cancel : $('.reservation_info .cancel_btn'),
          rez : $('.reservation_info .rez_btn')
        };
        const rezModal = {
          cancel : $('.rez_pay_page .rezCancel_modal'),
          apply : $('.rez_pay_page .rezComplete_modal')
        };

        lastBtn.cancel.click(()=>{
          rezModal.cancel.fadeIn(200);
          scrollOff();
        });

        lastBtn.rez.click(()=>{
          rezModal.apply.fadeIn(200);
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

        // const cancelApply = rezCancel.modal.find('.apply_btn');

        
        // cancelApply.click(()=>{
        //   rezCancel.modal.fadeOut(200);
        //   location.href='../reservation/rez_cancel.html';
        //   $('.rez_complete_page .btn_group').css('display','none');
        //   $('.rez_complete_page .re_rez_btn').css('display','block');
        //   $('.rez_complete_page .enter_num').remove();
        //   $('.rez_complete_page strong').remove();
        //   $('.rez_complete_page h3').empty();
        //   $('.rez_complete_page h3').text('예약이 취소되었습니다.');

        //   scrollOn();
        // });
      }
      rezPay();

      // 시간선택 스와이프------------------
      const swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
});
