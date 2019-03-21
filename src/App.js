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

  //Update todo filter
  updateFilter = event => {
    this.setState({
      filter: event.target.value
    });
  }

  updateInput = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
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
      <main className="">
        <div className="">
          <h1>Hmmm... What's there Todo?</h1>
          <TodoForm
            newTodo={ this.state.newTodo }
            updateInput = { this.updateInput }
            addTodo = { this.addTodo }
            filter = { this.state.filter }
            clearFilter = { this.clearFilter }
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
