import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Input from "./input/Input";
import Note from "./note/Note";

function App() {
  
  const [notes, setNotes] = React.useState([]);
  
  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }
  
  function handleDelete(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }
  
  return (
    <div>
      <Header />
      <Input onAddNote={addNote} />
      {notes.map((note, index) => <Note key={index} id={index} note={note} onDelete={handleDelete}/>)}
      <Footer />
    </div>
  );
}

export default App;