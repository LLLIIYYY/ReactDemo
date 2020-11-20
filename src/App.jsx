import './App.scss';
import React from 'react';
import TodoListComponent from './component/TodoList';
import AddBarComponent from './component/AddBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: 'A', completed: false },
        { title: 'B', completed: false },
        { title: 'C', completed: false },
      ]
    };
  }
  render() {
    const todos = this.state.todos;
    return (
      <div className="app">
        <AddBarComponent />
        <TodoListComponent todos={todos} />
      </div>
    );
  }
  addTodo = (todo) => {
    this.state.todos.push(todo);
  }
  removeTodo = (todo) => {
    this.state.todos.splice(this.state.todos.indexOf(todo), 1);
  }
}

export default App;
