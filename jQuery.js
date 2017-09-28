$(document).ready(function() {
	$('.vacation').on('click', function() {
	var price = $('<p>From $399.99</p>');
	$('.book').before(price);
	$(this).remove();
});
});
