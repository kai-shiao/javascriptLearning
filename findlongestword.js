function findLongestWord() {
    var string=document.getElementById('string').value;
    var result=string.split(" "); //Cut up the string into several substrings; each substring is a word that made up the string.
    var initial=result[0];
    for (var i=0;i<result.length;i++){
        if (result[i].length>=initial.length){
            initial=result[i];
       }
    }
    document.getElementById('response').textContent='The longest word in the string "'+string+'" is '+initial+'.';
}

function addFocus(){
	input.focus();
}

var input=document.getElementById('string');
input.addEventListener('click',addFocus,false);

var submitButton=document.getElementsByTagName('button')[0];
submitButton.addEventListener('click',findLongestWord,false);