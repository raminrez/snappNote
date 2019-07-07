import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../components/Button";
import Input from "../components/Input";

import { getNotes } from "../selectors/note";
import { doAddNote, doEditNote, doDeleteNote } from "../actions/note";
import NoteList from "./NoteList";

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
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ value: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    this.addNote(value);
  }

  onButtonClick() {
    this.addNote(this.state.value);
  }

  addNote(value) {
    if (value) {
      this.props.add(value);
      this.setState({
        value: "",
        isEditing: false
      });
    }
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
        <NoteList notes={this.props.notes} />
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
