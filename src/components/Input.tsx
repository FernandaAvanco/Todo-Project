import { ComponentProps } from 'react'
import styles from './Input.module.css'

interface InputProps extends ComponentProps<'input'> {

}

function Input ({...props} : InputProps) {
    return (
        <input className={styles.input} {...props} />
    )
}

export default Input