import { useState } from 'react'
import InputWithLabel from './InputWithLabel'
import styles from './../css/app.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"


const EditTodoForm = ({ onCurrentTask, onCancel }) => {
    
    const [editedTask, setEditedTask] = useState("")
    const [editedDate, setEditedDate] = useState("")
    
    const saveEditTask = (event) => {
        event.preventDefault();
    }

    const cancelEditTask = () => {
        onCancel(false)
    }

    const editingTask = (event) => {
        event.preventDefault();
        setEditedTask(event.target.value)
        console.log(editedTask)
    }

    const editingDate = (event) => {
        event.preventDefault();
        setEditedDate(event.target.value)
    }

    
    
    return (
        <div className={`${styles.section} ${styles.section__right}`}>
        <h1 className={styles.section__title}>Edit This Task</h1>
        <div className={styles.section__body}>
        <div className={styles.addtask}>
            <form onSubmit={saveEditTask}>
                <InputWithLabel 
                    name="task"
                    type="text"
                    value={onCurrentTask.task}
                    isFocused
                    onChange={editingTask}
                >Task</InputWithLabel>
                <InputWithLabel
                    name="date"
                    type="date"
                    value={onCurrentTask.date}
                    onChange={editingDate}
                >Due By</InputWithLabel>
                <button className={styles.button} type="submit"><FontAwesomeIcon icon={faFloppyDisk} size="2xl" /></button>
                <button className={styles.button} onClick={cancelEditTask}><FontAwesomeIcon icon={faRectangleXmark} size="2xl" /></button>
            </form>
        </div>
        </div>
        </div>
    )
    
}

export default EditTodoForm