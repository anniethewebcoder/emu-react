import styles from './../css/app.module.css'

const SortList = () => {
    return (
        <div className={styles.folder}>
              <h1 className={styles.folderhead}>Sort Tasks</h1>
              <div className={styles.folderbody}>
                <p>Sort by Due Date</p>
                <p>Sort by Status</p>
                <p>Sort by Title</p>
              </div>
            </div>
    )
}

export default SortList