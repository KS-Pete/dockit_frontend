import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from "styled-components";
import theme from "../style/theme.js";
import { useEffect, useState } from "react";
import { Grid, Icon, Label } from 'semantic-ui-react';
import EditIcon from '@mui/icons-material/Edit';
import { format } from 'date-fns';
import TextField from '@mui/material/TextField';
import Request from './Request';



const Task = ({task, deleteTask}) => {

    const [task_element, setTask] = useState(task);
    const [editState, setEditState] = useState(false);
    const titleInputHandler = (e) => {
        setTask({...task, title: e.target.value});
    }
    const textInputHandler = (e) => {
        setTask({...task, text: e.target.value}); 
    }
    const taskTitle = () => {
        if (editState === false) {
            return (task_element.title.match("[^\s]") != ' ' ? (
                <Label 
                    size='tiny'
                    className="tiny-title-label">
                    {task_element.title}
                </Label>) : "")
        }
        return (                    
            <TextField
            id="task-title-input_text_edit"
            label="Titel"
            type="text"
            className="task-title-edit"
            onChange={titleInputHandler}
            value={task_element.title}
            InputLabelProps={{
                shrink: true,
            }}
            variant="standard"
            />)
        }
    const taskText = () => {
        return (editState === false ? (
            <div className="task-text">{task_element.text}</div>
            ) : (<div>
                    <ThemeProvider theme={theme}>
                        <TextField id="task-input-edit" value={task_element.text} label="Task" variant="filled" multiline onChange={textInputHandler} InputLabelProps={{
                        style: { color: 'darkgrey' },}}/>
                    </ThemeProvider>
                </div>)
        )
    }
    
    const handleDelete = (resp) => {
        deleteTask(resp);
    }
    function editTask () {
        setEditState(!editState);
        if (editState) {
            Request(`/${task_element.id}`, "PUT", JSON.stringify(task_element)) 
                    .then ((json) => {
                        console.log(json);
                    }
                    );
        }
    }

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return(
        <div className="task">
            <li className= "task-header">
                <div className= "left">
                    <IconButton 
                        onClick={() => {
                            Request(`/${task_element.id}`, "DELETE", JSON.stringify(task_element))
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
                        {(format(new Date(task_element.date), "dd.MM.yyyy") + "  " + weekday[new Date(task_element.date).getDay()])}
                    </Label>
                </div>
                <div className="right">  
                    <ThemeProvider theme={theme}>
                        {taskTitle()}
                        <ToggleButton className='edit-icon-background' onClick={() => editTask()} selected={editState} value="check">
                            <EditIcon 
                                className="edit-icon"
                                sx={{ 
                                    fontSize: 16,
                                }}/>
                        </ToggleButton>
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
                </div>
            </li>
            <li className = "task-body">
                {/* <DraftailEditor
                    rawContentState={null}
                    blockTypes={[
                    { type: BLOCK_TYPE.HEADER_THREE },
                    { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
                    ]}
                    inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
                />
                <Editor 
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                /> */}
                {taskText()}
            </li>
        </div>
    )
};
export default Task;