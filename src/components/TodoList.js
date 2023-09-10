import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onDeleteTask, onUpdateTask }) => {
    
    return (
        <>
            {
                todoList.map((item) => {
                    return(
                        <TodoListItem 
                            key={item.id}
                            todo={item}
                            onDeleteTask={onDeleteTask}
                            onUpdateTask={onUpdateTask}
                        />
                    )
                })
            }
        
        </>
    )
    
}

export default TodoList;