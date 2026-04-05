import './Container.css';
import './TaskList.jsx';
import TaskList from './TaskList.jsx';
import Input from './Input.jsx';
import React, { useState } from 'react';
import ListsData from './lists.json';

const Container = () => {

  const [lists, set_list] = useState(ListsData);

  return (
    <div className="container">
        <h1>To-Do List</h1>

        <Input lists={lists} set_list={set_list} />

        <div className="filters">
            <button className="active">All</button>
            <button>Completed</button>
            <button>Pending</button>
        </div>

        <TaskList tasks={lists} />
    </div>
  )
};

export default Container
