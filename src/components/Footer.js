import styles from './../css/logo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </div>
    )
}

export default Footer;