import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };

  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
  };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDel = (id) => {
    if (window.confirm("确定删除吗？")) {
      this.props.delTodo(id);
    }
  };

  render() {
    const { todo } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.handleCheck(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => this.handleDel(todo.id)}
        >
          删除
        </button>
      </li>
    );
  }
}
