$(function () {
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		cssEase: 'ease',
		dots: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})
})