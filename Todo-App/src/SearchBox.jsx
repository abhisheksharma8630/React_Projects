import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import './SearchBox.css'

const SearchBox = () => {
    let [taskArr,setTaskArr] = useState([]);
    let [todo,setTodo] = useState("");

    function handleAdd(){
        if(todo != ""){
            setTaskArr((preArr)=>{
                return [...preArr,{id:uuidv4(),task:todo,isDone:false}];
            })
        }
        setTodo("");
    }

    function handleInput(event){
        setTodo(event.target.value);
    }
    function handleDone(id){
        setTaskArr((prevArr)=>prevArr.map((task)=>{
            if(task.id == id && task.isDone==false){
                return {...task,isDone:true}
            }else{
                return task;
            }
        }));
    }

    function handleNotDone(id){
        setTaskArr((prevArr)=>prevArr.map((task)=>{
            if(task.id==id && task.isDone == true){
                return {...task,isDone:false}
            }else{
                return {...task}
            }
        }))
    }

    function handleDelete(id){
        setTaskArr((prevArr)=>prevArr.filter((task)=>task.id != id));
    }

    function handleDoneAll(){
        setTaskArr((prevArr)=>prevArr.map((task)=>{
            return {...task,isDone:true};
        }))
    }
    return ( 
        <>
        <div id='searchBox'>
            <TextField id="standard-basic" label="Add Tasks" variant="standard" onChange={handleInput} sx={{ m: 1, width: '50ch' }} value={todo}/>
            <Button variant='contained' startIcon={<AddCircleOutlineIcon/>} onClick={handleAdd}>Add Task</Button>
        </div>
        <div id='listItems'> 
            <List dense={false}>
              {taskArr.map((task)=>
                <ListItem  key={task.id}>
                {task.isDone ? <IconButton edge="end" onClick={()=>{handleNotDone(task.id)}}><TaskAltIcon/></IconButton>  : <IconButton edge="end" onClick={()=>handleDone(task.id)} ><CircleOutlinedIcon/></IconButton> } &nbsp;&nbsp;&nbsp;&nbsp; 
                <ListItemText primary={task.task} style={task.isDone ? {textDecorationLine:"line-through"}:{textDecorationLine:"none"}}/>
                <IconButton onClick={()=>handleDelete(task.id)} ><DeleteIcon /></IconButton>
                </ListItem>)}
            </List>
        </div>
        <div>

           { taskArr.length > 0 ? <Button variant='outlined' startIcon={<TaskAltIcon/>} onClick={handleDoneAll}>Add Task Done</Button>: "Please Add Some task !!!"} 
        </div>
        </>
     );
}
 
export default SearchBox;