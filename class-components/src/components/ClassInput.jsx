import { Component } from 'react';
import { Count } from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Arrow functions to avoid using .bind(this)
  handleInputChange = (e) => {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
      isEditing: false,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  };
  handleDelete = (todoToDel) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo !== todoToDel),
    }));
  };
  handleEdit = (todoToEdit) => {
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: todoToEdit.inputVal,
    }));
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="task-entry"
        value={todoToEdit.inputVal}
        onChange={this.handleInputChange}
      />
      <button type="submit">Reubmit</button>
    </form>;
  };

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {todo}{' '}
              <button type="button" onClick={() => this.handleEdit(todo)}>
                Edit
              </button>
              {this.state.todos.length > 1 && (
                <button type="button" onClick={() => this.handleDelete(todo)}>
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
        <Count count={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;
