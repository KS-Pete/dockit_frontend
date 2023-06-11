import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList.js";
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';


function App( ) {
  const [tasks, setTasks] = useState([""]);
  const [filteredTasks, setFilteredTasks] = useState([""]);
  const [filterSelectValue, setFilterSelectValue] = useState(1);

  const filterHandler = () => {
    switch(filterSelectValue){
      case 1:
        setFilteredTasks(tasks);
        break;
      case 2:
        setFilteredTasks(tasks.filter(task => task.isdone === true));
        break;
      case 3:
        setFilteredTasks(tasks.filter(task => task.isdone === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }

  function fetchData(url, retryCount = 3){
    return fetch(url, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    })
      .then((response) => {
        if (response.ok){
          return response.json();
        } else {
          throw new Error("Couldnt fetch!!")
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      }).catch(error => {
        console.log("request failed: " + error);
        if (retryCount > 0){
          return fetchData(url, retryCount - 1);
        } else {
          throw error;
        }
      });
  }

  useEffect(() => {
      fetchData("http://localhost:8080/tasks")
        .then((response) => {
          console.log("fire: " + response);
          setTasks(response);
        })
        .then(() => filterHandler());
        
  }, []);

  useEffect(() => {
    filterHandler();
}, [tasks, filterSelectValue]);


  const [taskInputText, setInputText] = useState("");


  return (
    <div className="App">
      <header className="App-header">
          DockIt
      </header>
      <div className="App-body">
        < div className="Task-bar">
          <TaskForm inputText={taskInputText} tasks={tasks} setTasks={setTasks} setInputText={setInputText} filterSelectValue={filterSelectValue} setFilterSelectValue={setFilterSelectValue} filterHandler={filterHandler}/>
          <TaskList tasks={filteredTasks} setTasks={setTasks}/>
        </div>
        < div className="box2"></div>
        < div className="box3"></div>
        < div className="box4"></div>
      </div>
    </div>
  );
}

export default App;
