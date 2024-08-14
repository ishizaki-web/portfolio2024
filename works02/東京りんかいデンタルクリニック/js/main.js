
// backstretch
    $(function(){
      $(".header-bg").backstretch([
      "images/dental_unit.png",
      "images/photo_umi.png",
      "images/photo_toyosutower.png",
      "images/photo_kigu01.png"
      ],{
        fade:2500,
        duration:3000
      });
    });

// fade in
    $(function(){
      $(window).scroll(function (){
          $('.fade').each(function(){
              var targetElement = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > targetElement - windowHeight + 200){
                  $(this).css('opacity','1');
                  $(this).css('transform','translateY(0)');
              }
          });
      });
    });

// header color change
    $(function () {
      var secPos = $("#sec1").offset().top;
      var color = $(".header a,.copy,.address");
      /*  var color = $(".btn-open span"); */
      $(window).scroll(function () {
        if ($(window).scrollTop() > secPos - 400) {
          $(color).css("color", "#000");
        /*   $(color).css("background", "#000");	 */
          $(color).css("textShadow", "none");
        } else {
          $(color).css("color", "#fff");
  /*  $(color).css("background", "#fff");	 */
          $(color).css("textShadow", "1px 2px 4px #808080")
        }
      });
    });
    

// slick js
    
      $(function () {
        $(".slick-box").slick({
          autoplay: true,
          arrows: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
          speed: 2000,
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
          ]
        });
      });
   

// smoothscroll
   
      $(function () {
        $('a[href^="#"]').click(function () {
          var speed = 800;
          var href = $(this).attr("href");
          var target = $(href == "#" || href == "" ? "html" : href);
          var position = target.offset().top;
          $("body,html").animate({
            scrollTop: position
          }, speed, "swing");
          return false;
        });
      });
    
// nav 追従
    
      $(function() {
        $(window).scroll(function() {
          for (var i = 1; i <= 9; i++) {
            if ($("section:nth-of-type(" + i + ")").offset().top < $(window).scrollTop() + 100) {
              $("nav li").removeClass("current");
              $("nav li:nth-of-type(" + i + ")").addClass("current");
            }
          }
        });
      });
    
// humburger btn
    
      $(function () {
        $(".btn-open").on("click", function () {
          $(this).toggleClass("active");
          $(".header").toggleClass("panel-open");
        });
        $(".header a").click(function () {
          $(".btn-open").removeClass("active");
          $(".header").removeClass("panel-open");
        });
      });
    
// topback show hide
$(function() {
  var navi = $("#topback");
  var startPos = 0;
  $(window).scroll(function() {
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      if ($(window).scrollTop() >= 600) {
        $(navi).css("transform", "translateY(300%)");
      }
    } else {
      $(navi).css("transform", "translateY(0)");
    }
    startPos = currentPos;
  });
});
    

// マーカー
    
      $(window).scroll(function(){
    $('.ctw-marker').each(function(){
      var targetP = $(this).offset().top;
      var scrollT = $(window).scrollTop();
      var windowH = $(window).height();
      if(scrollT>targetP-windowH+150){
        $(this).addClass('ctw-marker-position');
      }
    })
  });
    
// form 送信ボタン
  $(document).ready(function() {
    // 送信ボタンがクリックされたときの処理
    $('.btn btn-primary').click(function(e) {
        e.preventDefault(); // フォームのデフォルトの送信を防ぐ

        // ここで実際に送信処理を行う（例えばAjaxでサーバーにデータを送信するなど）

        // 送信完了メッセージを表示する
        $('#message').text('送信完了しました');
    });
});