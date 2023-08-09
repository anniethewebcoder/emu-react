const TodoListItem = ({ todo }) => {

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
        </ul>
    )
}

export default TodoListItem;