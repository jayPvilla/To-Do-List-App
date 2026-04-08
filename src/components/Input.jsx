import React, { useState } from 'react';

const Input = ({ lists, set_list }) => {
  const [task_value, set_task] = useState("");

  function add_task() {
    const ids = lists.map(item => Number(item.id));
    const recent_id = ids.length > 0 ? Math.max(...ids) : 0;

    const new_task = {
      id: (recent_id + 1).toString(),
      task: task_value,
      status: "Pending"
    };

    const updatedList = [...lists, new_task];
    
    // Update State
    set_list(updatedList);
    set_task("")
    
    // Update LocalStorage with the new array directly
    localStorage.setItem('List', JSON.stringify(updatedList));
  }

  return (
    <div className="input-group">
        <input 
          type="text" 
          id="taskInput" 
          placeholder="Enter a task..." 
          onChange={(e) => set_task(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter' && task_value.trim() !== ""){
              add_task()
              set_task("")
          }}}
          value={task_value}
        />
        <button id="addBtn" onClick={() => {
          if(task_value.trim() !== "") add_task()
          }}>Add</button>
    </div>
  )
}

export default Input
