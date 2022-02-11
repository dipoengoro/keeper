import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';

function Input() {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const { title, content } = note;

  function handleChanges(event) {
    const {name, value} = event.target;
    setNote(prevNote => ({...prevNote, [name]: value}));
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(note);
    fetch('https://dipoengoro-notes-api.herokuapp.com/api/notes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      },
      body: JSON.stringify({
        title: title.trim(),
        content: content.trim()
      })
    }).then(response => {
      console.log(response);
    }).then(()=>{
      window.location.reload()
    }).catch(err => {
      console.log(err);
    });
  };

  function expand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChanges}
            value={title}
            placeholder="Title"
            autoComplete="off"
          />
        )}
        <textarea
          onChange={handleChanges}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
          autoCapitalize="off"
          autoFocus
        />
        <Zoom in={true}>
          <Fab
            color="warning"
            size="medium"
            type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default Input;
