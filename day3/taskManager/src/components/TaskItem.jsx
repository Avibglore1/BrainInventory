import React from "react";

const TaskItem = React.memo(({task,onToggle,onDelete})=>{
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px 0",
            padding: "8px",
            border: "1px solid #ccc"
        }}>
            <span
            onClick={()=>onToggle(task.id)}
            style={{
                textDecoration: task.done ? "line-through" : "none",
                cursor: "pointer"
            }} 
            >
            {task.text}
            </span>
            <button onClick={()=>onDelete(task.id)}>Delete</button>
        </div>
    )
})

export default TaskItem