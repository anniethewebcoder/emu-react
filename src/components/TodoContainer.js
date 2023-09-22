import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
import styles from './../css/app.module.css'
import getList from "../fetch/getList"
import addTask from "../fetch/addTask"
import deleteTask from "../fetch/deleteTask"
import editTask from "../fetch/editTask"
import Introduction from "./Introduction"
import EditTodoForm from "./EditTodoForm"

const TodoContainer = ({ tableName }) => {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState([])

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
    addTask(tableName, newTodo.task, newTodo.date).then((addingTodo) => {
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

  const editTodo = (todo) => {

    setIsEditing(true)
    setCurrentTask(todo)
    window.scrollTo(0, 0)

    
    // editTask(tableName, todo.id, todo.stat, todo.task, todo.date).then((editingTodo) => {
    //   setIsEditing(false)
    // })
  }

  const updateEditing = (state) => {
    setIsEditing(state)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Introduction />
        {
          isEditing ? (      
            <>
            <EditTodoForm onCurrentTask={currentTask} onCancel={updateEditing}/>
            </>
          ) : (
            <AddTodoForm onAddTodo={addTodo} />
          )
        }
        
      </div>
      <div className={`${styles.section}`}>
        <h1 className={styles.section__title}>Your To-Do List</h1>
          <div className={`${styles.section__body} ${styles.section__list}`}>
        
          { 
            isLoading ? (
              <p>Loading...</p>
            ) : (
              <TodoList todoList={todoList} onDeleteTask={deleteTodo} onEditTask={editTodo}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TodoContainer;