import styles from './../css/app.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return (
        <div className={styles.section}>
            <div className={styles.section__title}>
                404 - Page Not Found
            </div>
            <div className={styles.section__body_img}>
                <p>
                    But, please enjoy this cute happy dog and you can go back <Link to="/">here.</Link>
                </p>
                
            </div>
        </div>
    )
}

export default NotFound