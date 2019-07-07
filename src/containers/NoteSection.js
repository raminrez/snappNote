import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../components/Button";
import Input from "../components/Input";

import { getNotes } from "../selectors/note";
import { doAddNote, doEditNote, doDeleteNote } from "../actions/note";
import NoteList from "../components/NoteList";

class NoteSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      isEditing: false,
      editId: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ value: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.addNote();
  }

  onButtonClick() {
    this.addNote();
  }

  addNote() {
    const { editId, isEditing, value } = this.state;
    if (isEditing) {
      if (value) {
        this.props.edit(editId, value);
      }
    } else if (value) {
      this.props.add(value);
    }
    this.setState({
      value: "",
      isEditing: false,
      editId: null
    });
  }

  editNote(note) {
    const { id, value } = note;
    this.setState({
      isEditing: true,
      editId: id,
      value
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h5>Note App</h5>
        </header>
        <div className="note-submit-form">
          <Input
            placeholder="Type here..."
            onSubmit={this.onFormSubmit}
            value={this.state.value}
            onChange={this.onInputChange}
          />
          <Button onClick={this.onButtonClick}>Submit</Button>
        </div>
        <NoteList
          notes={this.props.notes}
          deleteNote={id => this.props.delete(id)}
          editNote={this.editNote}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: getNotes(state)
});

const mapDispatchToProps = dispatch => ({
  add: value => dispatch(doAddNote(value)),
  edit: (id, value) => dispatch(doEditNote(id, value)),
  delete: id => dispatch(doDeleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteSection);
