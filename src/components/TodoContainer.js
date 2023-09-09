import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
import styles from './../css/app.module.css'
import getList from "../fetch/getList"
import postTask from "../fetch/postTask"
import deleteTask from "../fetch/deleteTask"

const TodoContainer = ({ tableName }) => {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
  }
    return (
      <>
        <div className={styles.content}>
          <div className={`${styles.addform} ${styles.column}`}>
          <div className={styles.folder}>
              <h1 className={styles.folderhead}>Welcome!</h1>
              <div className={styles.folderbody}>
                <h2>Your Simply Favorite To-Do List App</h2>
                <p>You have come to the right place for a handy dandy productivity tool. This to-do list app will help keep you on track on a day-to-day basis.</p>
              </div>
            </div>
            <div className={styles.folder}>
              <h1 className={styles.folderhead}>Add a Task</h1>
              <div className={styles.folderbody}>
                <AddTodoForm onAddTodo={addTodo} />
              </div>
            </div>
            <div className={styles.folder}>
              <h1 className={styles.folderhead}>Sort Tasks</h1>
              <div className={styles.folderbody}>
                <p>Sort by Due Date</p>
                <p>Sort by Status</p>
                <p>Sort by Title</p>
              </div>
            </div>
          </div>
          <div className={`${styles.addform} ${styles.column}`}>
            <div className={styles.folder}>
            <h1 className={styles.folderhead}>Show List</h1>
            <div className={styles.folderbody}>
              { isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onDeleteTask={deleteTodo} />
              )}
            </div>
            </div>
          </div>
        </div>
      </>
    )
 
}

export default TodoContainer;