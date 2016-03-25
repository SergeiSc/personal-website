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
		break;
	case '#about' :
		/*
		$('body').removeClass();
		$('body').addClass('bg-img2 cover crossfadeBg');
		*/

		$('#about-panel').addClass('active');
  		$('#about-panel').siblings().removeClass('active');
		break;
	case '#contact' :
		/*
		$('body').removeClass();
		$('body').addClass('bg-img3 cover crossfadeBg');
		*/

		$('#contact-panel').addClass('active');
  		$('#contact-panel').siblings().removeClass('active');
		break;
	}
	
}