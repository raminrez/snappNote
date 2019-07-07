import { combineReducers } from "redux";

import noteReducer from "./note";

const rootReducer = combineReducers({
  noteState: noteReducer
});

export default rootReducer;
