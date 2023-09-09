import notfoundimg from './../img/NotFound.jpg'
import styles from './../css/app.module.css'

const NotFound = () => {

    return (
        <div className={styles.folder}>
            <div className={styles.folderhead}>
                404 - Page Not Found
            </div>
            <div className={styles.folderbody}>
                But please enjoy this cute happy dog.
                <img className="notfound" alt="notfound" src={notfoundimg} />
            </div>
        </div>
    )
}

export default NotFound