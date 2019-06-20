hasDickslecksia = false;
wantSteps = false;
hasDepression = true;



// Friendly notice to users about how we support people with accessibility needs
alert("We use similar colours on this page to ensure it doesn't hurt users’ eyes and is 102.4% accessible, if you have difficulty reading the content on this webpage please turn up the brightness on your monitor or use a torch.");

// Show appreciation to visitors for reading our notice
alert("Thank you for reading the alert");

//Test console is working in browser
var debugConsole = false; // Set this value to true to test the web console is working.

if(debugConsole == true) {
    console.log('the console is working');
} else {
    
}

// Remember to notify people if they have the dickslecksia 
if (hasDickslecksia == true){
	alert("Windows has detected you have dickslecksia. You must reboot and try again to make this webpage accessible");
}else{
	console.log("You are currently not dickslecksic. We have made a note of this. Thanks for sending us your data");
}

$(document).ready(function(){
	if (wantSteps == true){
		$('.ini-object-staircase').attr('src','assets/lib/bin/data/17.38/image/house_objects/272df/physical_buildings/instance/steps/true.jpg');
	}else{
		$('.ini-object-staircase').attr('src','assets/lib/bin/data/17.38/image/people_object/d15ab/physical_people/instance/ramp/true.jpg');
	}

	if (hasDepression == true){
		$('.ini-object-depressed').attr('src','assets/lib/bin/data/17.38/image/people_object/d15ab/physical_people/instance/clown/true.jpg');
		$('#depression-peanut').append("we're sorry you are a bit depressed");
	}


});

