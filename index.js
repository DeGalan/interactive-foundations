console.log('Dark Mode');

$(document).ready(function() {
	$("#darkmode").click(function() {
		$('body').toggleClass('darkmode');
        $('.projects').toggleClass('darkmode');
        $('.exercises').toggleClass('darkmode');
        $('footer').toggleClass('darkmode');
        $('h1').toggleClass('darkmode');
        $('.a1-e.darkmode:hover').toggleClass('darkmode');
	});
});
