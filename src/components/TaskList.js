import React from 'react';
import Task from './Task'

const TaskList = ({tasks, setTasks}) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  }
  // const checkTask = (id) => {
  //   setTasks
  // }
    return (
        <div className="task-container">
            <ul className="task-list">
                {tasks?.map((task) => {
                  if (Number.isInteger(task.id)){
                return (  
                    <Task key={task.id} task={task} deleteTask={deleteTask}/>
                ) 
                  }               
                }
                )}

            </ul>
        </div>
    )
};

export default TaskList;