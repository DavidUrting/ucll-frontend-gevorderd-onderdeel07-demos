$( function(){
	$("div").click(function(){
		$(this).fadeTo(3000, 0.5, function(){
			$(this).hide();
		});
	});
});
