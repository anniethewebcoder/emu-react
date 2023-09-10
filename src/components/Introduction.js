import styles from './../css/app.module.css'

const Introduction = () => {

    return (
        <div className={styles.folder}>
            <h1 className={styles.folderhead}>Welcome!</h1>
            <div className={styles.folderbody}>
                <h2>Your Simply Favorite To-Do List App</h2>
                <p>You have come to the right place for a handy dandy productivity tool. This to-do list app will help keep you on track on a day-to-day basis.</p>
            </div>
        </div>
    )
}

export default Introduction;