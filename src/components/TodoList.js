import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

const TodoList = ({ todoList, onDeleteTask, onEditTask }) => {

    return (
        <>
            {
                todoList.map((item) => {
                    return(
                        <TodoListItem 
                            key={item.id}
                            todo={item}
                            onDeleteTask={onDeleteTask}
                            onEditTask={onEditTask}
                        />
                    )
                })
            }
        
        </>
    )
    
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onDeleteTask: PropTypes.func,
    onEditTask: PropTypes.func
}

export default TodoList;