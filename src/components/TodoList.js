import { Container, Stack,TextField, Box, Button,IconButton  } from "@mui/material";
import React, {useState, useEffect} from "react";
import BasicCard from './BasicCard'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Form from "./Form";
import { InputLabel, InputAdornment,Select,MenuItem,FormControl } from "@mui/material";





const TodoList = ({action}) => {
    useEffect(()=> {getLocalTodo();}, []);
    const [inputText, setInputText]= useState(""); /* initally the string is empty */
    const [todos, setTodos] = useState([]); //initially empty array
    const [status, setStatus]= useState("all")
    const [filteredTodo, setFilteredTodo] = useState([])
    useEffect(()=> {filterHandler();saveLocalTodo();}, [todos,status]);
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        setInputText(" ");
        e.preventDefault();
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        setTodos([...todos, {text: inputText, completed:false, date:date,id:Math.random()*10000}]);
    }
    const statusHandler =(event)=>{
        //setStatus()
        setStatus(event.target.value)

    }
    const filterHandler=()=>{
        switch(status){
            case 'completed':
                setFilteredTodo(todos.filter(todo => todo.completed === true))
                break;
            case 'not completed':
                setFilteredTodo(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodo(todos)
                break;
        }
    }
    const saveLocalTodo =() =>{
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    const getLocalTodo =() =>{
        if (localStorage.getItem('todos')===null){
            localStorage.setItem('todos', JSON.stringify([]))
        }else{
            const todoLocal =JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal)
        }
    }

    return (
        <div className="container">
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
                <TextField
                value ={inputText}
                onChange={inputTextHandler}
                label="New Task"
                id="filled-adornment-password"
                sx={{'backgroundColor':'white','marginright':'20px'}}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                                    <IconButton color="success"
                                    onClick={submitTodoHandler}
                                    edge="end"
                                    aria-label="add"
                                    >
                                    <AddCircleOutlinedIcon />
                                    </IconButton>
                                </InputAdornment>,
                }}
                />
            </FormControl>
            <FormControl variant="outlined" color="success" sx={{m: 1, minWidth: 120, maxWidth: 300 ,'backgroundColor':'white' }}>
                    <InputLabel  id="filter">Filter</InputLabel>
                    <Select
                    labelId="filter"
                    label="select"
                    onChange={statusHandler}>
                <MenuItem  value={"all"}>all</MenuItem>
                <MenuItem  value={"completed"}>completed</MenuItem>
                <MenuItem  value={"not completed"}>not completed</MenuItem>
                </Select>
                
            </FormControl>
            <BasicCard action={action} todos={todos} setTodos={setTodos} filteredTodo={filteredTodo}/>
        </div>

   
    )
}
export default TodoList;