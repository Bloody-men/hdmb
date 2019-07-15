	// index.html
  var $audioBtn = $('#audio-btn');
      $audioBtn.on('click', function  () {
          var audio = document.getElementById('music');
          if (audio.paused) {
              audio.play();
              $audioBtn.removeClass('off').addClass('on').find('div').addClass('rotate');
          } else {
              audio.pause();
              $audioBtn.removeClass('on').addClass('off').find('div').removeClass('rotate');
          }
      });

	    function _show(cld){
	    	$("."+cld).show();
	  	}
	    function _hide(cld){
	    	$('.'+cld).hide();
	    } 

// 回到顶部 player.html  
$(function() {
    $(window).scroll(function() {
        var t = $(this).scrollTop();
        if (t > 300) {
            $(".gettop").stop().fadeIn(300);
        } else {
            $(".gettop").stop().fadeOut(300);
        }
    });
    $(".gettop").click(function() {
        $("body,html").stop().animate({
            scrollTop: 0
        }, 300);
    });
});