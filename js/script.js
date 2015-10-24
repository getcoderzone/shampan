	//***********Recent Work ************//
	$(document).ready(function() {
		var owl = $("#recent-work");
		owl.owlCarousel({
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0;
		itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		autoPlay: false,
		navigation: true,
		lazyLoad: true,
		navigationText:	["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
		});
	});	
	
	//*******Search******//
	$(".search-header").on("click", function() {
        $(".search-bar").fadeToggle()
    }),
	
	//*********Smooth Down *********//
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	
	//*********Menu Sticky*********//
	 $(function() {
		// grab the initial top offset of the navigation 
		var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
		 
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var sticky_navigation = function(){
			var scroll_top = $(window).scrollTop(); // our current vertical position from the top
			 
			// if we've scrolled more than the navigation, change its position to fixed to stick to top,
			// otherwise change it back to relative
			if (scroll_top > sticky_navigation_offset_top) { 
				$('#sticky_navigation').addClass( 'sticky' );
			} 
		};
		 
		// run our function on load
		sticky_navigation();
		 
		// and run it again every time you scroll
		$(window).scroll(function() {
			sticky_navigation();
		});
	 
	});
	
	var url = window.location;
	// Will only work if string in href matches with location
	$('#navbar ul.nav a[href="'+ url +'"]').parent().addClass('active');

	// Will also work for relative and absolute hrefs
	$('#navbar ul.nav a').filter(function() {
		return this.href == url;
	}).parent().addClass('active');
	
	//***********Testimonial ************//
	$(document).ready(function() {
		var owl = $("#testimonial-carousel");
		owl.owlCarousel({
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0;
		itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		lazyLoad: false,
		autoPlay: true,
		pagination : false
		});
	});
	//***********Our Client ************//
	$(document).ready(function() {
		var owl = $(".our-client");
		owl.owlCarousel({
		items : 8, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0;
		itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		lazyLoad: false,
		autoPlay: true,
		pagination : false
		});
	});
	
	//***********Recent Post ************//
	$(document).ready(function() {
		var owl = $("#latest-post");
		owl.owlCarousel({
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0;
		itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
		autoPlay: false,
		navigation: true,
		mouseDrag: false,
		lazyLoad: false,
		navigationText:	["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
		});
	});
	
	
	//******Tab*******//
	$('#tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
	
	// Nicescroll start

	$("html").niceScroll({
		styler:"fb",
		cursorcolor :"#36c6f4",
		cursorborder : "0px",
		cursoropacitymin : 0.3,
		//bouncescroll : true,
		spacebarenabled : true,
		scrollspeed : 40,
		mousescrollstep : 45,
		zindex : 99999,
		cursorborderradius : 0,
		cursorwidth : 10,
		enabletranslate3d : false,
		//smoothscroll : false
		hidecursordelay : 150
	});
	// Portfolio Activate
	$('.portfolio_items').mixItUp();
	
	// ---------------------------------------------------------------------------------------
	
	// Portfolio Hover Tooltip
	$('#portfolio .portfolios .portfolio_items li.mix .hover_elements a').tooltip();
	
	//**********Fun Facts ***********//
	(function($) {
		"use strict";
		function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */	
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 50);
			}
		}        	
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
		});
   })(jQuery);
   
   //********Back Top********//
   	$(document).ready(function(){

		// hide #back-top first
		$("#back-top").hide();
		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});

	});
	
	//********animated fadeInUp********//
	$(document).ready(function() { 
	jQuery('section').waypoint({
	triggerOnce: true,
	offset: '70%',
	handler: function() {
		jQuery(this).addClass('animated fadeInUp');
	}
	}); 
	});

  