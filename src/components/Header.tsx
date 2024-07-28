import logo from '../../public/logo.svg'
import styles from './Hearder.module.css'

function Header () {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo todo" />
        </header>
    )
}

export default Header