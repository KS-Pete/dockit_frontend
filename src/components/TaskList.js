import React from 'react';
import Task from './Task'

const TaskList = () => {
    return (
        <div className="task-container">
            <ul className="task-list">
                <Task />
            </ul>
        </div>
    )
};

export default TaskList;