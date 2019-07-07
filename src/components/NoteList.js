import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteListItem";

import "./NoteList.scss";

export default function NoteList({ notes, editNote, deleteNote }) {
  return (
    <div className="note-list">
      {(notes || []).map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
    </div>
  );
}

NoteList.propType = {
  notes: PropTypes.array,
  editNote: PropTypes.func,
  deleteNote: PropTypes.deleteNote
};
