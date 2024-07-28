import Button from "./Button"
import { TbTrash } from "react-icons/tb";
import styles from './Task.module.css'
import { ChangeEvent, useState } from "react";

export interface TaskType {
    description: string
    completed: boolean
}

interface TaskProps {
    task: TaskType
    setTasks: (tasks: TaskType[]) => void
    tasks: TaskType[]
}

function Task ({task, setTasks, tasks}: TaskProps) {

    const [statusCheck, setStatusCheck] = useState(task.completed)

    function changeTaskStatus (event : ChangeEvent<HTMLInputElement>) {

        setStatusCheck(event.target.checked)

        task.completed = !task.completed

        setTasks(tasks.filter(t=> {
            if(t.description === task.description) {
                return task
            }

            return t
        }))
    }

    function deleteTask () {
        setTasks(tasks.filter(t=> {
            if(t.description !== task.description) {
                return t
            }
        }))
    }

    return (
        <div className={styles.task}>
            <input type="checkbox" checked={statusCheck} onChange={changeTaskStatus} />
            <p>{task.description}</p>
            <Button variant="trashButton" onClick={deleteTask}>
                <TbTrash />
            </Button>
        </div>
    )
}

export default Task