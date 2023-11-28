import React, { useState } from "react";

export default function NoteInput({ setNotes, notes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleLength, setTitleLength] = useState(0);

  const handleChangeTitle = (value) => {
    if (value.length <= 50) {
      setTitle(value);
      setTitleLength(value.length);
    }
  };

  const onAddNote = (e) => {
    e.preventDefault();

    if (title.trim() !== "" && body.trim() !== "") {
      setTitle("");
      setBody("");
      setTitleLength(0);
      const note = {
        id: +new Date(),
        title: title.trim(),
        body: body.trim(),
        archived: false,
        createdAt: new Date(),
      };
      setNotes([...notes, note]);
    }
  };

  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={onAddNote}>
        {titleLength <= 50 && (
          <p className="note-input__title__char-limit">
            Sisa karakter: {50 - titleLength}
          </p>
        )}
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          required={true}
          onChange={(event) => handleChangeTitle(event.target.value)}
          value={title}
        ></input>
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required={true}
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
