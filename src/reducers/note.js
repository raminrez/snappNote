import { NOTE_ADD, NOTE_DELETE, NOTE_EDIT } from "../constants/actionTypes";

const initialSate = { notes: [] };

function noteReducer(state = initialSate, action) {
  switch (action.type) {
    case NOTE_ADD: {
      return applyAddNote(state, action);
    }
    case NOTE_EDIT: {
      return applyEditNote(state, action);
    }
    case NOTE_DELETE: {
      return applyDeleteNote(state, action);
    }
    default:
      return state;
  }
}

const applyAddNote = (state, action) => ({
  notes: [...state.notes, action.note]
});

const applyDeleteNote = (state, action) => {
  const { note } = action;
  const { id } = note;
  const newNoteState = state.notes.filter(item => item.id !== id);
  return { notes: newNoteState };
};

const applyEditNote = (state, action) => {
  const newNoteState = [...state.notes];
  const { id, value } = action.note;
  newNoteState.find(item => item.id === id).value = value;

  return { notes: newNoteState };
};

export default noteReducer;
