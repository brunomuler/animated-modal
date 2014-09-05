$(function(){
	/**
	Default html class selectors:

	**/


	'use strict';
	var $lauchBtn =  $('.js-lauch-modal'),
		$modal = $('.js-modal'),
		$modalBackdrop = $('<div class="backdrop"></div>');
		
	//open modal
	var openModal = function($modalElement) {
		var $closeBtn = $modalElement.find('.js-modal-close');	
		
		$('body').append($modalBackdrop);

		//window.getComputedStyle(element).cssText;
		$modalBackdrop.addClass('is-open');

		$modalElement.removeClass('hidden').addClass('is-open');
		$('body').addClass('no-scroll');

		$modalBackdrop.on('click', function() {
			closeModal();
		});

		$closeBtn.on('click', function() {
			console.log('cl');
			closeModal();
		});
	};

	var closeModal = function() {
		$modal.removeClass('is-open');
		$modalBackdrop.removeClass('is-open');
		setTimeout(afterClose, 500);
	};

	var afterClose = function () {
		$modal.addClass('hidden');
		$('body').removeClass('no-scroll');
		$modalBackdrop.remove();
	};

	$lauchBtn.click(function(){
		openModal($modal);
	});


	
	
});