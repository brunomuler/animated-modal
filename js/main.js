$(function(){
	'use strict';
	var $lauchBtn =  $('.js-lauch-modal'),
		$closeBtn =  $('.js-modal-close'),
		$modal = $('.js-modal'),
		$modalBackdrop = $('.js-modal-backdrop');


	//open modal
	var openModal = function() {
		$modal.removeClass('hidden').addClass('is-open');
		$('body').addClass('no-scroll');

		$modalBackdrop.on('click', function(){
			closeModal();
		});
	};

	var closeModal = function() {
		$modal.removeClass('is-open');
		setTimeout(afterClose, 500);
	};

	var afterClose = function () {
		$modal.addClass('hidden');
		$('body').removeClass('no-scroll');
	};

	$lauchBtn.click(function(){
		openModal();
	});
	$closeBtn.click(function(){
		console.log('cl');
		closeModal();
	});
	
});