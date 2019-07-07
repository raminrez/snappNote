import uuid from "uuid/v4";

import { NOTE_ADD, NOTE_DELETE, NOTE_EDIT } from "../constants/actionTypes";

const doAddNote = value => {
  const id = uuid();
  return {
    type: NOTE_ADD,
    note: {
      id,
      value
    }
  };
};

const doDeleteNote = id => ({
  type: NOTE_DELETE,
  note: { id }
});

const doEditNote = (id, value) => ({
  type: NOTE_EDIT,
  note: { id, value }
});

export { doAddNote, doDeleteNote, doEditNote };
