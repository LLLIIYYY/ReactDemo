import React from 'react';

export default class TodoItemComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <li className="teodoItem">{this.props.todo.title}</li>
    )
  }
}