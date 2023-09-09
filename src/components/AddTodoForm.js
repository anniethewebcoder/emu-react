import { useState } from 'react'
import InputWithLabel from "./InputWithLabel";
import styles from "./../css/app.module.css";

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTask, setTodoTask] = useState("")
    const [todoDate, setTodoDate] = useState("")

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
                <button className={styles.button} type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;