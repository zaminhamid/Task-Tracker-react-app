import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from  'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask,setShowAddTask] = useState (true)


  const [tasks,setTasks]=useState([{
      id:1,
      text: ' doctors appointment ',
      reminder :'true',
      day:'tuesday 6th feb at 2pm',
  },
  {
    id :2, 
    text : ' high school meeting',
    day:' wednesday 11 april 4.pm',
    reminder :'true'
  }
])


const addTask =(task)=>{
  const id =Math.floor(Math.random()*
  1000) +1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])


}

const toggleReminder =(id) =>{
  setTasks(
    tasks.map((task) =>
    task.id ===id ? { ...task,reminder:!task.reminder}:task
  )
  )
}


  return (
    <div className="conatiner">
      <Header  onAdd={()=> setShowAddTask(!showAddTask)}/>
     { showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks}
      onToggle={toggleReminder} />
    </div>
  );
}

export default App;
