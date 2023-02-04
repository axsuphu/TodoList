import "./App.css";
import { useState } from "react";
import { NewTask } from "./NewTask";

function App() {
  //todo item will be an object that has id and task name
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    //each time the input changes, make todoList that change
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      // if there is nothing in array, id:1 other wise, id:last-element-plus-1
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    //define new variable to include whatever is already inside todoList with the newTask added
    setTodoList([...todoList, task]);
    //reset input to empty string
    setNewTask("");
  };

  const handleDelete = (id) => {
    //onClick, delete task from todoList
    //todoList is an array
    //use filter. with each iteration, if false is returned, that word will not appear in shallow copy.
    //prevent deleting two elements of the same name
    setTodoList(todoList.filter((task) => (task.id !== id ? true : false)));
  };

  const handleComplete = (id) => {
    // change the completed key to the value of false when complete button is clicked
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  console.log(todoList);

  return (
    <div className="App">
      <div className="create-task">
        <input onChange={handleChange} value={newTask} />
        <button className="button-create" onClick={handleSubmit}>
          Create Task
        </button>
      </div>
      <div>
        <h1>Tasks</h1>
        <ul>
          {todoList.map((task) =>
            task.completed === false ? (
              <NewTask
                taskId={task.id}
                taskName={task.taskName}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
              />
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
