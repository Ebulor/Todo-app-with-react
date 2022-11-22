export default function Todo({ text, todo, completed, setTodos, todos }) {
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed
          };
        }
        return el;
      })
    );
  };
  const removeHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className={`todo ${completed ? "completed" : ""}`} draggable="true">
      <button
        className={`complete-btn ${completed ? "complete-bg" : ""}`}
        onClick={completeHandler}
      ></button>
      <li className="todo-item">{text}</li>
      <button className="remove-btn" onClick={removeHandler}></button>
    </div>
  );
}
