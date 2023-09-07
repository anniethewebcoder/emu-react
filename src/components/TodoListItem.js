import styles from './../app.module.css'

const TodoListItem = ({ todo, onDeleteTask }) => {

    const deleteTask = () => {
        onDeleteTask(todo)
    }

    const getStat = (todo) => {
        if(todo.stat === "Todo") return `${styles.todoCard} ${styles.todoStat}`
        if(todo.stat === "Done") return `${styles.todoCard} ${styles.doneStat}`
        if(todo.stat === "In progress") return `${styles.todoCard} ${styles.progStat}`
    }

    const getDate = (todo) => {
        let y = parseInt(todo.date.substring(0,4))
        let m = parseInt(todo.date.substring(5,7))
        let d = parseInt(todo.date.substring(8,10))
        // const d = new Date()
        console.log(y, m, d)
        // console.log(d.toISOString().substring(0,10))
    }

    getDate(todo)

    return (
        <div className={getStat(todo)}>
            <h3>{todo.task}</h3>
            <h4>Due By: {todo.date}</h4>
            <p>Status: {todo.stat}</p>
            <p>Created: {todo.created.substring(0,10)}</p>
            <p>
                <button className={styles.button} type="button">Update</button>
                <button className={styles.button} type="button" onClick={deleteTask}>Delete</button>
                
            </p>
        </div>
    )
}

export default TodoListItem;