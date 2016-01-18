$(document).ready(function(){
	
	var tabs = [".links:nth-child(1)",".links:nth-child(2)",".links:nth-child(3)",".links:nth-child(4)",".links:nth-child(5)",".links:nth-child(6)",".links:nth-child(7)"];
	
	$(".letter").fadeIn("900");
	$(tabs[0]).click(function() {
		$(".info").hide("100");
		$(".links").removeClass("active");
		$(tabs[0]).addClass("active");
		$(".letter").delay("fast").fadeIn("900");
		$(".background").css("height", "100%");
	});
	$(tabs[1]).click(function() {
		$(".info").hide("100");
		$(".links").removeClass("active");
		$(tabs[1]).addClass("active");
		$(".our-goal").delay("fast").fadeIn("900");
		$(".background").css("height", "100%");
	});
	$(tabs[2]).click(function() {
		$(".info").hide("100");
		$(".links").removeClass("active");
		$(tabs[2]).addClass("active");
		$(".defined").delay("fast").fadeIn("900");
		$(".background").css("height", "100%");
	});
	$(tabs[3]).click(function() {
		$(".info").hide("100");
		$(".links").removeClass("active");
		$(tabs[3]).addClass("active");
		$(".effects").delay("fast").fadeIn("900");
		$(".background").css("height", "80em");
	});
	$(tabs[4]).click(function() {
		$(".info").hide("100");
		$(".links").removeClass("active");
		$(tabs[4]).addClass("active");
		$(".take-action").delay("fast").fadeIn("900");
		$(".background").css("height", "100%");
	});
	$(tabs[5]).click(function() {
		$(".info").hide("100");
		$(".links").removeClass("active");
		$(tabs[5]).addClass("active");
		$(".resources").delay("fast").fadeIn("900");
		$(".background").css("height", "100vh");
	});
	//Posters still needs a click function
	$(tabs[6]).click(function() {
		$(".info").hide("100");
		$(".links").removeClass("active");
		$(tabs[6]).addClass("active");
	});
	
	
});