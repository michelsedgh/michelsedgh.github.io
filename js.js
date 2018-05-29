$(document).ready(function () {
	$( "#pic" ).click(function() {
		$( this ).slideUp( "slow", function() {
			// Animation complete.
		});
	});
	$( "h1" ).click(function() {
		$( "#pic" ).slideDown( "slow", function() {
			// Animation complete.
		  });
	});
	$( "#click" ).click(function() {
		$( "#showResume" ).slideDown( "slow", function() {
			// Animation complete.
		});
	});
	$( "#edc" ).slideUp( "slow", function() {
	// Animation complete.
	});
	
	$(".btn1").click(function(){
		$("#showResume").fadeOut()
	});
	$(".btn2").click(function(){
		$("#showResume").fadeIn();
	});
		  
	});


