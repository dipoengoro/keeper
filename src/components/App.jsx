import React, {useEffect} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Input from "./input/Input";
import Note from "./note/Note";

function App() {
  const [notes, setNotes] = React.useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/api/notes");
      const data = await result.json();
      setNotes(data);
    };
    fetchData().then(r => console.log(r));
  }, []);
  
  
  function handleDelete(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }
  
  return (
    <div>
      <Header />
      <Input />
      {notes.map(note => <Note key={note._id} id={note._id} note={note} onDelete={handleDelete}/>)}
      <Footer />
    </div>
  );
}

export default App;