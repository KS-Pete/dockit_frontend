import { useEffect, useState } from 'react';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList.js";
import Request from './Request';



const Taskbar = () => {

    const [tasks, setTasks] = useState([""]);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [filterSelectValue, setFilterSelectValue] = useState(1);
    const [taskInputText, setInputText] = useState("");
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
    };

    useEffect(() => {
        Request("", "GET")
        .then((response) => {
            console.log("fire taskbar: " + response);
            setTasks(response);
        })
        .then(() => filterHandler());
        
    }, [filterSelectValue]);

    useEffect(() => {
        filterHandler();
    }, [tasks]);

    return (
        < div className="Task-bar">
            <TaskForm inputText={taskInputText} tasks={tasks} setTasks={setTasks} setInputText={setInputText} filterSelectValue={filterSelectValue} setFilterSelectValue={setFilterSelectValue} filterHandler={filterHandler}/>
            <TaskList tasks={filteredTasks} setTasks={setTasks}/>
        </div>
      );
}

export default Taskbar;




