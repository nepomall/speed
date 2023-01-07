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

    // 매장찾기 페이지 스크립트------------------------
    function storeFind(){
      
      // 검색바 스크립트------------
      const schOption = {
        bar : $('.storeFind_page .search_box input'),
        help : $('.storeFind_page .search_help'),
        list : $('.storeFind_page .store_list')
      };

      schOption.bar.keyup((e)=>{
        if(!!e.target.value > 0){
          schOption.help.css('display','block');
        }else{
          schOption.help.css('display','none');
        };
      });

      schOption.bar.keydown(function (key) {
        if (key.keyCode == 13) {
            schOption.bar.val('');
            $('.storeFind_page .empty_box').css('display','none');
            schOption.list.css('display','block');
        };
      });

      const schClick = {
        list : schOption.help.find('.list'),
        btn : $('.storeFind_page .search_btn')
      }
      schClick.btn.click(()=>{
        schOption.bar.val('');
        $('.storeFind_page .empty_box').css('display','none');
        schOption.help.css('display','none');
        schOption.list.css('display','block');
      });
      schClick.list.click(()=>{
        schOption.bar.val('');
        $('.storeFind_page .empty_box').css('display','none');
        schOption.help.css('display','none');
        schOption.list.css('display','block');
      });

      // 자주가는 매장 제외 스크립트-----------------
      const favIcon = $('.favStore_page .fav_icon');
      const favDel = {
        modal : $('.favDelete_modal'),
        cancel : $('.favDelete_modal .cancel_btn'),
        apply : $('.favDelete_modal .apply_btn')
      };

      favIcon.click(()=>{
        favDel.modal.fadeIn(200);
        scrollOff();
      });

      favDel.cancel.click(()=>{
        favIcon.removeClass('active');
      });

      favDel.apply.click(()=>{
        const clickFav = $('.favStore_page .fav_icon.active');
        clickFav.closest('.list').remove();
        favDel.modal.fadeOut(200);
        scrollOn();

        if ($(".store_list .list").length == 0) {
          $(".favStore_page .empty_box").css('display', 'block');
        };
      }); 
      
    }
    storeFind();

    const starIcon = $('.store_img .fav_icon');

    starIcon.click(function(){
      if($(this).hasClass('active')){
        $(this).removeClass('active');
      }else{
        $(this).addClass('active');
      }
    });

});
