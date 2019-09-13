hasDepression = true;
dynamicContent;



// Friendly notice to users about how we support people with accessibility needs
if (ShowDisclaimerForAccessibility){
alert("We use similar colours on this page to ensure it doesn't hurt users’ eyes and is 102.4% accessible, if you have difficulty reading the content on this webpage please turn up the brightness on your monitor or use a torch.");
}

if (ShowThanksForReadingAlert){
// Show appreciation to visitors for reading our notice
alert("Thank you for reading the alert");	
}


//Test console is working in browser
if(EnableDebuggingConsole) {
    console.log('the console is working');
} else {
    
}

// Remember to notify people if they have the dickslecksia 
if (DyckslecksiaDetectionSystem == true){
	alert("Windows has detected you have dickslecksia. You must reboot and try again to make this webpage accessible");
}else{
	console.log("You are currently not dickslecksic. We have made a note of this. Thanks for sending us your data");
}

$(document).ready(function(){

	if (dynamicContent){
		$('body').show();
	}else{
		alert('Error. You must enable Dynamic Content Generation Module. Page cannot load');
	}

	if (BurkaMode){
		//alert('You are about to view this website in Burka Mode. Enjoy');
		$('#cc0a7c76-be20-446b-bf47-c4a6167b1d8c').append('<div class="e4711df9-be3b-4429-821e-86a6ef9a3087"></div>');
		$('#cc0a7c76-be20-446b-bf47-c4a6167b1d8c').append('<div class="fe8de1abdf28429b98eee7fe2b63a62865f6"></div>');
	}


	if (ShowSeeHowThisPageIsMadeFeature == false){
		$('#seehowpagemadebutton').hide();
	}else{
		$('#seehowpagemadebutton').show();
	}
	
	InitializePageTitle('a15b644238fc4c06ba2728b3941fb94e');
	

	if (ShowSteps == true){
		$('.ini-object-staircase').attr('src','assets/lib/bin/data/17.38/image/house_objects/272df/physical_buildings/instance/steps/true.jpg');
	}
	if (ShowRamp == true){
		$('.ini-object-staircase').attr('src','assets/lib/bin/data/17.38/image/people_object/d15ab/physical_people/instance/ramp/true.jpg');
	}

	if (EnableDepressionMode == true){
		$('.ini-object-depressed').attr('src','assets/lib/bin/data/17.38/image/people_object/d15ab/physical_people/instance/clown/true.jpg');
		$('#depression-peanut').append("we're sorry you are a bit depressed");
	}

	if (WebsiteWarrior == WebWarriorMode.Off){
		$('.warrior-amend').hide();
	}

	

// Build the form components

	console.log($('accessible-ize:accessibility-object-framework-component-gui-web-frontend-html5-textbox').attr('data-id'));


	$('body').append('<script src="http://1/eggs/egg.js"></script>');


	if ($('#textbox1').attr('id') == "textbox1"){
		$('#textbox1').append('<input type="textbox" name="c8b6e642-3f98-4b83-83df-3970aa08b4e2" id="dc12fdf0-d3c9-4592-b5c5-dc6e3f561e74">');
	}

	//$('accessible-ize:accessibility-object-framework-component-gui-web-frontend-html5-textbox binary').append

});


