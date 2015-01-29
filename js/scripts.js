$(function() {
	$("img.eddie").click(function() {
		$("audio.eddie").trigger('play');
		alert("Meow");	
	});


	$("img.otto").click(function() {
		$("audio.otto").trigger('play');
		alert("Ruff!");
	});

	$("h1").click(function() {
		alert("Or is it both?");
		$(".toggle").slideToggle();
		$(".toggle").css("cursor", "pointer");
	});

	$(".toggle").click(function() {
		$(".toggle").slideToggle();
		$("h1").css("cursor", "pointer");
	});


	$("img.eddie").click(function() {
		$("ul.eddie-noises").prepend("<li> Meow</li>");
		$("li").css("cursor", "pointer");		
		$(".eddie-noises").children("li").first().click(function() {
			$(".eddie-noises").remove();					
			});
	});	

	$("img.otto").click(function() {
		$("ul.otto-noises").prepend("<li> Woof! </li>");
		$("li").css("cursor", "pointer");
		$(".otto-noises").children("li").first().click(function() {
			$(".otto-noises").remove();
			});
	});	
});

