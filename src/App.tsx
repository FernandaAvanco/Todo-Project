import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import styles from './App.module.css'
import { BiPlusCircle } from "react-icons/bi";
import Task, { TaskType } from './components/Task';
import { FormEvent, useState } from 'react';
import HeaderTasks from './components/HeaderTasks';
import WithoutTasks from './components/WithoutTasks';

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState('')

  function createTask (event : FormEvent<HTMLFormElement> ) {
    event.preventDefault()

    if(newTaskDescription.length === 0) {
      alert("Adicione uma descrição para a tarefa!")
      return
    }
    
    const newTask = {
      description: newTaskDescription,
      completed: false
    }

    setTasks([...tasks, newTask])

    setNewTaskDescription('')
  }  

  return (
    <>
      <Header />
      <main>
        <form onSubmit={createTask} className={styles.registerTask}>
          <Input value={newTaskDescription} onChange={(e) => setNewTaskDescription(e.target.value)} type="text" placeholder="Adicione uma nova tarefa" />
          <Button variant='createButton' type='submit'>
            Criar
            <BiPlusCircle/>
          </Button>
        </form>

        <div className={styles.containerTasks}>
          <HeaderTasks tasks={tasks} />
          <div className={styles.tasks}>
            
            {tasks.length > 0 ? 
            tasks.map(task => {
              return <Task key={task.description} task={task} setTasks={setTasks} tasks={tasks} />
            }) : <WithoutTasks/> }
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
