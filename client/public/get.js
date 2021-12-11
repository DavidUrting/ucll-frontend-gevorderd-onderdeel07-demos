$(function(){
    $("#source").click(function(){
		alert($(this).text());		  
	});
	
	$("#target").click(function(){
		alert($(this).html());		  
	});
	
	$("button").click(function(){
		alert("Antwoord: " + $("#input").val());		  
	});
	
	$(function(){
    $("a").mouseover(function(){
        alert("Link: " + $(this).attr("href"));		  
    });
});

});
