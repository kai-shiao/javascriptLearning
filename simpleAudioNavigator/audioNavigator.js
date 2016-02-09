function changeSong(e){
	var getElementInfo=e.target.id; //Knowing the button that was clicked by the user is used to identify which function (forward or backward)to execute.
	var trackListing=['ifYouHadMyLove.mp3','theOne.mp3','tooLate.mp3']; 
	//Model a real life track-listing using an array; the array index position here is analogous to the track number seen in media players.
    //The array elements are then used as the value for the audio tag's 'src' attribute.
	
	var actualName=['If You Had My Love', 'The One', 'Too Late']; //For song title display in the web page.
	
	var audioElement=document.getElementsByTagName('audio')[0];
	var currentSong=audioElement.getAttribute('src');

	var currentPosition=trackListing.indexOf(currentSong); //Capture the song's position in the current track listing.
	
	//I included the following line of code only for debugging purposes; -1 is returned if the array  element in question is not found.
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
		
	function finalize(){ //Avoid code repetition by writing a function containg procedures common to both scenarios.
		audioElement.setAttribute('src',trackListing[currentPosition]);
		
		var displaySong=document.getElementsByTagName('p')[2];
		displaySong.textContent=actualName[currentPosition];
		audioElement.play();
	}
		
	if (getElementInfo==='forward'){
		forward();
		finalize(); 
	} else {
		backward();
		finalize();
	}
};

var forwardButton=document.getElementsByTagName('button')[0];
forwardButton.addEventListener('click',changeSong,false);

var backwardButton=document.getElementsByTagName('button')[1];
backwardButton.addEventListener('click',changeSong,false);