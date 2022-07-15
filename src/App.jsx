import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "搬砖", done: false },
    ],
  };

  addTodo = (todoObj) => {
    const { todoList } = this.state;
    const newTodoList = [todoObj, ...todoList];
    this.setState({ todoList: newTodoList });
  };

  updateTodo = (id, done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((todoObj) => {
      if (id === todoObj.id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todoList: newTodoList });
  };

  delTodo = (id) => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((item) => item.id !== id);
    this.setState({ todoList: newTodoList });
  };

  checkAllTodo = (done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((item) => {
      return { ...item, done };
    });
    this.setState({ todoList: newTodoList });
  };

  delTodoDone = () => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((item) => !item.done);
    this.setState({ todoList: newTodoList });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todoList={todoList}
            updateTodo={this.updateTodo}
            delTodo={this.delTodo}
          />
          <Footer todoList={todoList} checkAllTodo={this.checkAllTodo} delTodoDone={this.delTodoDone} />
        </div>
      </div>
    );
  }
}
