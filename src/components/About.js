import styles from './../css/app.module.css'
import { Link } from 'react-router-dom'
import profile from './../img/profile.jpg'

const About = () => {

    return (
        <div className={styles.section}>
            <div className={styles.section__title}>
                About Me
            </div>
            <div className={styles.section__about}>
                <div>
                    <p><img src={profile} alt="profile" width="200"/></p>
                </div>
                <div>
                    <p>    
                        Hello, I'm Annie! I'm currently a student at Code the Dream where I can learn full stack web development. My favorite hobbies are being a board game enthusiast, an amateur photography,  a meme queen, a casual cozy reader, a sci-fi TV series consumer, and an occasional napper.
                    </p>
                    <p><Link to="/">Go back to home</Link></p>
                </div>    
            </div>
        </div>
    )
}

export default About