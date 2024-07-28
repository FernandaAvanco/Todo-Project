import styles from './withoutTasks.module.css'
import { LuClipboardList } from "react-icons/lu";

function WithoutTasks () {
    return (
        <div className={styles.container}>
            <LuClipboardList />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        
    )
}

export default WithoutTasks