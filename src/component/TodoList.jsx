import React from 'react';

import TodoItemComponent from './TodoItem';

class TodoListComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const todos = this.props.todos;
        return (
            <ul className="todoList">
                {todos.map(todo => <TodoItemComponent todo={todo} />)}
            </ul>
        )
    }
}

export default TodoListComponent;