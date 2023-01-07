$(document).ready(()=>{
  
      // 비디오 스크립트
      const video = document.querySelector('.video');
      const option = {
        btn : document.querySelector('.video_play'),
        scrBtn : document.querySelector('.play_bg'),
        scrBg : document.querySelector('.screen_wrap'),
        elapsed : document.querySelector('.time_elapsed'),
        durat : document.querySelector('.duration'),
        bar : document.querySelector('.video_bar'),
        barFill : document.querySelector('.bar_fill')
      };

      // 비디오 재생 토글
      function togglePlay(){
        if(video.paused){
          video.play();
          option.btn.classList.add('play');
          option.scrBg.classList.add('play');
        }else if(video.play){
          video.pause();
          option.btn.classList.remove('play');
          option.scrBg.classList.remove('play');
        };
      };
      
      video.addEventListener('ended', () =>{
        option.scrBg.classList.remove('play');
        option.btn.classList.remove('play');
      });

      option.btn.addEventListener('click', togglePlay);
      option.scrBtn.addEventListener('click', togglePlay);

      // 재생시간 바
      const handleProgress = () => {
        const percent = (video.currentTime / video.duration) * 100;
        option.barFill.style.width = `${percent}%`;
      };

      video.addEventListener('timeupdate', handleProgress);

      const scrub = e => {
        const scrubTime = (e.offsetX / option.bar.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
      };

      let mousedown = false;
      option.bar.addEventListener('click', scrub);
      option.bar.addEventListener('mousemove', (e) => mousedown && scrub(e));
      option.bar.addEventListener('mousedown', () => mousedown = true);
      option.bar.addEventListener('mouseup', () => mousedown = false);

      // 재생속도 셀렉트박스
      function typeBox(){
          const selectBox = $('.type_wrap');
          const selectList = $('.type_select');
          const selectClick = $('.type_select .list');
          // 셀렉트박스 오픈
          selectBox.click(function(){
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
          selectClick.click(function(){
            const selectData = $(this).html();
              if($(this).hasClass('selected')){
                  $(this).removeClass('selected');
              }else{
                  $('.type_select .list').removeClass('selected');
                  $(this).addClass('selected');
                  $(this).closest(selectBox).find('.play_type').html(selectData);
              };
          });
          // 외부 영역 클릭
          $(document).mouseup(function (e) {
              if (selectBox.has(e.target).length === 0) {
                  selectList.stop().slideUp(200);
                  selectBox.removeClass('open');
              };
          });

          
      }
      typeBox();

      // 재생속도
      const speedType = {
        normal : document.querySelector('.type_select .normal'),
        slow : document.querySelector('.type_select .slow'),
        fast : document.querySelector('.type_select .fast')
      };
      
      speedType.normal.addEventListener('click', ()=>{
        video.playbackRate = 1;
      });
      speedType.slow.addEventListener('click', ()=>{
        video.playbackRate = 0.5;
      });
      speedType.fast.addEventListener('click', ()=>{
        video.playbackRate = 2;
      });

      // 비디오 재생 시간 및 경과 시간 표시
      const timeElapsed = document.getElementById('time_elapsed');
      const duration = document.getElementById('duration');

      function formatTime(timeInSeconds){
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

        return{
          minutes : result.substr(3, 2),
          seconds : result.substr(6, 2),
        };
      };

      function initializeVideo(){
        const videoDuration = Math.round(video.duration);
        const time = formatTime(videoDuration);
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
      };

      video.addEventListener('loadedmetadata', initializeVideo);

      function updateTimeElapsed(){
        const time = formatTime(Math.round(video.currentTime));
        timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
        timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
      };

      video.addEventListener('timeupdate', updateTimeElapsed);

});
