import styles from './HeaderTasks.module.css'
import {TaskType} from './Task'

interface HeaderTasksProps {
    tasks: TaskType[]
}

function HeaderTasks ({tasks}: HeaderTasksProps) {

    const completedTasks = tasks.filter(task => {return task.completed})

    return (
        <header className={styles.headerTasks}>

            <div className={styles.infoTasks}>
                <p className={styles.blue}>Tarefas criadas</p>
                <p className={styles.subtitleTasks}>{tasks.length}</p>
            </div>
            
            <div className={styles.infoTasks}>
                <p className={styles.purple}>Concluídas</p>
                <p className={styles.subtitleTasks}>{completedTasks.length} de {tasks.length}</p>
            </div>
        </header>
    )
}

export default HeaderTasks