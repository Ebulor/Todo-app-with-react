export default function Form({ setTodos, todos, setInputText, inputText }) {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 }
      ]);
      setInputText("");
    }
  };
  return (
    <form>
      <button onClick={submitHandler} className="todo-btn"></button>
      <input
        type="text"
        className="todo-input"
        placeholder="Create a new todo..."
        onChange={inputHandler}
        value={inputText}
      />
    </form>
  );
}
