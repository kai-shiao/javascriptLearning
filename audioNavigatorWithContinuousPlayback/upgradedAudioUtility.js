function changeSong(e){
	var getElementInfo=e.target.id;
	var trackListing=['ifYouHadMyLove.mp3','theOne.mp3','tooLate.mp3']; 
	//Model a real life track-listing through an array; the array index position here is analogous to the track number.

	var actualName=['If You Had My Love', 'The One', 'Too Late'];
	
	var audio=document.getElementsByTagName('audio')[0];
	var currentSong=audio.getAttribute('src');

	var currentPosition=trackListing.indexOf(currentSong); //Capture the song's position in the current track listing.
	
	//I included the following line of code for debugging purposes.
	console.log(currentPosition);
	
	function forward(){
		if (currentPosition===2){ //Set the track number back to the start when the current song is last in the track listing.
			currentPosition=0;
		} else{
			currentPosition++;
		}
	};

	function backward(){
		if (currentPosition===0){
			currentPosition=2;
		} else{
			currentPosition--;
		}
	};
		
	function finalize(){
		audio.setAttribute('src',trackListing[currentPosition]);
		
		var displaySong=document.getElementsByTagName('p')[2];
		displaySong.textContent=actualName[currentPosition];
		audio.play();
	}
		
	if (getElementInfo==='forward'){
		forward();
		finalize();
	} else {
		backward();
		finalize();
	}
};

function continuousForwardPlayback(){
	var trackListing=['ifYouHadMyLove.mp3','theOne.mp3','tooLate.mp3']; 
	var actualName=['If You Had My Love', 'The One', 'Too Late'];
	var currentSong=audio.getAttribute('src'); 
	
	/*
	What is interesting is that the entire file path is returned if the audio tag's 'src' property is specified, while only the file name 
	is returned if the getAttribute() method is used to capture the audio file name.
	*/
	
	console.log(currentSong);
	
	var songStatus=audio.ended;
	var trackNumber=trackListing.indexOf(currentSong);
	console.log(trackNumber);
	
	if (songStatus===true && trackNumber===2){
		trackNumber=0;
	} else {
		trackNumber++;
	}
	
	audio.setAttribute('src',trackListing[trackNumber]); 
	var displaySong=document.getElementsByTagName('p')[2];
	displaySong.textContent=actualName[trackNumber];
	
	audio.play(); //After changing the audio tag's src attribute, execute the play() method on the HTML element.
}

function showDescription(e){
	var eventTargetID=e.target.id;
	var parentElement=document.getElementsByTagName('body')[0];
	var description=document.createElement('p');
	description.className='buttonLabels';
	parentElement.appendChild(description);
	
	if (eventTargetID==='forward'){
		description.id='forwardLabel';
		description.textContent='Forward';
	} else {
		description.id='backwardLabel';
		description.textContent='Backward';
	}
}

function removeDescription(e){
	var eventTargetID=e.target.id;
	var parentElement=document.getElementsByTagName('body')[0];
	
	if (eventTargetID==='forward'){
		var forwardLabel=document.getElementById('forwardLabel');
		parentElement.removeChild(forwardLabel);
	} else {
		var backwardLabel=document.getElementById('backwardLabel');
		parentElement.removeChild(backwardLabel);
	}
}

var forwardButton=document.getElementsByTagName('button')[0];
forwardButton.addEventListener('click',changeSong,false);
forwardButton.addEventListener('mouseover',showDescription,false);
forwardButton.addEventListener('mouseout',removeDescription,false);

var backwardButton=document.getElementsByTagName('button')[1];
backwardButton.addEventListener('click',changeSong,false);
backwardButton.addEventListener('mouseover',showDescription,false);
backwardButton.addEventListener('mouseout',removeDescription,false);

var audio=document.getElementsByTagName('audio')[0];
audio.addEventListener('ended',continuousForwardPlayback,false);