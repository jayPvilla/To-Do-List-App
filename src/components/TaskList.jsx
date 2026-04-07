import React, { useState } from 'react';


const TaskList = ({lists, set_list}) => {

  function completeTask(id){
    
    const updatedList = lists.map(task => {
      if (task.id == id){
        return {...task, status : "Completed"};
        console.log("Success");
      } else {
        return task
        console.log("Failed");
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
    <ul id="taskList">
      {lists.map(item => (
        <li key={item.id}>
          <span>{item.id}</span>
          <span>{item.task}</span>
          <span>{item.status}</span>
          <div className="actions">
            <button onClick={() => completeTask(item.id)}>✔️</button>
            <button onClick={() => deleteTask(item.id)}>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
