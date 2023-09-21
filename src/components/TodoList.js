import TodoListItem from "./TodoListItem";

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

export default TodoList;