import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
import styles from './../css/app.module.css'
import getList from "../fetch/getList"
import postTask from "../fetch/postTask"
import deleteTask from "../fetch/deleteTask"
import updateTask from "../fetch/updateTask"
import EditTodoForm from "./EditTodoForm"
import Introduction from "./Introduction"

const TodoContainer = ({ tableName }) => {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [todoTask, setTodoTask] = useState([])

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  
  useEffect(() => {
    getList(tableName).then((result) => {
      setTodoList(result);
      setIsLoading(false);
    })
  }, [tableName]);

  const addTodo = (newTodo) => {
    postTask(tableName, newTodo.task, newTodo.date).then((addingTodo) => {
      const todo = {
        id: addingTodo.id,
        task: addingTodo.fields.Task,
        date: addingTodo.fields.Date,
        stat: addingTodo.fields.Status,
        created: addingTodo.createdTime
      }

      setTodoList([todo, ...todoList])
    })

    
  }

  const deleteTodo = (todo) => {
    deleteTask(tableName, todo.id)

    const newList = todoList.filter(
      (item) => item.id !== todo.id
    )

    setTodoList(newList)
  }

  const updateTodo = (todo) => {
   
    setIsEditing(true)
    setTodoTask(todo)

    //const data = updateTask(tableName, todo.id, todo.stat, todo.task, todo.date)

    // const updateList = todoList.map(
    //   (item) => item.id === todo.id ? {...item, ...data} : item 
    // )

    //setIsEditing(false)

  }
    return (
<div className={styles.container}>
        <div className={styles.content}>
          <Introduction />

          <AddTodoForm onAddTodo={addTodo} />

            
          

            <div className={styles.folder}>
            <h1 className={styles.folderhead}>Show List</h1>
            <div className={styles.folderbody}>
            {  isEditing ? (
                <EditTodoForm task={todoTask}/>
              ):(
                <p>Something</p>
              )}
              { isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onDeleteTask={deleteTodo} onUpdateTask={updateTodo}/>
              )}
            </div>
          </div>
          </div>
          </div>


    )
 
}

export default TodoContainer;