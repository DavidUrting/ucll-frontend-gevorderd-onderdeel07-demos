$(function(){
    $("#source").click(function(){
		$(this).text("Nieuwe tekst!!!!");		  
	});
	
	$("#target").click(function(){
		$(this).html("<h1>Nieuwe header</h1>");		  
	});
	
	$("button").click(function(){
		$("#input").val("Verkeerd antwoord!!");		  
	});
	
	$(function(){
		$("a").mouseover(function(){
			$(this).attr("href", "https://www.ucll.be/studeren/graduaat");	
			$(this).text("UCLL (graduaat)");
		});
	});
});
