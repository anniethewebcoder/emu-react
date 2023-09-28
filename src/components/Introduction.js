import styles from './../css/app.module.css'
import { Link } from 'react-router-dom'

const Introduction = () => {

    return (
        <div className={`${styles.section} ${styles.section__left}`}>
            <h1 className={styles.section__title}>Welcome!</h1>
            <div className={styles.folderbody}>
                <h2>Your Simply Favorite To-Do List App</h2>
                <p>You have come to the right place for a handy dandy productivity tool. This to-do list app will help keep you on track on a day-to-day basis.</p>
                <p><Link to="about">More about me.</Link></p>
            </div>
        </div>
    )
}

export default Introduction;