import styles from './../css/app.module.css'

const NotFound = () => {

    return (
        <div className={styles.section}>
            <div className={styles.section__title}>
                404 - Page Not Found
            </div>
            <div className={styles.section__body_img}>
                But please enjoy this cute happy dog.
                {/* <img className="notfound" alt="notfound" src={notfoundimg} /> */}
            </div>
        </div>
    )
}

export default NotFound