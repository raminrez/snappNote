import React from "react";
import PropTypes from "prop-types";

import "./NoteListItem.scss";
import { delete_icon, edit_icon } from "../assets/icon/png";
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
          className="button button-orange"
          onClick={() => onDelete(note.id)}
        >
          <img src={delete_icon} style={style.image} />
        </Button>
        <Button className="button button-green" onClick={() => onEdit(note)}>
          <img src={edit_icon} style={style.image} />
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
