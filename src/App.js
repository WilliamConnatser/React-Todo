import React from 'react';
import './App.css';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: "",
      filter: ""
    }
  }

  //Text input event handler
  updateInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //Add a Todo
  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.newTodo,
          id: Date.now().toString(),
          completed: false
        }
      ],
      newTodo: ""
    });
  }

  //Toggle complete boolean on a todo
  toggleComplete = event => {
    const newTodos = [...this.state.todos];
    const index = newTodos.findIndex(todo => todo.id === event.target.id);

    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed
    }

    this.setState({
      todos: [...newTodos]
    })
  }

  //Clear todo filter
  clearFilter = event => {
    event.preventDefault();
    this.setState({
      filter: ""
    });
  }

  //Remove completed todos
  clearCompleted = _ => {
    const filteredTodos = [...this.state.todos].filter(todo => {
      return !todo.completed
    })
    this.setState({
      todos: filteredTodos
    });
  }

  render() {
    return (
      <main className="container">
        <div className="list-container">
          <h1>Hmmm... What's there Todo?</h1>
          <TodoForm
            newTodo={ this.state.newTodo }
            updateInput = { this.updateInput }
            addTodo = { this.addTodo }
            filter = { this.state.filter }
            clearFilter = { this.clearFilter }
            clearCompleted = { this.clearCompleted }
          />
          <TodoList
            toggleComplete={ this.toggleComplete }
            filter={ this.state.filter }
            todos={ this.state.todos }
          />
        </div>
      </main>
    );
  }
}

export default App;
