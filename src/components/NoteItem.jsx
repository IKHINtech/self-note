import { showFormattedDate } from "../utils/index";
import React from "react";

export default function NoteItem({ note, onMark, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(note)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onMark(note)}
        >
          {note.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}
