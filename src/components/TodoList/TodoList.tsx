import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

export type TodoType = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TodoListType = TodoType[];

export default function TodoList(): JSX.Element {
  // todo list
  const [todoList, setTodoList] = useState<TodoListType>(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );

  // save in local storage
  const saveInStorage = (todoList: TodoListType): void =>
    localStorage.setItem("todoList", JSON.stringify(todoList));

  // add new todo
  const addNewTodo = (title: string): void => {
    if (title) {
      const newTodoInfo: TodoType = {
        id: crypto.randomUUID(),
        title,
        isComplete: false,
      };
      setTodoList([...todoList, newTodoInfo]);
      saveInStorage([...todoList, newTodoInfo]);
    }
  };

  // remove todo
  const removeTodo = (todoID: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoID);
    setTodoList(newTodoList);
    saveInStorage(newTodoList);
  };

  // update todo
  const updateTodo = (todoID: string) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoID) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    saveInStorage(updatedTodoList);
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>

      {/* Add New Todo Form */}
      <TodoForm addNewTodo={addNewTodo} />

      {/* display todos */}
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}
