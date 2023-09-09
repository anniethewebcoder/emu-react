import styles from './../css/logo.module.css'

const Header = () => {
    return (
    
        <div className={styles.logo}>
            <div className={styles.topper}>
                
            </div>
            <div className={styles.banner}>

            </div>
            <div className={styles.logo}>
                <h1>Annie's To-Do List</h1>
                <h5>A Handy Dandy Tool</h5>
                <h6>Est. 2023</h6>
            </div>
        </div>
        
    )
}

export default Header;