import "./App.css";
import { useState } from "react";
import NewTask from "./NewTask";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    //each time the input changes, make todoList that change
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    //on click, todo list will have another element
    event.preventDefault();
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    setNewTask("");
  };

  console.log("todoList", todoList);

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
          {todoList.map((task) => {
            return <NewTask task={task} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
