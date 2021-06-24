import React from 'react'
//import {useState} from  'react'
import Task from './Task'
 


const Tasks =({tasks, onToggle}) =>{
    
    return (
        <>
            {tasks.map((task)=>(
            
                
                <Task key ={task.id} task = {task}
                onToggle={onToggle}/>

            ))}



        </>
    )
}

export default Tasks