import styles from './../css/card.module.css'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faSpinner,  } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons' 

const TodoListItem = ({ todo, onDeleteTask, onEditTask }) => {

    const deleteTask = () => {
        onDeleteTask(todo)
    }

    const editTask = () => {
        onEditTask(todo)
    }

    const getStat = (todo) => {
        if(todo.stat === "Todo") return `${styles.card} ${styles.card__stat_todo}`
        if(todo.stat === "Done") return `${styles.card} ${styles.card__stat_done}`
        if(todo.stat === "In progress") return `${styles.card} ${styles.card__stat_prog}`
    }

    const statIcon = (todo) => {
        if(todo.stat === "Todo") return <FontAwesomeIcon icon={faCircle} size="2xl" />
        if(todo.stat === "Done") return <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
        if(todo.stat === "In progress") return <FontAwesomeIcon icon={faSpinner} size="2xl" />
    }

    return (
        <div className={getStat(todo)}>
            <h3 className={styles.card__task}>{statIcon(todo)}&nbsp;{todo.task}</h3>
            <h4 className={styles.card__date}>Due By: {todo.date}</h4>
            <h4 className={styles.card__stat}>Status: {todo.stat}</h4>
            <h4>Created: {todo.created.substring(0,10)}</h4>
            <p>
                <button className={styles.card__button} type="button" onClick={editTask}><FontAwesomeIcon icon={faPenToSquare} size="2xl" /></button>
                <button className={styles.card__button} type="button" onClick={deleteTask}><FontAwesomeIcon icon={faTrashCan} size="2xl" /></button>
            </p>
        </div>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onDeleteTask: PropTypes.func,
    onEditTask: PropTypes.func

}
export default TodoListItem;