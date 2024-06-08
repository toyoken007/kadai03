'use strict';

//----------------------------------------------------------------------
//  import
//----------------------------------------------------------------------
import { tab } from "./sub.js";

tab('.panel-a', '.panel-b', '.panel-c');

//----------------------------------------------------------------------
//  jQuery 関数
//----------------------------------------------------------------------
$(function () {
    const ham = $('#js-hamburger');
    const nav = $('#js_nav');
    const li = $(".nav_ul li");
    const box = $(".nav_box");
  
  
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
      ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
      nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
      box.toggleClass('active');
      if (ham.hasClass('active') && nav.hasClass('active')) {
        $('body').addClass('scroll_non')
      } else {
        $('body').removeClass('scroll_non')
      }
    });
    li.on('click', function () { //ハンバーガーメニューをクリックしたら
      ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
      nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
      $('body').toggleClass('scroll_non')
    });
  });


//----------------------------------------------------------------------
//  javascript 関数
//----------------------------------------------------------------------
// var button = document.getElementById('id');
// console.log(button.innerHTML);
