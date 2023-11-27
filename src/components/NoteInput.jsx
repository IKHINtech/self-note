import React from "react";

export default function NoteInput() {
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form>
        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          required={true}
          value=""
        ></input>
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required={true}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
