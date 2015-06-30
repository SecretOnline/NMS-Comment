var data_words = [
  'planet',
  'star',
  'solar system',
  'galaxy',
  'voxel',
  'animal',
  'plant',
  'bush',
  'tree',
  'ship',
  'mountain',
  'hill',
  'cave',
  'river',
  'ocean',
  'mountain',
  'comment',
  'procedure',
  'release date',
  'tweet',
  'post',
  'article',
  'wallpaper',
  "fan art",
  '"Every x procedural"',
  'atom',
  'planet name convention',
  'theory'
];

function addGenerateButton(){
  var commentAreaArray = document.querySelectorAll('.usertext-edit');
  for (var i = 0; i < commentAreaArray.length; i++){
    var button = commentAreaArray[i].querySelector('.procedural');
    if (!button){
      var buttonContainer = commentAreaArray[i].querySelector('.usertext-buttons');
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
