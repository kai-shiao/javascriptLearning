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
	if (firstNumber!=secondNumber){
		if (numberA>numberB) {
			document.getElementById('response').textContent=firstNumber;
		} else {
			document.getElementById('response').textContent=secondNumber;
		}
	} else {
		document.getElementById('response').textContent='Please enter 2 different numbers.';
	}
}

var numberA=document.getElementById('a');
var numberB=document.getElementById('b');
numberA.addEventListener('click',addFocus,false);
numberB.addEventListener('click',addFocus,false);

var submitButton=document.getElementsByTagName('button')[0];
submitButton.addEventListener('click',whichNumberIsBigger,false);