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
      return []; // Safety check for malformed JSON
    }
  });

  return (
    <div className="container">
        <h1>To-Do List</h1>

        <Input lists={lists} set_list={set_list} />

        <div className="filters">
            <button className="active">All</button>
            <button>Completed</button>
            <button>Pending</button>
        </div>

        <TaskList lists={lists} />
    </div>
  )
};

export default Container
