const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const exampleArr = ['# Markdown Previewer', '## An FCC project','`Type Markdown in the editor window and see it displayed in the preview window.`',
'[Link to markdown cheatsheet on github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)', '[google](google.com)',
' 1. This is an example of a first ordered list item', '2. This is another example', ' > This is a Blockquotes.', ' **Try it out for yourself!**',
'Inline-style Image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")'];
window.addEventListener('load', function(event){
  exampleArr.forEach(el=> preview.innerHTML += marked(el));
  exampleArr.forEach(el=> editor.textContent += el +'\n');
});
editor.addEventListener('input', function(event){
  preview.innerHTML = marked(`${editor.value}`);
});
