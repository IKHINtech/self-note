import React from "react";
import NoteSearch from "./NoteSearch";
NoteSearch;

export default function Header({ query, setQuery }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch query={query} setQuery={setQuery} />
    </div>
  );
}
