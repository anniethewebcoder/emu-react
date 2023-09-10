import { useState } from 'react'
import InputWithLabel from "./InputWithLabel";
import styles from './../css/app.module.css'

const EditTodoForm = ({task}) => {
    const [todoId, setTodoId] = useState(task.id)
    const [todoTask, setTodoTask] = useState(task.task)
    const [todoDate, setTodoDate] = useState(task.date)
    const [todoStat, setTodoStat] = useState(task.stat)

    const taskChange = (event) => {
        let newTodoTask = event.target.value
        setTodoTask(newTodoTask)
    }

    const dateChange = (event) => {
        let newTodoDate = event.target.value
        setTodoDate(newTodoDate)
    }

    const statChange = (event) => {
        let newTodoStat = event.target.value
        setTodoStat(newTodoStat)
    }

    const editTodo = (event) => {
        event.preventDefault();

        task({
            task: todoTask,
            date: todoDate,
            stat: todoStat
        })

        setTodoTask("")
        setTodoDate("")
    }

    return (
        // <form>
        //     <label>Edit Task: </label>
        //     <input type="type" value={props.task.task} />
        //     <label>Edit Date: </label>
        //     <input type="date" value={props.task.date} />
        //     <input type="radio" name="status" value="Done" />
        //     <label>Done</label>
        //     <input type="radio" name="status" value="In progress" />
        //     <label>In progress</label>
        //     <input type="radio" name="status" value="Todo" />
        //     <label>Todo</label>
        //     <button type="button" onClick={sendData}>Save</button>
        // </form>

        <div className={styles.addtask}>
            <form onSubmit={editTodo}>
                <InputWithLabel 
                    name="task"
                    type="text"
                    value={todoTask}
                    isFocused
                    onChange={taskChange}
                >Task: </InputWithLabel>
                <InputWithLabel
                    name="date"
                    type="date"
                    value={todoDate}
                    onChange={dateChange}
                >Due By: </InputWithLabel>
                <InputWithLabel
                    name="stat"
                    type="text"
                    value={todoStat}
                    onChange={statChange}
                >Status: </InputWithLabel>
                <button className={styles.button} type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditTodoForm;