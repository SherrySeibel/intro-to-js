
var myTextareaElement = document.getElementById('myWordsToCount');

myTextareaElement.onkeyup = function(){
  var words = String.split(' ');
  console.log(words);

  return words;
}
