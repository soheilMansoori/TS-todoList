import { TodoType } from "../TodoList/TodoList";

type TodoProps = {
  removeTodo: (todoID: string) => void;
  updateTodo: (todoID: string) => void;
} & TodoType;

export default function Todo({
  id,
  isComplete,
  removeTodo,
  title,
  updateTodo,
}: TodoProps): JSX.Element {
  return (
    <div className="Todo">
      <p
        onClick={() => updateTodo(id)}
        className={isComplete ? "completed" : ""} // or completed className
      >
        {title} :))
      </p>
      <div>
        <i className="fa fa-trash" onClick={() => removeTodo(id)} />
      </div>
    </div>
  );
}
