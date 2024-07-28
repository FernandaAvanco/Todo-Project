import { ComponentProps, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ComponentProps<'button'> {
    variant: 'createButton' | 'trashButton'
    children: ReactNode
}

function Button ({children, variant, ...props}: ButtonProps) {

    const classButton = styles[variant]

    return (
        <button className={classButton} {...props}>{children}</button>
    )
}

export default Button