import React from 'react';

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

  //Update new todo
  updateNewTodo = event => {
    this.setState({
      newTodo: event.target.value
    });
  }

  //Add a todo
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

  //Update todo filter
  updateFilter = event => {
    this.setState({
      filter: event.target.value
    });
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
      <main>
        <h1>Hmmm... What's there Todo?</h1>
        <TodoForm
          newTodo={ this.state.newTodo }
          updateNewTodo = { this.updateNewTodo }
          addTodo = { this.addTodo }
          filter = { this.state.filter }
          updateFilter = { this.updateFilter }
          clearFilter = { this.clearFilter }
        />
        <TodoList
          toggleComplete={ this.toggleComplete }
          filter={ this.state.filter }
          todos={ this.state.todos }
        />
      </main>
    );
  }
}

export default App;
