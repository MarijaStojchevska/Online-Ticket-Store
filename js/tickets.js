$(document).ready(function() {
                //GlobalLoader
				var globalLoader = $('.js-global-loader');

				$(window).on('load', function() {
					globalLoader.fadeOut();
				});
                //bgDarken
				$('.buyBtn').on('click', function() {
					$('.bgDarken').addClass('darken');
				});
              
				$('.close').on('click', function() {
					$('.bgDarken').removeClass('darken');
					var inputForValidation = $('#payment-form .js-has-validation');
					inputForValidation.val("").removeClass('empty-field');
				});
                //PaymentForm
				$('#payment-form').on('submit', function(e) {

					e.preventDefault();
					var temp = $(this);
					var inputForValidation = temp.find('.js-has-validation');

					inputForValidation.each(function() {
						var tempValue = $(this).val();

						$(this).removeClass('empty-field');

						if (tempValue.match(/[    a-z!@#$%^&*()_+=-?\\<>,.:;{}[\]""'|~`    ]/i)) {
							alert("ATTENTION\nCard Number, Expiration Date, CV Code and Coupon Code must be a\nnumber!");
							$(this).addClass('empty-field');
						} else if (tempValue == "") {
							$(this).addClass('empty-field');

						}
					});

					if (!inputForValidation.hasClass('empty-field')) {
						alert('GET YOUR TICEKT NOW !');
						$('.bgDarken').addClass('darken');
						$('.js-close-modal').click();
						inputForValidation.val("");
					}

				});

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