import React from "react";
import PropTypes from "prop-types";
import "./NoteItem.scss";
import Button from "./Button";

export default function NoteItem({ note, onDelete, onEdit }) {
  return (
    <div className="note-item">
      {note.value}
      <Button onClick={() => onDelete(note.id)}>Delete</Button>
      <Button onClick={() => onEdit(note)}>Edit</Button>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};
