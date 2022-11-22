import { useState, useEffect } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import Filter from "./Components/Filter";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState(true);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  //setFilteredTodos(todos);
  const filterHandler = (e) => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));

        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const clearComplete = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  const themeHandler = () => {
    setTheme((prevTheme) => !prevTheme);
    document.body.classList.toggle("darkmode");
  };
  return (
    <div className="App">
      <header className={` ${theme ? "light" : "darktheme"}`}>
        <div className="header-wrapper">
          <div className="logo">
            <h1>TODO</h1>
          </div>
          <div className="icon" onClick={themeHandler}></div>
        </div>
      </header>
      <main>
        <div className="container">
          <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
          />
          {todos.length >= 1 && (
            <>
              <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
              />
              <Filter
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
                setStatus={setStatus}
                handleClick={clearComplete}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
