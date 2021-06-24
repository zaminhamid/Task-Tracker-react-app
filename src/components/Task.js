const Task =({task,onToggle})=>{
    return (
        <div 
        className ={'task  '}
            onDoubleClick={()=>
            onToggle(task.id)} >
                <h3>{task.text}</h3>
                <p>{task.day}</p>

        </div>
    )
}
export default Task