console.log('Dark Mode');

$(document).ready(function() {
	$(".buttonDM").click(function() {
		$('body').toggleClass('darkmode');
        $('h1').toggleClass('darkmode');
        $('.buttonDMimg').toggleClass('darkmode');
        $('.buttonGL').toggleClass('darkmode');
        $('.buttonActive').toggleClass('darkmode');
        $('.buttonActive2').toggleClass('darkmode');
        $('.buttonPassive').toggleClass('darkmode');
        $('.caption').toggleClass('darkmode');
        $('.captionCred').toggleClass('darkmode');
        $('.footerNoSel').toggleClass('darkmode');
        $('.footerNoDark').toggleClass('darkmode');
        $('.footerHomeNull').toggleClass('darkmode');
        $('.pQuoteCont').toggleClass('darkmode');
        $('.creditsA').toggleClass('darkmode');
        $('.creditsB').toggleClass('darkmode');
        $('.creditsC').toggleClass('darkmode');
        $('.creditsD').toggleClass('darkmode');
        $('.creditsDot').toggleClass('darkmode');
        $('.creditsDot2').toggleClass('darkmode');
        $('.creditsOn').toggleClass('darkmode');
        $('footer').toggleClass('darkmode');
        $('.cLink').toggleClass('darkmode');
	});
    
    $(".buttonGL").click(function() {
		$('.body1').toggleClass('gl');
        $('body').toggleClass('gl');
        $('h2').toggleClass('gl');
        $('.buttonGL').toggleClass('gl');
        $('.caption').toggleClass('gl');
        $('.footerNo').toggleClass('gl');
        $('.txt').toggleClass('gl');
        $('.txt2').toggleClass('gl');
        $('.cLink').toggleClass('gl');
	});
});