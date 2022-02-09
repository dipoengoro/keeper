import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';

function Input(props) {
  
  const [note, setNote] = useState({
    title: '',
    content: ''
  });
  
  const [isExpanded, setIsExpanded] = useState(false);
  
  const { title, content } = note;
  const {onAddNote} = props;
  
  function handleChanges(event) {
    const {name, value} = event.target;
    setNote(prevNote => ({...prevNote, [name]: value}));
  }
  
  function handleSubmit(event) {
    onAddNote({title: title.trim(), content: content.trim()});
    setNote({
      title: '',
      content: ''
    });
    event.preventDefault();
  }
  
  function expand() {
    setIsExpanded(!isExpanded);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {isExpanded && (
          <input
            name="title"
            onClick={expand}
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