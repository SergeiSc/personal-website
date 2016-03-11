$(window).on('hashchange', function() {
  
	switch(window.location.hash){	
		case '#home' :
			$('#home-panel').addClass('active');
  			$('#home-panel').siblings().removeClass('active');
			break;
		case '#about' :
			$('#about-panel').addClass('active');
  			$('#about-panel').siblings().removeClass('active');
			break;
		case '#contact' :
    		$('#contact-panel').addClass('active');
  			$('#contact-panel').siblings().removeClass('active');
			break;
	}
  
});