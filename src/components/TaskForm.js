import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { useState, useRef } from 'react';
import { Select, FormControl, MenuItem, IconButton, Checkbox } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import Request from './Request';
import reactStringReplace from 'react-string-replace';


const Button = styled.button`
    transition: 0.5s;
    background-color: #282c34;
    border-style: solid;
    border-color:#282c34;
    color: white;
    &:hover{
        background: #61dafb;
        box-shadow: 0 0 35px #61dafb;
        border-color: #61dafb;
        cursor: pointer;
        color: #282c34;
    }
`;

const Form = ({setInputText, tasks, setTasks, inputText, filterSelectValue, setFilterSelectValue}) => {
    const inputRef = useRef(null);
    const [taskInput, setTaskInput] = useState("");
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const taskInputHandler = (e) => {
        setTaskInput(e.target.value); 
    }
    const handleFilterSelect = (e) => {
        setFilterSelectValue(e.target.value);
    }

    const handleTitleFocus = (e) => {
        if (e.keyCode === 13) {
            inputRef.current.focus();
        }
       
    }

function convertedDate (){
    const date = new Date();
    if (date != null) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return (year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2));
    }
    return null
}
const submitTaskHandler = (e) => {
    e.preventDefault();
    const date = new Date(convertedDate());
    fetch("http://localhost:8080/tasks", {
                                method: "POST",
                                body: JSON.stringify({
                                    title: inputText,
                                    isdone: false,
                                    date: date
                                }),
                                headers : {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    'Access-Control-Allow-Origin': 'http://localhost:3000'
                                }
                                })
                            .then((response) => response.json())
                            .then((response) => {
                                setTasks([...tasks, {id: response, title: inputText, text: taskInput, isdone: false, date: date}]);
                                console.log("t " + response);
                                });
    setInputText("");
    setTaskInput("");
} 
    return(
        <FormControl fullWidth>
            {/* reactStringReplace(inputText, '@', () => (
                        checkboxx
                      )) */}
            <div className='taskform-header'>
                <div className='taskform-title'>
                    <TextField
                    id="task-title-input_text"
                    label="Titel"
                    type="text"
                    className="task-title-input"
                    onChange={inputTextHandler}
                    value={inputText}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    autoFocus
                    onKeyDown={handleTitleFocus}
                    />
                </div>
                <div className='taskform-buttons'>
                    <Button onClick={submitTaskHandler} className="Task-button" type="submit">
                        <span>+</span>
                        {/* <i className="fas fa-plus-square"></i> */}
                    </Button>
                </div>
            </div>
            <div className='task-input-field'>
                <TextField id="task-input" value={taskInput} label="Task" inputRef={inputRef} variant="filled" multiline onChange={taskInputHandler}/>
            </div>
            <div className="select">
                <div className='left'>
                    <IconButton onClick={() => {
                        Request("", "GET")
                            .then((response) => {
                                console.log("fire taskform: " + response);
                                setTasks(response);
                            })
                    }}><RefreshIcon /></IconButton>
                </div>
                <div className='right'>
                    <Select
                        labelId="task-filter-select-label"
                        id="task-filter-select-id"
                        value={filterSelectValue}
                        onChange={handleFilterSelect}
                    >
                    {/* <select name="tasks" className="task-filter"> */}
                        <MenuItem value={1}>All</MenuItem>
                        <MenuItem value={2}>Completed</MenuItem>
                        <MenuItem value={3}>Uncompleted</MenuItem>
                    </Select>
                </div>
            </div>
        </FormControl>
    )
};

export default Form;