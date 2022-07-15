import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  handleDelDone = () => {
    if (window.confirm("是否确定清除所有已完成任务？"))
      this.props.delTodoDone();
  };
  render() {
    const { todoList } = this.props;
    const total = todoList.length;
    const doneCount = todoList.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={total === doneCount && total !== 0}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleDelDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
