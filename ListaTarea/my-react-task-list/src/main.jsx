import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import {TaskList} from './components/TaskList';
import Task from './components/Task';
import "./main.css";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="Container">
      <Header title="TODO APP" />
      <div>
        <TaskList
          botones=" + "
          tarea=" Buy a new gaming laptop"
          tarea1="Complete a previous task"
          tarea2="reate video for youtube"
          tarea3="create a new portofolio site"
        />
      </div>

      <div>
        <Task button="Clear All" pendientes="You Have 2 Pending tasks"/>
      </div>
    </div>
  </>
); 