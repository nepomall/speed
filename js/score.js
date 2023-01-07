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

      // 바차트----------
      let barData = [40, 95, 70, 92, 66, 95, 70, 92];
      $('.bar_data.first .list').eq(0).find('strong').animate({
        'height':barData[0] + '%'
      },{duration : 1000});
      $('.bar_data.first .list').eq(1).find('strong').animate({
        'height':barData[1] + '%'
      },{duration : 1000});
      $('.bar_data.first .list').eq(2).find('strong').animate({
        'height':barData[2] + '%'
      },{duration : 1000});
      $('.bar_data.first .list').eq(3).find('strong').animate({
        'height':barData[3] + '%'
      },{duration : 1000});
      $('.bar_data.second .list').eq(0).find('strong').animate({
        'height':barData[4] + '%'
      },{duration : 1000});
      $('.bar_data.second .list').eq(1).find('strong').animate({
        'height':barData[5] + '%'
      },{duration : 1000});
      $('.bar_data.second .list').eq(2).find('strong').animate({
        'height':barData[6] + '%'
      },{duration : 1000});
      $('.bar_data.second .list').eq(3).find('strong').animate({
        'height':barData[7] + '%'
      },{duration : 1000});

      // 도넛차트
      let doughnutChart = document.getElementById('doughnut_chart');
      new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [999, 999, 999, 999, 999, 999],
            backgroundColor: [
              '#E5B943',
              '#4349E5',
              '#E56243',
              '#878BFF',
              '#A7E543',
              '#E59443'
            ],
            borderWidth: 0,
            scaleBeginAtZero: true,
            cutout:"60%",
          }]
        }
      });

    }
    roundRecord();

    // 레더차트-----------------
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
                  // boxWidth:16,
                  // boxHight:16,
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

    


    // 라운딩 기록 스와이프------------------
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

});
