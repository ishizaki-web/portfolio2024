//ローディング
$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});

//スライド
$(function(){
    $('.slider').slick({
        autoplay:false,
        autoplaySpeed:5000,
        dots:true,
    });
});

$(function() {
  $('.typed').typed({
    strings: ["I'm a growing web developer."],
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 20,
    loop: false,
    showCursor: false,
  });
});

//ハンバーガーメニュー
$(function(){
  $(".btn-gnavi").on("click", function(){

      if($(this).hasClass("open")) {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
          $(".g-navi").removeClass("open");
          $(".nav-bg").removeClass("open");
          $(".btn-gnavi").removeClass("open");
      } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
          $(".g-navi").addClass("open");
          $(".nav-bg").addClass("open");
          $(".btn-gnavi").addClass("open");
      }
  });
});

$(function(){
  $(".nav_member").on("click", function(){
    $(".g-navi").removeClass("open");
    $(".nav-bg").removeClass("open");
    $(".btn-gnavi").removeClass("open");
  });
});

//アンカーリンクのリセット
$(function(){
  $(".scroll-up-box").click(function(){
    var target = $("#top");
    var position = $(target).offset().top;
    $('html,body').animate({scrollTop: position}, 100);
    return false;
  });

  $(".btn_about").click(function(){
    var target = $("#about");
    var position = $(target).offset().top;
    $('html,body').animate({scrollTop: position}, 100);
    return false;   
  });

  $(".btn_works").click(function(){
    var target = $("#works");
    var position = $(target).offset().top;
    $('html,body').animate({scrollTop: position}, 100);
    return false;
  });
});

//絞り込み
var searchItem = '.tab_member';   // 絞り込む項目を選択するエリア
var listItem = '.works .contents';       // 絞り込み対象のアイテム
var hideClass = 'is-hide';         // 絞り込み対象外の場合に付与されるclass名
var activeClass = 'is-active';     // 選択中のグループに付与されるclass名

$(function() {
    // 絞り込みを変更した時
    $(searchItem).on('click', function() {
    $(searchItem).removeClass(activeClass);
    var group = $(this).addClass(activeClass).data('group');
    search_filter(group);
    });
});

/**
 * リストの絞り込みを行う
 * @param {String} group data属性の値
 */
function search_filter(group) {
    // 非表示状態を解除
    $(listItem).removeClass(hideClass);
    // 値が空の場合はすべて表示
    if(group === '') {
    return;
    }
    // リスト内の各アイテムをチェック
    for (var i = 0; i < $(listItem).length; i++) {
        // アイテムに設定している項目を取得
        var itemData = $(listItem).eq(i).data('group');
        // 絞り込み対象かどうかを調べる
        if(itemData !== group) {
            $(listItem).eq(i).addClass(hideClass);
        }
    }
}

$(function(){
  //カーソル要素の指定
  var cursor=$("#cursor");
  
  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
    var x=e.clientX;
    var y=e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      "opacity":"1",
      "top":y+"px",
      "left":x+"px"
    });
  });

   //aタグホバー
   $("a").on({
    "mouseenter": function() {
      //activeクラス付与
      cursor.addClass("active");
      stalker.addClass("active");
    },
    "mouseleave": function() {
      cursor.removeClass("active");
      stalker.removeClass("active");
    }
  });

   //buttonタグホバー
   $("button").on({
    "mouseenter": function() {
      //activeクラス付与
      cursor.addClass("active");
      stalker.addClass("active");
    },
    "mouseleave": function() {
      cursor.removeClass("active");
      stalker.removeClass("active");
    }
  });

    //liタグホバー
    $("li").on({
    "mouseenter": function() {
      //activeクラス付与
      cursor.addClass("active");
      stalker.addClass("active");
    },
    "mouseleave": function() {
      cursor.removeClass("active");
      stalker.removeClass("active");
    }
  });
  
  //buttonタグホバー
   $("#hamburger").on({
    "mouseenter": function() {
      //activeクラス付与
      cursor.addClass("active");
      stalker.addClass("active");
    },
    "mouseleave": function() {
      cursor.removeClass("active");
      stalker.removeClass("active");
    }
  });
});

