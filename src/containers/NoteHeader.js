import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../components/Button";
import Input from "../components/Input";

import { getNotes } from "../selectors/note";
import { doAddNote, doEditNote } from "../actions/note";

class NoteHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h5>Note App</h5>
        </header>
        <div className="note-submit-form">
          <Input placeholder="Add Some Note" />
          <Button onClick={() => {}}>Add</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: getNotes(state)
});

const mapDispatchToProps = dispatch => ({
  addNote: value => dispatch(doAddNote(value)),
  editNote: (id, value) => dispatch(doEditNote(id, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteHeader);
