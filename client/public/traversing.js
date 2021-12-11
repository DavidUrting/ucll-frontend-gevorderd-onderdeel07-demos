$(function(){
    $("#parentBtn").click(function(){
		$("#li1").text("li1 - Parent: " + $("#li1").parent().attr("id"));
    });
	
	$("#parentsBtn").click(function(){
		$("#li2").parentsUntil("div").each(function(){
		   $("#li2").after(this.id + " ");
		});
	});
	
	$("#allParentsBtn").click(function(){
		$("#li2").parents().each(function(){
		   $("#li2").after(this.id + " ");
		});
	});
	
	$("#divParentsBtn").click(function(){
		$("#li2").parents("div").each(function(){
		   $("#li2").after(this.id + " " + this.tagName + "<br>");
		});
	});
	
	$("#childrenBtn").click(function(){
		$("#level1").children().each(function(){
		   $("#level1").after(this.id + " " + this.tagName + "<br>");
		});
	});
	
	$("#ulChildrenBtn").click(function(){
		$("#level1").children("ul").each(function(){
		   $("#level1").after(this.id + " " + this.tagName + "<br>");
		});
	});
	
	$("#findUlBtn").click(function(){
		$("#level1").find("ul").each(function(){
		   $("#level1").after(this.id + " " + this.tagName + "<br>");
		});
	});
	
	$("#findAllBtn").click(function(){
		$("#level1").find("*").each(function(){
		   $("#level1").after(this.id + " " + this.tagName + "<br>");
		});
	});
});
