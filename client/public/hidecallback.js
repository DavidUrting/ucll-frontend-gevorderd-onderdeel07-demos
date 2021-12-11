$(function(){
	$("div").click(function(){
		$(this).hide(3000, function(){
			$(this).show();	
		});
	});
});
