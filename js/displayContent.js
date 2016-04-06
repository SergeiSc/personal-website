$(window).on('hashchange', function() {
	switchPanels();
});

$(window).load(function() {
	switchPanels();
});

function switchPanels(){
	switch(window.location.hash){	
	case '#home' :
		/*
		$('body').removeClass();
		$('body').addClass('bg-img1 cover crossfadeBg');
		*/

		$('#home-panel').addClass('active');
  		$('#home-panel').siblings().removeClass('active');

		$('.nav-home').addClass('activeLink');
		$('.nav-contact').removeClass('activeLink');
		$('.nav-about').removeClass('activeLink');
		
		break;
	case '#about' :
		/*
		$('body').removeClass();
		$('body').addClass('bg-img2 cover crossfadeBg');
		*/

		$('#about-panel').addClass('active');
  		$('#about-panel').siblings().removeClass('active');

		$('.nav-about').addClass('activeLink');
		$('.nav-home').removeClass('activeLink');
		$('.nav-contact').removeClass('activeLink');

		break;
	case '#contact' :
		/*
		$('body').removeClass();
		$('body').addClass('bg-img3 cover crossfadeBg');
		*/

		$('#contact-panel').addClass('active');
  		$('#contact-panel').siblings().removeClass('active');

		$('.nav-contact').addClass('activeLink');
		$('.nav-home').removeClass('activeLink');
		$('.nav-about').removeClass('activeLink');

		break;
	default :
		window.location.hash = '#home';
	}
}