import { Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

const Task = () => {
    return(
        <div className="task">
            <li className= "task-header">
                <IconButton>                
                    <DeleteIcon className="delete-icon"/>
                </IconButton>
                <IconButton>                
                    <CheckIcon className="check-icon"/>
                </IconButton>
            </li>
            <li className = "task-body">Test</li>
        </div>
    )
};
export default Task;