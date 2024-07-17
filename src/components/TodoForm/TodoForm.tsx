import { useRef, useState } from "react";
type TodoFormProps = {
  addNewTodo: (title: string) => void;
};

export default function TodoForm({ addNewTodo }: TodoFormProps) {
  // input value
  const [inputValue, setInputValue] = useState<string>("");
  // input element
  const inputElement = useRef<HTMLInputElement>(null);
  // submit handler
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // add todo
    addNewTodo(inputValue.trim());
    // clear input
    setInputValue("");
    // focus input
    inputElement.current?.focus();
  };
  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        ref={inputElement}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
