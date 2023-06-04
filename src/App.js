import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList.js";
import { useState } from 'react';


function App( ) {
  useEffect(() => {
    fetch("http://localhost:8080/tasks")
    .then((response) => response.json())

  });
  const [taskInputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
          DockIt
      </header>
      <div className="App-body">
        < div className="Task-bar">
          <TaskForm inputText={taskInputText} tasks={tasks} setTasks={setTasks} setInputText={setInputText}/>
          <TaskList />
          {tasks}
        </div>
        < div className="box2"></div>
        < div className="box3"></div>
        < div className="box4"></div>
      </div>
    </div>
  );
}

export default App;
