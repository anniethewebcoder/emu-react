import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
    
    return (
        <>
            
            {
                todoList.map((item) => {
                    return(
                        <TodoListItem 
                            key={item.id}
                            todo={item}
                        />
                    )
                })
            }
        
        </>
    )
    
}

export default TodoList;