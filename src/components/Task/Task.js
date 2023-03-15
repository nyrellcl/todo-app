import React, { useContext, useState } from "react";
import { FaCheck, FaRegTimesCircle, FaEdit } from "react-icons/fa";
import TodoContext from "../../TodoContext";

function Task({ task, index }) {
  const { tasks, setTasks, dark } = useContext(TodoContext);
  //for editing/updating the task
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleComplete = (e) => {
    e.preventDefault();
    let newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const handleRemove = (e) => {
    e.preventDefault();
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    saveToLocal("myTodoTask", newTasks);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTasks = [...tasks];
    newTasks[index] = editedTask;
    setTasks(newTasks);
    setEditMode(false);
  };

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  const saveToLocal = (taskName, data) => {
    localStorage.setItem(taskName, JSON.stringify(data));
  };

  return (
    <article className={`task-area ${dark ? "dark" : "light"}`}>
      {!editMode ? (
        <div className={`task-area__box ${dark ? "dark" : "light"}`}>
          <h2
            style={{ textDecoration: task.completed ? "line-through" : null }}
            className={`task-area__box__title ${dark ? "dark" : "light"}`}
          >
            {task.title}
          </h2>
          <p
            style={{ textDecoration: task.completed ? "line-through" : null }}
            className={`task-area__box__description ${dark ? "dark" : "light"}`}
          >
            {task.description}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      )}

      <div className={`box-task-btn-group ${dark ? "dark" : "light"}`}>
        <button
          type="button"
          onClick={handleComplete}
          className={`complete-btn ${dark ? "dark" : "light"}`}
        >
          <FaCheck />
        </button>

        <button
          type="button"
          onClick={(e) => handleRemove(e)}
          className={`remove-btn ${dark ? "dark" : "light"}`}
        >
          <FaRegTimesCircle />
        </button>

        <button type="button" className={`edit-btn ${dark? 'dark' : 'light'}`} onClick={() => handleEdit(index)}>
          <FaEdit/>
        </button>
      </div>
    </article>
  );
}

export default Task;
