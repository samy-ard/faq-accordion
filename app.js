(function($) {
	$('.accordion-item').on('click', function(e) {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.accordion-item').removeClass('active');
			$(this).addClass('active');
		}
	});
})(jQuery);