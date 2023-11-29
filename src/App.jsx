import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import { getInitialData } from "./utils/index";
import NoteList from "./components/NoteList";

function App() {
  // state
  const [notes, setNotes] = useState(getInitialData());
  const [keyword, setKeyword] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

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

  return (
    <>
      <Header query={keyword} setQuery={setKeyword} />
      <div className="note-app__body">
        {/* Form tambah note */}
        <NoteInput setNotes={setNotes} notes={notes} />

        {/* Note Aktif */}
        <NoteList
          onDelete={deleteNote}
          onMark={setMark}
          notes={activeNotes}
          title={"Catatan Aktif"}
        />

        {/* Note Sudah Diarsipkan */}
        <NoteList
          onDelete={deleteNote}
          onMark={setMark}
          notes={archivedNotes}
          title={"Arsip"}
        />
      </div>
    </>
  );
}

export default App;
