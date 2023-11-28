import React from "react";

export default function NoteSearch({ query, setQuery }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
