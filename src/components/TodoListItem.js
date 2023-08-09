const TodoListItem = ({ todo, onDeleteTask }) => {

    const deleteTask = () => {
        onDeleteTask(todo)
    }

    return (
        <ul>
            <li>
                {todo.task}
            </li>
            <li>
                {todo.date}
            </li>
            <li>
                {todo.stat}
            </li>
            <li>
                {todo.created}
            </li>
            <li>
                <button type="button" onClick={deleteTask}>Delete</button>
            </li>
        </ul>
    )
}

export default TodoListItem;