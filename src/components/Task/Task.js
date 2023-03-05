import React from 'react'
import {FaCheck, FaRegTimesCircle} from 'react-icons/fa'

function Task({task, tasks, setTasks, index, dark}) {
  
  const handleComplete = e =>{
    e.preventDefault()
    let newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks)
  }
  const handleRemove = e =>{
    e.preventDefault();
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    saveToLocal('myTodoTask', newTasks)
  }

  const saveToLocal = (taskName, data) => {
    localStorage.setItem(taskName, JSON.stringify(data))
  }


  return (
    <article className={`task-area ${dark ? 'dark': 'light'}`}>
      <div className={`task-area__box ${dark ? 'dark' : 'light'}`}>
        <h2 style={{textDecoration: task.completed ? 'line-through' : null}} className={`task-area__box__title ${dark ? 'dark' : 'light'}`}>
          {task.title}
        </h2>
        <p style={{textDecoration: task.completed ? 'line-through' : null}} className={`task-area__box__description ${dark ? 'dark' : 'light'}`}>
          {task.description}
        </p>
      </div>

      <div className={`box-task-btn-group ${dark ? 'dark' : 'light'}`}>
        <button type="button" onClick={handleComplete} className={`complete-btn ${dark ? 'dark' : 'light'}`}>
          <FaCheck/>
        </button>

        <button type='button' onClick={(e) => handleRemove(e)} className={`remove-btn ${dark? 'dark' : 'light'}`}>
          <FaRegTimesCircle/>
        </button>
      </div>
    </article>
  )
}

export default Task