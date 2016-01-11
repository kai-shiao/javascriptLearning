function addFocus(){
	input.focus();
}

function reverseNumber() {
	var input=document.getElementById('number').value;
    var result=input.split('').reverse().join('');
    document.getElementById('response').textContent=result;
}

var input=document.getElementById('number');
input.addEventListener('click',addFocus,false);

var submitButton=document.getElementsByTagName('button')[0];
submitButton.addEventListener('click',reverseNumber,false);