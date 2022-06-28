$(document).ready(function () {
	$('.header__btn').click(function (event) {
		$('.header__btn,.header__container').toggleClass('active')
		$('body').toggleClass('lock');
	});
});