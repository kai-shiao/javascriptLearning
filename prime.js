function addFocus(){
	input.focus();
}

function PrimeNumberSolver(){
	var n=parseInt(input.value);
	var cancel=false;
	if (n<=1){
		result='neither';
	}
	if (n===2){
		result='prime';
		cancel=true;
	}
	var f=2;
	var count=0;

	var result;

	while (f<n && count===0 && cancel===false){
		if (n%f===0){
			count++;
		} 
		f++;
	}
 
	if (count>0){
		result='composite';
	}else{
		result='prime';
	}

	var answer=document.getElementById('demo');
	answer.textContent=n+' is a '+result+' number.';
};

var input=document.getElementsByTagName('input')[0];
input.addEventListener('click',addFocus,false);
var finalizeButton=document.getElementsByTagName('button')[0];
finalizeButton.addEventListener('click',PrimeNumberSolver,false);