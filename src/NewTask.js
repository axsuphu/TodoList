function NewTask({ taskId, taskName, handleDelete }) {
  return (
    <div>
      <li key={taskId}>{taskName}</li>
      <button>Edit</button>
      <button onClick={() => handleDelete(taskId)}>Delete</button>
    </div>
  );
}

export default NewTask;
