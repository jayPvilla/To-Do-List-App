import React, { useState, useEffect } from 'react';


const TaskList = ({lists, set_list, filter}) => {

  const [checks, set_check] = useState([]);

  const [list_total, set_list_total] = useState(0);

  useEffect(() => {
    set_list_total(lists.length)
  }, [lists])

  function toggleCheck(id) {
    set_check(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  }


  function completeTask(){

    const updatedList = lists.map(task => {
      if (checks.includes(task.id)) {
        return {...task, status : "Completed"};
      } else {
        return task
      }
    });

    set_list(updatedList);
    set_check([])

    localStorage.setItem('List', JSON.stringify(updatedList));
    
  }
  

  function deleteTask(id){

    const new_list = lists.filter(task => task.id != id);
    set_list(new_list);
    localStorage.setItem('List', JSON.stringify(new_list));
    
  }

  return (
    <>
      <p>Total: {list_total}</p>
      <ul id="taskList">
        {lists.map(item => (
          <li key={item.id} className='list'>
            {
              (filter == "Completed")? true : 
                <input 
                  className='checkbutton'
                  name='checkbutton' 
                  type='checkbox'
                  checked={checks.includes(item.id)? true : false}
                  onChange={() => toggleCheck(item.id)}
                />
            }
            <label for="checkbutton">
              <span className={`list-task ${item.status === "Completed" ? 'completed' : ''}`}>
                {item.task}
              </span>
              <div className="actions">
                <button className="btn-delete" onClick={() => deleteTask(item.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </label>
          </li>
        ))}
      </ul>
      <div className='mark-buttons'>
        {
          (filter == "Completed")? true : 
            <button 
              className='mark-complete'
              onClick={() => completeTask()}>
                <i className="fa-solid fa-check"></i>  Mark as Complete
            </button>
        }
      </div>
    </>
  )
}

export default TaskList
