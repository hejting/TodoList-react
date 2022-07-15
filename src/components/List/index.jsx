import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    todoList: PropTypes.array.isRequired,
  };

  render() {
    const { todoList, updateTodo, delTodo } = this.props;
    return (
      <ul className="todo-main">
        {todoList.map((item) => {
          return <Item key={item.id} todo={item} updateTodo={updateTodo} delTodo={delTodo} />;
        })}
      </ul>
    );
  }
}
