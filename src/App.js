import { useState } from "react";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => {
        if (note.id !== id) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const updateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
      />
      <Main activeNote={getActiveNote()} updateNote={updateNote} />
    </div>
  );
}

export default App;
