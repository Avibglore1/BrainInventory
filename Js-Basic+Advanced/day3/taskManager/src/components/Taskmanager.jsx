import{
    useReducer,
    useState,
    useContext,
    useCallback,
    useMemo
} from "react";

import { ThemeContext } from "../context/ThemeContext";
import { taskReducer } from "../reducers/taskReducer";
import TaskItem from "./TaskItem";

export default function TaskManager(){
    const [tasks,dispatch] = useReducer(taskReducer,[]);
    const [input, setInput] = useState("");
    
    const {theme,setTheme} = useContext(ThemeContext);

    const addTask = useCallback(()=>{
        if(!input.trim()) return
        dispatch({type: "ADD", payload: input});
        setInput("");

    },[input]);

    const toggleTask = useCallback(id=>{
        dispatch({type: "TOGGLE", id});
    },[]);

    const deleteTask = useCallback(id=>{
        dispatch({type: "DELETE", id});
    },[]);

    const completedCount = useMemo(()=>{
        return tasks.filter(t=>t.done).length;
    },[tasks]);

    return(
        <div style={{
            padding: "20px",
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            minHeight: "100vh"
        }}>
            <h2>Task Manager</h2>
            <button onClick={()=>setTheme(t=>(t==="light" ? "dark" : "light"))}>Toggle Theme</button>
            <div style={{marginTop: "10px"}}>
                <input 
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder="Enter task"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <p>Total: {tasks.length} | Completed: {completedCount}</p>
            {
                tasks.map(task=>(
                    <TaskItem
                    key={task.id}
                    task ={task}
                    onToggle = {toggleTask}
                    onDelete = {deleteTask}
                    />
                ))
            }
        </div>
    )
}
