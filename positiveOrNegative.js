function addFocus(e){
	var eventTarget=e.target;
	var eventTargetID=e.target.id;
	if (eventTargetID==='a' || eventTargetID==='a'){
		eventTarget.focus();
	}
}

function whichNumberIsBigger(){
	var firstNumber=numberA.value;
	var secondNumber=numberB.value;
	var thirdNumber=numberC.value;
	var product=firstNumber*secondNumber*thirdNumber;
	
	if (product<0){
		document.getElementById('response').textContent='The sign is -';
	} else if (product===0) {
		document.getElementById('response').textContent='The sign is neither positive nor negative';
	} else {
		document.getElementById('response').textContent='The sign is +';
	}
} 


var numberA=document.getElementById('a');
var numberB=document.getElementById('b');
var numberC=document.getElementById('c');
numberA.addEventListener('click',addFocus,false);
numberB.addEventListener('click',addFocus,false);
numberC.addEventListener('click',addFocus,false);

var submitButton=document.getElementsByTagName('button')[0];
submitButton.addEventListener('click',whichNumberIsBigger,false);