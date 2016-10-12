$(document).ready(function() {

	$( ".readmore a" ).click(function( event ) {
 		event.preventDefault();
  		$( this ).hide();
  		$("#show-this-on-click").slideDown();
  		$("#show-this-on-click").show();
  		$(".readless").slideDown();
  		$(".readless").show();
	});

	$( ".readless a" ).click(function( event ) {
 		event.preventDefault();
  		$( this ).hide();
  		$("#show-this-on-click").slideUp();
  		$("#show-this-on-click").hide();
  		$(".readmore a").slideUp();
  		$(".readmore a").show();
	});

	$( ".learnmore" ).click(function( event ) {
 		event.preventDefault();
  		$( this ).hide();
  		$("#learnmoretext").slideDown();
  		$("#learnmoretext").show();
	});

});