


const TaskList = ({tasks}) => {
  return (
    <ul id="taskList">
      {tasks.map(item => (
        <li>
          <span>{item.id}</span>
          <span>{item.task}</span>
          <div className="actions">
            <button>✔️</button>
            <button>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
