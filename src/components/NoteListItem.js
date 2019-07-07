import React from "react";
import PropTypes from "prop-types";

import "./NoteListItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const style = {
  image: {
    width: "16px",
    height: "16px",
    alignContent: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0
  }
};

export default function NoteItem({ note, onDelete, onEdit }) {
  return (
    <div className="note-item">
      {note.value}
      <div>
        <Button
          className="button button-icon"
          onClick={() => onDelete(note.id)}
        >
          <FontAwesomeIcon icon={faTrash} color="#f4511e" />
        </Button>
        <Button className="button button-icon" onClick={() => onEdit(note)}>
          <FontAwesomeIcon icon={faEdit} color="#43a047" />
        </Button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
};
