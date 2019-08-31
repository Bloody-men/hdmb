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
// --显示隐藏--      
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
// index 瀑布流
var box = document.getElementById('box');
    var items = box.children;
    // 定义每一列之间的间隙 为10像素
    var gap = '';
    window.onload = function() {
        // 一进来就调用一次
        waterFall();
        // 封装成一个函数
        function waterFall() {
            // 1- 确定列数  = 页面的宽度 / 图片的宽度
            var pageWidth = getClient().width;
            // 图片的大小
            var itemWidth = items[0].offsetWidth;
            gap = Math.floor(pageWidth - 2*itemWidth);
            // 列数
            var pav = Math.floor(gap/2);
            var columns = parseInt(pageWidth / (itemWidth + pav));
            var arr = [];
            var b =0;
            for (var i = 0; i < items.length; i++) {
                if (i < columns) {      
                    // 2- 确定第一行
                    //设置图片left值
                    items[i].style.left =(itemWidth + gap) * i + 'px';
                    //将图片的高度存入arr数组
                    arr.push(items[i].offsetHeight);
                    // console.log("w2:"+items[i].offsetHeight);
                } else {
                    // 其他行
                    // 3- 找到数组中最小高度  和 它的索引
                    var minHeight = arr[0];
                    var index = 0;
                    for (var j = 0; j < arr.length; j++) {
                        if (minHeight > arr[j]) {
                            minHeight = arr[j];
                            index = j;
                        }
                    }
                    // 4- 设置下一行的第一个盒子位置
                    // top值就是最小列的高度 + gap
                    items[i].style.top = arr[index] + gap + 'px';
                    // left值就是最小列距离左边的距离
                    items[i].style.left =items[index].offsetLeft + 'px';
                    // items[i].style.left =items[index]*inf + 'px';
                    // 5- 修改最小列的高度
                    // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
                    arr[index] = arr[index] + items[i].offsetHeight + gap;
                    // alert(arr[index])
                    b = arr[index];
                }
            }
            $('#box').css("height",b+40+"px");
        }
        // 页面尺寸改变时实时触发
        window.onresize = function() {
            waterFall();
        };
    $(window).scroll(function(){
        var dmt = $(document).height(); //文件的总高度
        var wid = $(window).height();   //可视区域高度
        var top = $(window).scrollTop()   // 滚动高度
        if(dmt-wid<=top+2){               //文件高度-可视高度<=滚动高度
                    // 模拟 ajax 获取数据
                    var datas = [
                        '<a href="player.html" class="swiper-slide item"><div class="slide"><div class="number">123号</div><img src="image/c.jpg"><p>6号</p><p>张三</p><p>396票</p><span>投票</span></div></a>',
                        '<a href="player.html" class="swiper-slide item"><div class="slide"><div class="number">123号</div><img src="image/cs6.jpg"><p>7号</p><p>张三</p><p>396票</p><span>投票</span></div></a>'
                    ];
                    var box = document.getElementById('box');

                    for (var i = 0; i < datas.length; i++) { 
                        appendHtml(box,datas[i]);
                     }
                    waterFall();
              }
      });
    };
  function appendHtml(elem,value){
      var node = document.createElement("div"),
          fragment = document.createDocumentFragment(),
          childs = null,
          i = 0;
      node.innerHTML = value;
      childs = node.childNodes;
      for( ; i < childs.length; i++){
          fragment.appendChild(childs[i]);
      }
      elem.appendChild(fragment);
      childs = null;
      fragment = null;
      node = null;
  }
    function getClient() {
      var wid = $("#box").width();
        return {
            width: wid,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }
    // scrollTop兼容性处理
    function getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }