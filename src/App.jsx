import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import { getInitialData } from "./utils/index";
import NoteList from "./components/NoteList";

function App() {
  // state
  const [notes, setNotes] = useState(getInitialData());
  const [query, setQuery] = useState("");
  const [originalNotes, setOriginalNotes] = useState([...notes]);

  const active = notes.filter((note) => note.archived !== true);
  const archive = notes.filter((note) => note.archived === true);

  // handler
  const deleteNote = (note) => {
    const newNotes = [...notes];
    const noteIndex = newNotes.findIndex((n) => n.id === note.id);
    newNotes.splice(noteIndex, 1);
    setNotes(newNotes);
  };

  const setMark = (note) => {
    const newNotes = [...notes];
    const targetNote = newNotes.find((n) => n.id === note.id);
    if (targetNote) {
      targetNote.archived = !targetNote.archived;
    }
    setNotes(newNotes);
  };
  const searchNotes = () => {
    const newNotes = [...originalNotes];
    const filteredNotes = newNotes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  // hooks
  useEffect(() => {
    if (query !== "") {
      searchNotes();
    } else {
      setNotes(originalNotes);
    }
  }, [query, originalNotes]);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <div className="note-app__body">
        {/* Form tambah note */}
        <NoteInput setNotes={setNotes} notes={notes} />

        {/* Note Aktif */}
        <NoteList
          onDelete={deleteNote}
          onMark={setMark}
          notes={active}
          title={"Catatan Aktif"}
        />

        {/* Note Sudah Diarsipkan */}
        <NoteList
          onDelete={deleteNote}
          onMark={setMark}
          notes={archive}
          title={"Arsip"}
        />
      </div>
    </>
  );
}

export default App;
