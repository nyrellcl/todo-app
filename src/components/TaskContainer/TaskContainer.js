import React, {useState} from 'react'
import Task from "../Task/Task"


function TaskContainer({tasks, setTasks, dark}) {
    const [todo, setTodo] = useState({
        completed: false, 
        title: "",
        description: ""
    })

    const handleSubmit = e =>{
        //prevents form from being automaticall submitted on render
        e.preventDefault();
        if (todo.title){
            let newTask = {...todo};
            let newTasks = {...tasks, newTask};
            setTasks(newTasks);
            setTodo({
                title: "",
                description: "",
                completed: false
            })
            localStorage.setItem("myTodoTasks", JSON.stringify(newTasks))
        }
    }

    const handleChange = e =>{
        setTodo({...todo, [e.target.name]: e.target.value})
    }
  return (
    <section className='tasks-container'>
        <form className='tasks-container__form' onSubmit={handleSubmit} action='handleSubmit'>
            <input className="task-title" name="title" id='title' type="text" placeholder='Enter Task' onChange={handleChange} value={todo.title}/>
            <input className="task-description" name="description" id="description" placeholder='Task Description' onChange={handleChange} value={todo.description}/>
            <button type='submit' className={`task-btn ${dark ? 'dark' : 'light'}`}>Add Task</button>
        </form>

        <article className={dark ? 'dark-task-box'  : 'light-task-box'}>
            {tasks?.map((task, taskIdx) =>(
                <Task task={task} tasks={tasks} setTasks={setTasks} index={taskIdx} dark={dark} key={taskIdx}/>
            ))}
        </article>
    </section>
  )
}

export default TaskContainer