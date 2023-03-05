import { useState, useEffect } from "react";
import Switch from "react-switch";
import "./index-sass/index.css";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    let myTodo = localStorage.getItem("myTodoTasks");
    if (myTodo) {
      setTasks(JSON.parse(myTodo));
    }
  }, []);

  return (
    <section className={dark ? "App darkMode" : "App"}>
      <article className="todo-container">
        <h1 className={dark ? "darkMode-title" : "lightMode-title"}>
          To-Do App
        </h1>
        <Switch
          className="switch"
          id="mode-switch"
          checked={dark}
          onChange={() => setDark(!dark)}
          uncheckedIcon={
            <div className="switch sun-btn">
              <FaSun size={18} />
            </div>
          }
          checkedIcon={
            <div className="switch moon-btn">
              <FaMoon size={18} />
            </div>
          }
        />
      </article>
      <TaskContainer tasks={tasks} setTasks={setTasks} dark={dark} />
    </section>
  );
}

export default App;
