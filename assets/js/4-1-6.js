var searchItem = '.search_item';   // 絞り込む項目を選択するエリア
var listItem = '.list_item';       // 絞り込み対象のアイテム
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
}var searchItem = '.search_item';   // 絞り込む項目を選択するエリア
var listItem = '.list_item';       // 絞り込み対象のアイテム
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
}var searchItem = '.search_item';   // 絞り込む項目を選択するエリア
var listItem = '.list_item';       // 絞り込み対象のアイテム
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
}var searchItem = '.search_item';   // 絞り込む項目を選択するエリア
var listItem = '.list_item';       // 絞り込み対象のアイテム
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
}// JavaScript Document

//SVGアニメーションの描画
(function(){ 

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#top');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#222F3D","strokeCap":"square","delay":520}); 
      myAnimation.paint(); 
    }
  }

})();

$(window).on('load',function(){
        stroke.play();//SVGアニメーションの実行
});


//スクロール時にふわっと出現
function scroll_effect() {
  var element = document.getElementsByClassName('scroll-up');
  if(!element) return;
                      
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  var showTiming = 200; // 要素を表示するタイミング
  for(var i = 0; i < element.length; i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行
