import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  
  const {id, note, onDelete} = props;
  const {title, content} = note;
  
  function handleDelete() {
    onDelete(id);
  }
  
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}><DeleteIcon /></button>
    </div>
  )
}

export default Note;