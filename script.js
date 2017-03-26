var textarea = document.getElementById("sandbox"),
    text = textarea.value;

var splitted = textarea.split(" ");
splitted;
textarea.toLowerCase();


function addWord(dictionary, word){
  if(!(word in dictionary)){
    dictionary[word] = 0;
  }
  dictionary[word] +=1;
}