import { useState } from 'react'
import PropTypes from 'prop-types'
import InputWithLabel from "./InputWithLabel";
import styles from "./../css/app.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const AddTodoForm = ({ onAddTodo }) => {

    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate();
    const todayDate = `${year}-${month}-${day}`

    const [todoTask, setTodoTask] = useState("")
    const [todoDate, setTodoDate] = useState(todayDate)

    const taskChange = (event) => {
        let newTodoTask = event.target.value
        setTodoTask(newTodoTask)
    }

    const dateChange = (event) => {
        let newTodoDate = event.target.value
        setTodoDate(newTodoDate)
    }

    const addTodo = (event) => {
        event.preventDefault();
        onAddTodo({
            task: todoTask,
            date: todoDate
        })

        setTodoTask("")
        setTodoDate("")
    }
    return (
        <div className={`${styles.section} ${styles.section__right}`}>
        <h1 className={styles.section__title}>Add a Task</h1>
        <div className={styles.section__body}>
        <div className={styles.addtask}>
            <form onSubmit={addTodo}>
                <InputWithLabel 
                    name="task"
                    type="text" 
                    isFocused
                    onChange={taskChange}
                >Task</InputWithLabel>
                <InputWithLabel
                    name="date"
                    type="date"
                    onChange={dateChange}
                >Due By</InputWithLabel>
                <button className={styles.button} type="submit"><FontAwesomeIcon icon={faSquarePlus} size="2xl" /></button>
            </form>
        </div>
        </div>
        </div>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
}

export default AddTodoForm;