/*
$(window).scroll(function(){
	console.log($(window).scrollTop());
	if($(window).scrollTop()<=250){
		$('.header').removeClass('fixheader');
	}else{
		$('.header').addClass('fixheader');
	}
});*/


//RESPONSIVE NAV
  var navigation = responsiveNav(".nav-collapse", {
	animate: true,                    // Boolean: Use CSS3 transitions, true or false
	transition: 284,                  // Integer: Speed of the transition, in milliseconds
	label: "Menu",                    // String: Label for the navigation toggle
	insert: "after",                  // String: Insert the toggle before or after the navigation
	customToggle: "",                 // Selector: Specify the ID of a custom toggle
	closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
	openPos: "relative",              // String: Position of the opened nav, relative or static
	navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
	navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
	jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
	init: function(){},               // Function: Init callback
	open: function(){},               // Function: Open callback
	close: function(){}               // Function: Close callback
  });
 
 
$(window).load(function(){
	$('.slider').fractionSlider({
		'fullWidth': 			true,
		'controls': 			true, 
		'pager': 				true,
		'responsive': 			true,
		'dimensions': 			"1000,400",
	    'increase': 			false,
		'pauseOnHover': 		true,
		'slideEndAnimation': 	true
	});
});

$(document).ready(function() {
	$('.scrolldown').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 3600);
		return false;
	});
	$(window).stellar();
	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});
	  $(".rotate").Morphext({
		animation: 'flipInX'
	  });
	$('.showPopup').magnificPopup({
	  type: 'inline',

	  fixedContentPos: false,
	  fixedBgPos: true,

	  overflowY: 'auto',

	  closeBtnInside: true,
	  preloader: false,
	  
	  midClick: true,
	  removalDelay: 300,
	  mainClass: 'my-mfp-zoom-in'
	});
	  var owl = $(".owl-carousel");
	  owl.owlCarousel({
		 
		  itemsCustom : [
			[0, 1],
			[450, 2],
			[600, 4],
			[700, 4],
			[1000, 5],
			[1200, 5],
			[1400, 5],
			[1600, 5]
		  ],
		  navigation : true,
		  navigationText : false
	 
	  });
	  //HOVER EFFECT
		$('.viewport').mouseenter(function(e) {
			$(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
			$(this).children('a').children('span').fadeIn(200);
		}).mouseleave(function(e) {
			$(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
			$(this).children('a').children('span').fadeOut(200);
		});
	
		//TAB
		$('.tabs').responsiveTabs({
			rotate: false,
			startCollapsed: 'accordion',
			collapsible: 'accordion',
			setHash: false,
			activate: function(e, tab) {
			},
			activateState: function(e, state) {
			}
		});
	//ISOTOP
	$(function(){
	  $('#gallerymix').mixItUp();
	});
	//PREETY PHOTO
	$("area[rel^='nassaschoolgallery']").prettyPhoto();
	
	$(".gallery:first a[rel^='nassaschoolgallery']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:10000, autoplay_slideshow: false});
	//wow
	  wow = new WOW(
		{
		  boxClass:     'wow',      // default
		  animateClass: 'animated', // default
		  offset:       0,          // default
		  mobile:       true,       // default
		  live:         true        // default
		}
	  )
	  wow.init();
});
