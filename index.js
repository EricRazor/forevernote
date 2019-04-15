document.addEventListener('DOMContentLoaded', init)

function init(){

  const noteTitleContent = document.querySelector('.noteTitle')
  const noteBodyContent = document.querySelector('.noteContent')
  const noteFormSubmission = document.querySelector('.addNoteForm')
  const allNotes = document.querySelector('.note_content')

  noteFormSubmission.addEventListener('submit', function(e){
    e.preventDefault();
    const noteTitle = e.target.children[1].value
    const noteContent = e.target.children[2].value
    adapter.postNotes(1,noteTitle,noteContent)
    .then(function(newNote){
      const noteContent = document.querySelector(".note_content")
      noteContent.innerHTML += `<div><h1 id='${newNote.id}'>${newNote.title}</h1></div>`
    })
  })

  allNotes.addEventListener('click', function(e){
    const aNote = e.target.id
    adapter.getaNote(aNote).then(function(noteBody){
      const noteBodyDisplay = document.querySelector(".note_body")
      noteBodyDisplay.innerHTML = '' //re renders a note
      noteBodyDisplay.innerHTML += `<div><h1 id='${noteBody.id}'>${noteBody.body}</h1></div>`
    })
  })
}
