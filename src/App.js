import { useState, useEffect } from "react";
import "./index-sass/index.css"
import TaskContainer from "./components/TaskContainer/TaskContainer"

function App() {
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(true);

  useEffect(() =>{
    let myTodo = localStorage.getItem('myTodoTasks');
    if(myTodo){
      setTasks(JSON.parse(myTodo))
    }
  }, [])

  return (
    <section className={dark ? 'App darkMode' : 'App'} >
    <article className="todo-container">
      <h1 className={dark ? 'darkMode-title' : 'lightMode-title'}>To-Do App</h1>
      <aside className="mode-container">
        <input className="mode-switcher" type='checkbox' id="mode-switch" checked={dark} onChange={() => setDark(!dark)} />
      </aside>
    </article>
    <TaskContainer tasks={tasks} setTasks={setTasks} dark={dark}/>
      
    </section>
  );
}

export default App;
