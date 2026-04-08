import './Container.css';
import './TaskList.jsx';
import TaskList from './TaskList.jsx';
import Input from './Input.jsx';
import React, { useState } from 'react';

const Container = () => {

  const [lists, set_list] = useState(() => {

    const saved = localStorage.getItem('List');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  let [filter, set_filter] = useState("All");
  
  const filteredList = lists.filter(task => {
    if (filter === "All") return true;
    return task.status === filter;
  });
  

  return (
    <div className="container">
        <h1>To-Do List</h1>

        <Input lists={lists} set_list={set_list} />

        <div className="filters">
            <button className={filter === "All" ? "active" : ""} onClick={() => set_filter("All")}>All</button>
            <button className={filter === "Completed" ? "active" : ""} onClick={() => set_filter("Completed")}>Completed</button>
            <button className={filter === "Pending" ? "active" : ""} onClick={() => set_filter("Pending")}>Pending</button>
        </div>

        <TaskList lists={filteredList} set_list={set_list} filter={filter}/>
    </div>
  )
};

export default Container
