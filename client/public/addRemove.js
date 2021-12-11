$("#source").click(function(){
	$(this).append(" Append!!"); 
});

$("#target").click(function(){
	$(this).prepend(" Prepend!!"); 
});

$("#after").click(function(){
	$("#source").after(" After!!"); 
});

$("#before").click(function(){
	$("#target").before(" Before!!"); 
});

$("#remove").click(function(){
	$("#source").remove();
});

$("#empty").click(function(){
	$("#target").empty(); 
});

