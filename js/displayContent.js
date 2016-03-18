$(window).on('hashchange', function() {
	switchPanels();
});

$(window).load(function() {
	switchPanels();
});

function switchPanels(){
	
	switch(window.location.hash){	
	case '#home' :
		$('body').removeClass();
		$('body').addClass('bg-img1 animate-opacity');

		$('#home-panel').addClass('active');
  		$('#home-panel').siblings().removeClass('active');
		break;
	case '#about' :
		$('body').removeClass();
		$('body').addClass('bg-img2 animate-opacity');

		$('#about-panel').addClass('active');
  		$('#about-panel').siblings().removeClass('active');
		break;
	case '#contact' :
		$('body').removeClass();
		$('body').addClass('bg-img3 animate-opacity');

		$('#contact-panel').addClass('active');
  		$('#contact-panel').siblings().removeClass('active');
		break;
	}
	
}