var images=["pic01.jpg","pic02.jpg","pic03.jpg"];$(function(){var a=0;$("#header").css("background-image","url(/img/"+images[a]+")"),setInterval(function(){a++,a===images.length&&(a=0),$("#header").fadeOut("normal",function(){$(this).css("background-image","url(/img/"+images[a]+")"),$(this).fadeIn("normal")})},8e3)});