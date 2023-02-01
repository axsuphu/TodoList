function NewTask({ task }) {
  return (
    <div>
      <li key={task}>{task}</li>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default NewTask;
