import React from "react";
import NoteItem from "./NoteItem";
export default function NoteList({ notes, title, onMark, onDelete }) {
  return (
    <>
      <h2>{title}</h2>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onMark={onMark}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}
