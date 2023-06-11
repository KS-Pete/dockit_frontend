import { Button, FormControlLabel } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from "styled-components";
import theme from "../style/theme.js";
import React from "react";
import { useEffect } from "react";
import { Icon, Label } from 'semantic-ui-react';
import { format } from 'date-fns';

const Task = ({task, deleteTask}) => {

    const [checked, setChecked] = React.useState(task?.isdone || false);
    const [task_element, setTask] = React.useState(task);
    const date = new Date();

    const handleDelete = (resp) => {
        deleteTask(resp);
    }
    useEffect(() => {
        if (task_element != '' && task_element != 'undefined'){
         fetch(`http://localhost:8080/tasks/${task_element.id}`, {
                                    method: "PUT",
                                    body: JSON.stringify(task_element),
                                    headers : {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json',
                                        'Access-Control-Allow-Origin': 'http://localhost:3000'
                                    }
                                    })
                                .then((response) => response.json())
                                .then ((json) => {
                                    console.log(json);
                                }
                                );
            
                            }
                            
    }, [task_element])
    
    return(
        <div className="task">
            <li className= "task-header">
                <div className= "left">
                    <IconButton 
                        onClick={() => {
                            fetch(`http://localhost:8080/tasks/${task_element.id}`, {
                                method: "DELETE",
                                body: JSON.stringify(task_element),
                                headers : {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    'Access-Control-Allow-Origin': 'http://localhost:3000'
                                }
                                })
                            .then((response) => response.json())
                            .then ((json) => {
                                handleDelete(json);
                                console.log(json);
                            }
                            )}
                        }>  
                        <DeleteIcon 
                            className="delete-icon"
                            sx={{ 
                                fontSize: 16,
                            }}
                        />
                    </IconButton>
                    <Label 
                        size='tiny'
                        className="tiny-date-label">
                        <Icon 
                            name='calendar' 
                        /> 
                        {/* {JSON.stringify(task_element.date).slice(1,11)} */}
                        {format(new Date(task_element.date), "dd.MM.yyyy")}
                    </Label>
                </div>
                <div className="right">  
                    {/* <IconButton>                 */}
                        {/* <CheckIcon className="check-icon" checked="checked"/> */}
                    <ThemeProvider theme={theme}>
                        {task_element.title.match("[^\s]") != ' ' ? (
                        <Label 
                            size='tiny'
                            className="tiny-title-label">
                            {task_element.title}
                        </Label>) : ""
                        }
                        <Checkbox
                            checked={task_element.isdone} 
                            sx={{ 
                                '& .MuiSvgIcon-root': { fontSize: 15 }, 
                                    color: 'background.paper',
                                '&.Mui-checked': {
                                    color: '#11cb5f',
                                },
                            }}
                            onChange={e => {
                                setTask({...task_element, isdone: !task_element.isdone});
                            }}
                        />
                    </ThemeProvider>
                    {/* </IconButton> */}
                </div>
            </li>
            <li className = "task-body">
                <div className="task-text">{task_element.text}</div>
            </li>
        </div>
    )
};
export default Task;