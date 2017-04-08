$(document).ready(function() {
                //GlobalLoader
				var globalLoader = $('.js-global-loader');

				$(window).on('load', function() {
					globalLoader.fadeOut();
				});
                //Flexslider
				$('.flexslider').flexslider({
					animation : "slide"
				});
                //bgDarken
				$('.readMore').on('click', function() {
					$('.bgDarken').addClass('darken');
				});
				$('.btn-later').on('click', function() {
					$('.bgDarken').removeClass('darken');
				});
				$('.btn-buy').on('click', function() {
					$('.bgDarken').removeClass('darken');
				});
				$('.close').on('click', function() {
					$('.bgDarken').removeClass('darken');
				});
                //Colorful - BUY TICKETS NOW!
				var rgb = ['255', '0', '0'];

				setInterval(function() {

					var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';

					var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);

					if (o > 125) {
						$('.wrapper2').css('color', 'black');
					} else {
						$('.wrapper2').css('color', 'white');
					}

					$('.wrapper2').css('background-color', c);

					var r = Math.round(Math.random() * 255);
					var g = Math.round(Math.random() * 255);
					var b = Math.round(Math.random() * 255);

					rgb[0] = r;
					rgb[1] = g;
					rgb[2] = b;

				}, 500);

				// Mobile-Menu
				$(".menuButton .fa").on("click", function() {
					$(".menu").toggleClass("activeMenu");
					$(".bgDarken").toggleClass("darke");
					$("body").toggleClass("overflowHidden");
				});
				$(".closeMenu").on("click", function() {
					$(".menu").toggleClass("activeMenu");
					$(".bgDarken").toggleClass("darke");
					$("body").toggleClass("overflowHidden");
				});

			});