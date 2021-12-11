$(function(){
    $("#target").click(function(){
		$(this).html(
		   "<h4>Info (elemInfo.html)</h4>" +
		   "width: " + $(this).width() + "<br />" +
		   "innerWidth: " + $(this).innerWidth() + "<br />" +
		   "outerWidth: " + $(this).outerWidth() + "<br />" +
		   "outerWidth(true): " + $(this).outerWidth(true) + "<br />" +
		   "height: " + $(this).height() + "<br />" +
		   "innerHeight: " + $(this).innerHeight() + "<br />" +
		   "outerHeight: " + $(this).outerHeight() + "<br />" +
		   "outerHeight(true): " + $(this).outerHeight(true) + "<br />"
		);
    });
});
