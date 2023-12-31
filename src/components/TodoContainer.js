import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
import styles from './../css/app.module.css'
import getList from "../fetch/getList"
import addTask from "../fetch/addTask"
import deleteTask from "../fetch/deleteTask"
import editTask from "../fetch/editTask"
import Introduction from "./Introduction"
import EditTodoForm from "./EditTodoForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDownAZ, faArrowDownZA, faArrowDown19, faArrowDown91, faSpinner, faListUl } from "@fortawesome/free-solid-svg-icons"
import { faCircle, faCircleCheck  } from "@fortawesome/free-regular-svg-icons"

const TodoContainer = ({ tableName }) => {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState([])
  const [isTaskAscending, setIsTaskAscending] = useState(true)
  const [sortTaskButton, setSortTaskButton] = useState(<FontAwesomeIcon icon={faArrowDownAZ} size="2xl" />)
  const [isDateAscending, setIsDateAscending] = useState(true)
  const [sortDateButton, setSortDateButton] = useState(<FontAwesomeIcon icon={faArrowDown91} size="2xl" />)
  const [filteredList, setFilteredList] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)


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

    setIsFiltered(false)
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

  }

  const saveEditTask = (todo) => {

    editTask(tableName, todo.id, todo.stat, todo.task, todo.date)

    const updatedItems = [...todoList]

    const index = updatedItems.findIndex(item => item.id === todo.id)

    if(index !== -1){
      updatedItems[index].task = todo.task
      updatedItems[index].date = todo.date
      updatedItems[index].stat = todo.stat

      setTodoList(updatedItems)
    }

    setIsEditing(false)
  }

  const updateEditing = (state) => {
    setIsEditing(state)
  }

  const toggleTaskSort = () => {
    setIsTaskAscending(!isTaskAscending)

    let currentList
    let newList

    isFiltered === false ? currentList = todoList : currentList = filteredList
    
    if(isTaskAscending === true) {
      setSortTaskButton(<FontAwesomeIcon icon={faArrowDownZA} size="2xl" />)


      newList = currentList.sort((a,b) => {
        if(a.task.toUpperCase() > b.task.toUpperCase()) return 1
        if(a.task.toUpperCase() < b.task.toUpperCase()) return -1
        return 0
      })

    } else {
       setSortTaskButton(<FontAwesomeIcon icon={faArrowDownAZ} size="2xl" />)

        newList = currentList.sort((a,b) => {
          if(a.task.toUpperCase() > b.task.toUpperCase()) return -1
          if(a.task.toUpperCase() < b.task.toUpperCase()) return 1
          return 0
        })


      isFiltered === false ? setTodoList([...newList]) : setFilteredList([...newList])
    }
  }

  const toggleDateSort = () => {
    setIsDateAscending(!isDateAscending)

    let currentList
    let newList

    isFiltered === false ? currentList = todoList : currentList = filteredList

    if(isDateAscending === true) {
      setSortDateButton(<FontAwesomeIcon icon={faArrowDown19} size="2xl" />)

      newList = currentList.sort((a,b) => {
        if(a.date > b.date) return -1
        if(a.date < b.date) return 1
        return 0
      })
    } else {
      setSortDateButton(<FontAwesomeIcon icon={faArrowDown91} size="2xl" />)

      newList = currentList.sort((a,b) => {
        if(a.date > b.date) return 1
        if(a.date < b.date) return -1
        return 0
      })
    }

    isFiltered === false ? setTodoList([...newList]) : setFilteredList([...newList])
  }

  const showAll = () => {
    setFilteredList(todoList)
    setIsFiltered(false)
  }

  const filterProgStat = () => {
    setFilteredList(todoList)
    setIsFiltered(true)
    const newList = todoList.filter(
      (item) => item.stat === "In progress"
    )

    setFilteredList(newList)
  }

  const filterDoneStat = () => {
    setFilteredList(todoList)
    setIsFiltered(true)
    const newList = todoList.filter(
      (item) => item.stat === "Done"
    )

    setFilteredList(newList)
  }

  const filterTodoStat = () => {
    setFilteredList(todoList)
    setIsFiltered(true)
    const newList = todoList.filter(
      (item) => item.stat === "Todo"
    )

    setFilteredList(newList)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Introduction />
        {
          isEditing ? (      
            <>
            <EditTodoForm onCurrentTask={currentTask} onCancel={updateEditing} onSave={saveEditTask} />
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
              <>
              <div className={styles.buttons__row}>
                <button onClick={toggleTaskSort} className={styles.button}>{sortTaskButton}</button>
                <button onClick={toggleDateSort} className={styles.button}>{sortDateButton}</button>
                <button onClick={showAll} className={styles.button}>Show All <FontAwesomeIcon icon={faListUl} size="2xl" /></button>
                <button onClick={filterTodoStat} className={styles.button}>Filter Todo <FontAwesomeIcon icon={faCircle} size="2xl" /></button>
                <button onClick={filterProgStat} className={styles.button}>Filter In progress <FontAwesomeIcon icon={faSpinner} size="2xl" /></button>
                <button onClick={filterDoneStat} className={styles.button}>Filter Done <FontAwesomeIcon icon={faCircleCheck} size="2xl" /></button>
              </div>
              { isFiltered ? (
                  <TodoList todoList={filteredList} onDeleteTask={deleteTodo} onEditTask={editTodo}/>
                ) : (
                  <TodoList todoList={todoList} onDeleteTask={deleteTodo} onEditTask={editTodo}/>
                )
              }
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

TodoContainer.propTypes = {
  tableName: PropTypes.string
}

export default TodoContainer;