$(document).ready(function() {
	$('.america').on('click', function() {
	var price = $('<p>From $399.99</p>');
	$('.book').before(price);
	$('button').remove();
});
});
