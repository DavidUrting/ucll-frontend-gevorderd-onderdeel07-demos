$(function(){
    $("#source").click(function(){
		$("#target").animate({ 
		    top:"+=50px",
			left:"+=75px",
            opacity:"0.5",
			height:"150px",
			width:"150px"}, 3000);					  
	});
});

