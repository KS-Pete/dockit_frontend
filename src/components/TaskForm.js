import styled from 'styled-components';
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
const Form = ({setInputText, tasks, setTasks, inputText}) => {
    // const inputTextHandler = (e) => {
    //     console.log(e.target.value)
    //     setInputText(e.target.value);
    // }
    // const submitTaskHandler = (e) => {
    //     e.preventDefault();
    //     setTasks([
    //         ...tasks, {text: inputText, isChecked: false}
    //     ]);
    //     setInputText("");
    // } 
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" />
            <Button onClick={submitTaskHandler} className="Task-button" type="submit">
                <span>+</span>
                {/* <i className="fas fa-plus-square"></i> */}
            </Button>
            <div className="select">
                <select name="tasks" className="task-filter">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
};

export default Form;