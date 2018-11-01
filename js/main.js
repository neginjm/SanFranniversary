// Make it rain!

console.log('File Loading!!!');

// 1. When the user clicks on "me" a contact form pops up, with required and optional fields
// 1.1 Skipping the required fields should draw the user's attention to the fields and tell them the fields are required
// 1.2 When the user submits the form, they will see a confirmation message
// 1.3 The user can close the contact form to continue exploring

// 2. When the user drags different weather, different animation shows

// 2.1 Default state: By default, the user sees the bridge in typical weather 
//     (The clouds and waves moving and birds flying, "optional sound effect")

// 2.2a Sunny: By dragging the sunny weather, the user sees the bridge in sunny weather 
//      (The sun is glowing, waves moving slowly, boats floating, "optional sound effect")
// 2.2b Hover state: closes the sun's eyes

// 2.3a Foggy: By dragging the foggy weather, the user sees karl the fog covering the bridge by going up and down
// 2.3b Hover state: closes karl's eyes
// 2.3c "optional fog horn sound effect"

// 2.4 Windy: By dragging the windy weather, the user sees the bridge in windy weather (clouds come and go, winds move, waves move faster)

// 2.5a Rainy: By dragging the rainy weather, the user sees the bridge in rainy weather 
//      (A dark cloud is going up and down and crying over the bridge, tears falling down and turning into rain, "optional sound effect")
// 2.5b Hover state: makes the cloud stop crying and moving and just blinking

// 2.6a Romantic: By dragging the romantic weather, the user sees the bridge under the moon. 
//      (The moon is glowing, waves moving slowly, meteor showers appearing)
// 2.6b Romantic music plays in this state in loop and until the state changes
// 2.6c A message gently appears to motivate the user to ask someone out on a date: "Go ahead. Ask them out on a date!"

// 2.7a Snowy: By dragging the snowy weather, a pop-up appears "Here is a ticket to NYC" "GET OUT OF HERE"(second part animates)
// 2.7b The user can close the pop-up and continue exploring

// 2.8 Typical: Resets the bridge back to the default mode (clouds and waves moving and birds flying, "optional sound effect")





//Drag & Drop

 // $( function() {
 //    $( "#draggable" ).draggable();
 //    $( "#droppable" ).droppable({
 //      drop: function( event, ui ) {
 //        $( this )
 //          .addClass( "ui-state-highlight" )
 //          .find( "p" )
 //          .html( "Dropped!" );
 //      }
 //    });
 //  } );

// $( ".sunny" ).on( "dragover", function( event, ui ) {
// 	$('img').show();
// } );

// $( ".foggy" ).on( "drag", function( event, ui ) {
// 	$('img').fadeIn();
// } );

// $( ".windy" ).on( "drag", function( event, ui ) {
// 	$('img').fadeIn();
// } );

// $( ".rainy" ).on( "drag", function( event, ui ) {
// 	$('img').fadeIn();
// } );

// $( ".romantic" ).on( "drag", function( event, ui ) {
// 	$('img').fadeIn();
// } );

// $( ".snowy" ).on( "drag", function( event, ui ) {
// 	$('img').fadeIn();
// } );

// $( ".typical" ).on( "drag", function( event, ui ) {
// 	$('img').fadeIn();
// } );

// $(function(){
// $( ".draggable" ).droppable({
// drop: function( event, ui ) {


// if (ui.draggable.attr('class') == 'sunny') {
// 	$(this).attr('src', 'img/sunny-bridge.svg');
// });

// } else if ()


$( function() {

	// Defining Sunny Sound
	var sunnySound = document.createElement('audio');
	sunnySound.controls = true;
	sunnySound.loop = true;
	sunnySound.src = 'audio/seagulls-n-people.mp4';

	// Defining Foggy Sound
	var fogHorn = document.createElement('audio');
	fogHorn.controls = true;
	fogHorn.loop = true;
	fogHorn.src = 'audio/foghorn-golden-gate-bridge.mp4';

	// Defining Windy Sound
	var windSound = document.createElement('audio');
	windSound.controls = true;
	windSound.loop = true;
	windSound.src = 'audio/medium-wind.mp4';

	// Defining Rainy Sound
	var rainSound = document.createElement('audio');
	rainSound.controls = true;
	rainSound.loop = true;
	rainSound.src = 'audio/seagulls-rain-thunder.mp4';

	// Defining Romantic Sound
	var sinatra = document.createElement('audio');
	sinatra.controls = true;
	sinatra.loop = true;
	sinatra.src = 'audio/strangers-in-the-night.mp4';
	
	// Defining Snowy Sound
	var alertSound = document.createElement('audio');
	alertSound.controls = true;
	alertSound.loop = !true;
	alertSound.src = 'audio/mac-sound-pack-funk.m4r';

	var bartSound = document.createElement('audio');
	bartSound.controls = true;
	bartSound.loop = true;
	bartSound.src = 'audio/bart-train-arriving.mp4';

	alertSound.addEventListener('ended', function(){
				setTimeout(function(){
					bartSound.play();
				}, 1150);
				console.log ("delay");
    			
				});

	// Defining Typical Sound
	var typicalSound = document.createElement('audio');
	typicalSound.controls = true;
	typicalSound.loop = !true;
	typicalSound.src = 'audio/short-foghorn.mp4';

	var cablecarSound = document.createElement('audio');
	cablecarSound.controls = true;
	cablecarSound.loop = !true;
	cablecarSound.src = 'audio/cable-car-leaving-stop.mp4';

	var lightwindSound = document.createElement('audio');
	lightwindSound.controls = true;
	lightwindSound.loop = true;
	lightwindSound.src = 'audio/light-wind.mp4';

	typicalSound.addEventListener('ended', function(){
    			cablecarSound.play();
				});

	cablecarSound.addEventListener('ended', function(){
		lightwindSound.play();
	});

	// Drag (Clone Weather Images)
	$( '.draggable' ).draggable({ 
	opacity: 0.7, 
	helper: 'clone' 
	});

	// Drop
	$( "#droppable" ).droppable({
		drop: function( event, ui ) {
			// $( this ).addClass( "ui-state-highlight" );

			// console.log(ui.draggable);

			console.log('event ', event);

			console.log('ui ', ui);

			console.log('this ', this);

			if ( ui.draggable.hasClass('sunny') ) {

				console.log(this);

				$(this).attr('src', 'img/sunny-bridge.svg');
	
				fogHorn.pause();
				windSound.pause();
				rainSound.pause();
				sinatra.pause();
				alertSound.pause();
				bartSound.pause();
				typicalSound.pause();
				cablecarSound.pause();
				lightwindSound.pause();

				sunnySound.play();
				sunnySound.currentTime = 0;

			} else if (ui.draggable.hasClass('foggy') ) {

				$(this).attr('src', 'img/foggy-bridge.svg');
				// .addClass( "foggy-bridge");

				sunnySound.pause();
				windSound.pause();
				rainSound.pause();
				sinatra.pause();
				alertSound.pause();
				bartSound.pause();
				typicalSound.pause();
				cablecarSound.pause();
				lightwindSound.pause();

				fogHorn.play();
				fogHorn.currentTime = 0;

			} else if (ui.draggable.hasClass('windy') ) {

				$(this).attr('src', 'img/windy-bridge.svg');

				sunnySound.pause();
				fogHorn.pause();
				rainSound.pause();
				sinatra.pause();
				alertSound.pause();
				bartSound.pause();
				typicalSound.pause();
				cablecarSound.pause();
				lightwindSound.pause();

				windSound.play();
				windSound.currentTime = 0;

			} else if (ui.draggable.hasClass('rainy') ) {

				$(this).attr('src', 'img/rainy-bridge.svg');
				sunnySound.pause();
				fogHorn.pause();
				windSound.pause();
				sinatra.pause();
				alertSound.pause();
				bartSound.pause();
				typicalSound.pause();
				cablecarSound.pause();
				lightwindSound.pause();

				rainSound.play();
				rainSound.currentTime = 0;

			} else if (ui.draggable.hasClass('romantic') ) {

				$(this).attr('src', 'img/romantic-bridge.svg');
				
				// Play Sinatra when romantic weather is chosen
				sinatra.play();
				sinatra.currentTime = 0;

			    // Stop all other sounds
			    sunnySound.pause();
				fogHorn.pause();
				windSound.pause();
				rainSound.pause();
				alertSound.pause();
				bartSound.pause();
				typicalSound.pause();
				cablecarSound.pause();
				lightwindSound.pause();

			} else if (ui.draggable.hasClass('snowy') ) {

				$(this).attr('src', 'img/snowy-bridge.svg');
				$('body').append('<div class="background-overlay"></div>');
				$('body').addClass('open-modal');

				$('.close-icon').on('click', function() {

				console.log("modal closed");

				$('body').removeClass('open-modal');
				$('.background-overlay').remove();
				});
				
				sunnySound.pause();
				fogHorn.pause();
				windSound.pause();
				rainSound.pause();
				sinatra.pause();
				typicalSound.pause();
				cablecarSound.pause();
				lightwindSound.pause();

				alertSound.play();
				alertSound.currentTime = 0;
				bartSound.currentTime = 0;


			} else {
				$(this).attr('src', 'img/typical-bridge.svg');

				sunnySound.pause();
				fogHorn.pause();
				windSound.pause();
				rainSound.pause();
				sinatra.pause();
				alertSound.pause();
				bartSound.pause();

			    typicalSound.play();
			    typicalSound.currentTime = 0;
			    cablecarSound.currentTime = 0;
			    lightwindSound.currentTime = 0;
		
			}
		}
	});
});


// $( function(event, ui) {


// 	if( $(this).attr('scr') == 'img/sunny-bridge.svg') {

// 		$(this).attr('src', 'img/sunny-bridge.svg');
// 	} else if ($(this).attr('src') == '') {
// 		$(this).attr('src', 'img/foggy-bridge.svg');
// 	} else if ($(this).attr('src') == '') {
// 		$(this).attr('src', 'img/windy-bridge.svg');
// 	} else if ($(this).attr('src') == '') {
// 		$(this).attr('src', 'img/rainy-bridge.svg');
// 	} else if ($(this).attr('src') == '') {
// 		$(this).attr('src', 'img/romantic-bridge.svg');
// 	} else if ($(this).attr('src') == '') {
// 		$(this).attr('src', 'img/snowy-bridge.svg');
// 	} else if ($(this).attr('src') == '') {
// 		$(this).attr('src', 'img/typical-bridge.svg');
// 	}

// });
