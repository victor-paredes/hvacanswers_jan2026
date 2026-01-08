$(function() {

	resizeWindow();

	$(window).on('resize', function() {
			resizeWindow();
		}
	);

	$('#dismiss, .overlay').on('click', function() {
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
		$('#sidebarToggler').attr('aria-expanded', 'false');
	});
	$('#sidebarToggler').on('click', function() {
		// open sidebar
		$('#sidebar').addClass('active');
		$(this).attr('aria-expanded', 'true');
		// display the overlay
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
	});


	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});

	function resizeWindow() {
			var vpWidth = viewport().width;
			//xs-md
			if (vpWidth < 991) {
				$("#subNavContainer").insertAfter("#slideMenuTop");
            	$('#subNavContainer .dropdown-menu').addClass('d-block');
				$("#mainNav").insertAfter("#slideMenuBottom");
			//lg+ 
			} else if (vpWidth >= 992) {
				$("#subNavContainer").prependTo($("#subNavContainerContainer"));
				$('#subNavContainer .dropdown-menu').removeClass('d-block');
				$("#mainNav").appendTo("#mainNavContainerContainer");
		}
	}

	function viewport() {
		var e = window,
			a = 'inner';
		if (!('innerWidth' in window)) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width: e[a + 'Width'], height: e[a + 'Height'] };
	}

	/*COPYRIGHT DATE*/
	var newDate = new Date();
	var fullYear = newDate.getFullYear();
	$("#currentYear").html(fullYear);

	/*ENABLE POPUPS*/
	$('[data-toggle="tooltip"]').tooltip();

	$(".preventDefault").click(function(e){
    	e.preventDefault();
	})

	/*ACCORDION ICONS*/
	$('body').on('shown.bs.collapse', '.accordion-group .collapse', function(){
		$(this).prev().find('img').attr('src', 'img/minus.svg');
	});
	$('body').on('hidden.bs.collapse', '.accordion-group .collapse', function(){
		$(this).prev().find('img').attr('src', 'img/plus.svg');
	});

	/*ECOREBATES OPEN NEW TAB*/
	$("body").on('click', '.ecr-view-product', function() {
		$(this).attr('target', '_blank');
	})

	$(function() {
		$("#modalgzjlNehTdSg").on('hidden.bs.modal', function () {
			$("#modalgzjlNehTdSg iframe").attr("src", $("#modalgzjlNehTdSg iframe").attr("src"));
		});
	});
	$(function() {
		$("#modalpI8xhNC5jNo").on('hidden.bs.modal', function () {
			$("#modalpI8xhNC5jNo iframe").attr("src", $("#modalpI8xhNC5jNo iframe").attr("src"));
		});
	});

});

