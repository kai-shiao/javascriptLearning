function addFocus(){
	input.focus();
}

function theProcessor() {
	var input=document.getElementById('string').value;
    var result=input.match(/[a,e,i,o,u]/g).length;
    document.getElementById('response').textContent='Total number of vowels: '+result;
}

var input=document.getElementById('string');
input.addEventListener('click',addFocus,false);

var submitButton=document.getElementsByTagName('button')[0];
submitButton.addEventListener('click',theProcessor,false);