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

    // 스코어 상세페이지  스크립트------------
    function roundRecord(){

      $('.scoreDetail_page .plz_scroll').click(()=>{
        $('.scoreDetail_page .plz_scroll').fadeOut(200);
      });

      // 바그래프----------
      let barData = [40, 95, 70, 92, 66, 95, 70, 92];
      $('strong').eq(0).animate({
        'height':barData[0] + '%'
      },{duration : 1000});
      $('strong').eq(1).animate({
        'height':barData[1] + '%'
      },{duration : 1000});
      $('strong').eq(2).animate({
        'height':barData[2] + '%'
      },{duration : 1000});
      $('strong').eq(3).animate({
        'height':barData[3] + '%'
      },{duration : 1000});
      $('strong').eq(4).animate({
        'height':barData[4] + '%'
      },{duration : 1000});
      $('strong').eq(5).animate({
        'height':barData[5] + '%'
      },{duration : 1000});
      $('strong').eq(6).animate({
        'height':barData[6] + '%'
      },{duration : 1000});
      $('strong').eq(7).animate({
        'height':barData[7] + '%'
      },{duration : 1000});

    }
    roundRecord();

    // 차트-----------------
    let content = document.getElementById('radar-chart');

    new Chart(content, {
        type: 'radar',
        data: {
          labels: [
            ['평균타수'],
            ['드라이브', '비거리'],
            ['그린적중률'],
            ['페어웨이'],
            ['퍼팅']
          ],
          
          datasets: [
            {
              label: "나의실력",
              fill: true,
              backgroundColor: "rgba(204,18,25,0.1)",
              borderColor: "rgba(204,18,25,1)",
              pointBorderColor: "rgba(204,18,25,1)",
              pointBackgroundColor: "rgba(204,18,25,1)",
              borderWidth:1,
              data: [8,8,8,8,8]
            }, {
              label: "평균",
              fill: true,
              backgroundColor: "rgba(172,172,172,0.1)",
              borderColor: "rgba(172,172,172,1)",
              pointBorderColor: "rgba(172,172,172,1)",
              pointBackgroundColor: "rgba(172,172,172,1)",
              pointBorderColor: "rgba(172,172,172,1)",
              borderWidth:1,
              data: [10,10,10,10,10]
            }
          ]
        },
        options : {
          responsive: false,
          scales: {
            r: {
              grid:false,
              max: 15,
              min: 0,
              ticks: {
                display: false,
              },
              pointLabels: {
                color : "#43425D",
                font: function(context){
                  let width = context.chart.width;
                  let size = Math.round(width / 24);

                  return {
                    weight:'bold',
                    size: size
                  };
                },
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels:{
                  boxWidth:16,
                  boxHight:16,
                  usePointStyle:true,
                  font: function(context){
                    let width = context.chart.width;
                    let size = Math.round(width / 24);
  
                    return {
                      weight:'bold',
                      size: size
                    };
                  },
              },
            },
            tooltip:{
              enabled: false,
            },
          },
        }
    });

    // 메인페이지 매장찾기 텝 스크립트--------------------
    function storeFind(){
      $('.storeFind_section .content').hide();
      $('.storeFind_section .content').eq(0).show();
      $('.storeFind_section .tab').eq(0).addClass("active");
      
      $('.main_page .storeFind_section .tab').click(function(){
        let idx = $(this).index();
        console.log(idx);
        $('.main_page .storeFind_section .tab').removeClass("active");
        $(this).addClass("active");
        $('.storeFind_section .content').hide();
        $('.storeFind_section .content').eq(idx).show();
      });

      // 별버튼 스크립트----------
      const favWrap = document.querySelectorAll('.storeFind_section .list');
      favWrap.forEach((item, index) => {
        const favIcon = item.querySelectorAll('.fav_icon');

        favIcon.forEach((items, i) => {
          items.addEventListener('click', () => {
              if(items.classList.contains('active')){
                items.classList.remove('active');
              }else{
                items.classList.add('active');
              }
          });
        });
      });
    }
    storeFind();

});
