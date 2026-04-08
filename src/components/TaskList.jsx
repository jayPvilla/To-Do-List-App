import React, { useState } from 'react';


const TaskList = ({lists, set_list}) => {

  function completeTask(id){
    
    const updatedList = lists.map(task => {
      if (task.id == id){
        return {...task, status : "Completed"};
      } else {
        return task
      }
    });

    set_list(updatedList);

    localStorage.setItem('List', JSON.stringify(updatedList));
    
  }

  function deleteTask(id){
    const new_list = lists.filter(task => task.id != id);
    set_list(new_list);
    localStorage.setItem('List', JSON.stringify(new_list));
    
  }

  return (
    <>
      <ul id="taskList">
        {lists.map(item => (
          <li key={item.id} className='list'>
            <input 
              className='checkbutton' 
              type='checkbox' 
              checked={item.status === "Completed"}
              readOnly
            />
            <label>
              <span className={`list-task ${item.status === "Completed" ? 'completed' : ''}`}>
                {item.task}
              </span>
              <div className="actions">
                {/* Complete Button - Check Icon */}
                <button className="btn-complete" onClick={() => completeTask(item.id)}>
                  <i className="fa-solid fa-check"></i>
                </button>
                
                {/* Delete Button - Trash Icon */}
                <button className="btn-delete" onClick={() => deleteTask(item.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </label>
          </li>
        ))}
      </ul>
      <div className='mark-buttons'>
        <button className='mark-complete'><i className="fa-solid fa-check"></i>  Mark as Complete</button>
      </div>
    </>
  )
}

export default TaskList
