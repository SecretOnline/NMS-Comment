var data_words = [
  'comment',
  'procedure',
  'release date',
  'tweet',
  'post',
  'article'
];

function addGenerateButton(){
  var commentAreaArray = document.querySelectorAll('.usertext-edit');
  for (var i = 0; i < commentAreaArray.length; i++){
    var button = commentAreaArray[i].querySelector('.procedural');
    if (!button){
      var buttonContainer = commentAreaArray[i].querySelector('.usertext-buttons');
      var commentArea = commentAreaArray[i].querySelector('textarea');
      var newButton = document.createElement('button');
      newButton.type = 'button';
      newButton.innerHTML = 'generate comment';
      newButton.classList.add('procedural');
      newButton.addEventListener('click', generateComment);
      buttonContainer.appendChild(newButton);
    }else{
      // Fix for button not working on comment replies
      button.addEventListener('click', generateComment);
    }
  }
}
function generateComment(){
  var textArea = this.parentNode.parentNode.parentNode.querySelector('textarea');
  textArea.value = 'Every ' + data_words[Math.floor(Math.random() * data_words.length)] + ' procedural';
}
window.addEventListener('DOMSubtreeModified', addGenerateButton);
