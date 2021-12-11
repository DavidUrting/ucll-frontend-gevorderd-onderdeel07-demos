$( function(){
	$("#removeClass").click(function(){
		$("div").removeClass();	
	});
	
	$("#addClass").click(function(){
		$("div").addClass("ucll");	
	});
	
	$("#toggleClass").click(function(){
		$("div").toggleClass("ucll");	
	});
	
	$("#setCSS").click(function(){
		$("div").css({
			"background-color": "lightgray",
			"border": "5px red solid"
			});	
	});
});
