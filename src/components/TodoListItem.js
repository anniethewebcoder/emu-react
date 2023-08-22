

const TodoListItem = ({ todo, onDeleteTask }) => {

    const deleteTask = () => {
        onDeleteTask(todo)
    }

    if(todo.stat === "Todo") {

    } else if(todo.stat === "In progress") {

    } else if(todo.stat === "Done") {

    } else {

    }


    return (
        <div className='todo-card'>
            <h3>{todo.task}</h3>
            <h4>Due By: {todo.date}</h4>
            <p>Status: {todo.stat}</p>
            <p>Created: {todo.created.substring(0,10)}</p>
            <p><button className="button" type="button" onClick={deleteTask}>Delete</button></p>
        </div>
    )
}

export default TodoListItem;