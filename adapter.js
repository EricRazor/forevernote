const adapter = {
  getNotes:function(){
    // GET    /api/v1/notes
    return fetch('http://localhost:3000/api/v1/notes')
    .then(response => response.json())
  },
  postNotes:function(user_id, title, body){
    // POST   /api/v1/notes
    return fetch('http://localhost:3000/api/v1/notes', {
      method: "POST",
      body: JSON.stringify({user_id:user_id, title:title, body:body}),
      headers:{"Content-Type":"application/json"}
    }).then(resp => resp.json())
  },
  getaNote:function(note_id){
    // GET      /api/v1/notes/:id
    return fetch(`http://localhost:3000/api/v1/notes/${note_id}`, {method: "GET"})
    .then(response => response.json())
  }

}
