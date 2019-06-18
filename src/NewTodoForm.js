import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuid(), completed: false };
    this.props.createTodo(newTodo);
    this.setState({ task: "" });
  };
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">Add New Todo:</label>
        <input
          type="text"
          placeholder="What would you like to add?"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        {this.state.task !== "" && <button>Add</button>}
      </form>
    );
  }
}

export default NewTodoForm;
