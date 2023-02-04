// normally, parameter passed in is (props). But instead of writing props.taskId, props is destructured and the name passed down can be used without dot notation
export const NewTask = ({ taskId, taskName, handleDelete, handleComplete }) => {
  return (
    <div>
      <li key={taskId}>{taskName}</li>
      <button onClick={() => handleComplete(taskId)}>Complete</button>
      <button onClick={() => handleDelete(taskId)}>Delete</button>
    </div>
  );
};
