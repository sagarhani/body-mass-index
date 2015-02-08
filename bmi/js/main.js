$(document).ready(function(){
	$("#standards").click(function(){
		$(this).addClass("active"); 
		$("#metrics").removeClass("active"); 		
		$("#standard").removeClass('collapse');
	  	$("#metric").addClass("collapse");
	});
	$("#metrics").click(function(){
		$(this).addClass("active"); 
		$("#standards").removeClass("active"); 
 		$("#metric").removeClass('collapse');
	  	$("#standard").addClass("collapse");
	});
});

