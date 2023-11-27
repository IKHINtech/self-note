import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import { getInitialData } from "./utils/index";
import NoteItem from "./components/NoteItem";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [query, setQuery] = useState("");
  const [activeNote, setActiveNote] = useState([]);
  const [archiveNote, setArchiveNote] = useState([]);

  const deleteNote = () => {
    const newNotes = [...notes];
    const noteIndex = newNotes.findIndex((n) => n.id === noteToDelete.id);
    newNotes.splice(noteIndex, 1);
    setNotes(newNotes);
  };

  useEffect(() => {
    const active = [];
    const archive = [];
    notes.forEach((note) => {
      if (note.archived) {
        archive.push(note);
      } else {
        active.push(note);
      }
    });
    setActiveNote(active);
    setArchiveNote(archive);
  }, [notes]);
  return (
    <>
      <Header />
      <div className="note-app__body">
        <NoteInput />
        <h2>Catatan Aktif</h2>
        {activeNote.length !== 0 ? (
          <div className="notes-list">
            {activeNote.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
        <h2>Arsip</h2>
        {archiveNote.length !== 0 ? (
          <div className="notes-list">
            {archiveNote.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </>
  );
}

export default App;
