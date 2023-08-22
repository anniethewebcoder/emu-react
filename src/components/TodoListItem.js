import { useEffect, useRef, useState } from 'react';

const TodoListItem = ({ todo, onDeleteTask }) => {

    const deleteTask = () => {
        onDeleteTask(todo)
    }

    const [showBoxes, setShowBoxes] = useState([])

    useEffect(() => {
        const boxes = Array.from(document.querySelectorAll('.box'))
    })
    
    const ulShow = useRef()


    return (
        <ul ref={ulShow}>
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