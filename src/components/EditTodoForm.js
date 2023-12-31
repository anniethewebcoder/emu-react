import { useState } from 'react'
import PropTypes from 'prop-types'
import InputWithLabel from './InputWithLabel'
import styles from './../css/app.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"


const EditTodoForm = ({ onCurrentTask, onCancel, onSave }) => {
    
    const [editedTask, setEditedTask] = useState(onCurrentTask.task)
    const [editedDate, setEditedDate] = useState(onCurrentTask.date)
    const [editedStat, setEditedStat] = useState(onCurrentTask.stat) 
    
    const saveEditTask = (event) => {
        event.preventDefault()
        const editedList = {
            id: onCurrentTask.id,
            task: editedTask,
            date: editedDate,
            stat: editedStat,
            created: onCurrentTask.created
        }

        onSave(editedList)
    }

    const cancelEditTask = (event) => {
        event.preventDefault()
        onCancel(false)
    }

    const editingTask = (event) => {
        event.preventDefault()
        setEditedTask(event.target.value)
    }

    const editingDate = (event) => {
        event.preventDefault()
        setEditedDate(event.target.value)
    }

    const editingStat = (event) => {
        setEditedStat(event.target.value)
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
                <div className={styles.editTask__radio}>
                    <label htmlFor="Todo">
                        <input type="radio" name="status" value="Todo" onChange={editingStat} checked={editedStat === "Todo"}/>
                        Todo
                    </label>
                    <label htmlFor="In progress">
                        <input type="radio" name="status" value="In progress" onChange={editingStat} checked={editedStat === "In progress"} />
                        In progress
                    </label>
                    <label htmlFor="Done">
                        <input type="radio" name="status" value="Done" onChange={editingStat} checked={editedStat === "Done"}/>
                        Done
                    </label>
                </div>
                <button className={styles.button} type="submit"><FontAwesomeIcon icon={faFloppyDisk} size="2xl" /></button>
                <button className={styles.button} onClick={cancelEditTask}><FontAwesomeIcon icon={faRectangleXmark} size="2xl" /></button>
            </form>
        </div>
        </div>
        </div>
    )
    
}

EditTodoForm.propTypes = {
    onCurrentTask: PropTypes.object,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
}

export default EditTodoForm