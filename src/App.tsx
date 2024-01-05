
import { useEffect, useState } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { Task } from './models/Tasks';
import { VisibilityControl } from './components/VisibilityControl';

function App() {

  const [taskItems, setTasksItems] = useState<Task[]>([])
  const [showTaskDone,setShowTaskDone] = useState<boolean>(false);

  function createTask(taskName:string){
    if (!taskItems.find((t) => t.name === taskName))
      setTasksItems([...taskItems,{name: taskName, done: false}])
  }
  const toggleTask = (task:Task) =>{
    setTasksItems(taskItems.map( currentTask =>{return (currentTask.name === task.name) ? {...currentTask,done:!currentTask.done} : currentTask})
    )
  }

  const cleanTasks = ()=>{
    setTasksItems(taskItems.filter(task => !task.done));
    setShowTaskDone(false);
  }

  useEffect (() => {
    let data=localStorage.getItem('tasks');
    if(data){
      setTasksItems(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(taskItems))
  },[taskItems])

  return (
    <main className="bg-dark vh-100 text-gray">
      <div className="container col-md-4 offset-md-4">
      <TaskCreator createNewTask={createTask} />
      <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
      <VisibilityControl setShowCompleted={(checked) => setShowTaskDone(!checked)} cleanTasks={cleanTasks} isChecked={showTaskDone}/>    
      {showTaskDone && <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showTaskDone}/>}
      </div>
    </main>
  );
}

export default App;