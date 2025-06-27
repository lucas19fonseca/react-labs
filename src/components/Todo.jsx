export default function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      <div>
        <p>{todo.text}</p>
        <small>{todo.category}</small>
      </div>
      <div>
        <button onClick={() => completeTodo(todo.id)}>✔</button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  );
}
