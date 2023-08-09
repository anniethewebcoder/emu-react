import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onDeleteTask }) => {
    
    return (
        <>
            
            {
                todoList.map((item) => {
                    return(
                        <TodoListItem 
                            key={item.id}
                            todo={item}
                            onDeleteTask={onDeleteTask}
                        />
                    )
                })
            }
        
        </>
    )
    
}

export default TodoList;