function check(){
	var input=document.getElementsByTagName('input')[0].value;
	var comparison=input.split('').reverse().join('');
	if (input===comparison){
		document.getElementsByTagName('p')[0].textContent='Palindrome';
	} else {
		document.getElementsByTagName('p')[0].textContent='Not a palindrome';
	}
}

var checkButton=document.getElementsByTagName('button')[0];
checkButton.addEventListener('click',check,false);
