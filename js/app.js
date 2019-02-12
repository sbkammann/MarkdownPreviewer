// When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
//When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type
// (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
//When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least
// one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
//When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.
//When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).
//My markdown previewer interprets carriage returns and renders them as br (line break) elements.
// a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const exampleArr = ['# Markdown Previewer', '## An FCC project','`Type Markdown in the editor window and see it displayed in the preview window.`', '[Link to markdown cheatsheet on github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)', ' 1. This is an example of a first ordered list item',
          '2. This is another example', ' > This is a Blockquotes.', ' **Try it out for yourself!**', 'Inline-style Image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")'];
window.addEventListener('load', function(event){
  exampleArr.forEach(el=> preview.innerHTML += marked(el));
  exampleArr.forEach(el=> editor.textContent += el +'\n');
});

editor.addEventListener('input', function(event){ //need a different event
  // if(event.key === 'Enter'){
  //   console.log('enter')
  //   preview.appendChild('<br>');
  // }

  preview.innerHTML = marked(`${editor.value}`);
});
