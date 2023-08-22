import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}`
const key = `${process.env.REACT_APP_API_KEY}`

const fetchAirtable = async (table) => {
  try {
    const res = await fetch(url+table+'?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=asc', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${key}`
      }
    })
    
    if(!res.ok) {
      const msg = `Error: ${res.status}`
      throw new Error(msg)
    }

    const airtable = await res.json()

    const list = airtable.records.map((item) => {
      const todo = {
        id: item.id,
        task: item.fields.Task,
        date: item.fields.Date,
        stat: item.fields.Status,
        created: item.createdTime
      }
      return todo
    })
    return list
  } catch (err) {
    console.log(err.message)
  }
}

const postTodo = async (table, task, date) => {
  try {
    const airtableData = {
      fields: {
        Task: task,
        Date: date,
        Status: "Todo"
      }
    }

    const res = await fetch(url+table, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify(airtableData)
    })

    if(!res.ok) {
      const msg = `Error has occurred: ${res.status}`
      throw new Error(msg)
    }

    const dataResponse = await res.json()
    //console.log(dataResponse)
    return dataResponse
  } catch (err) {
    console.log(err.message)
  }
}

const deleteTodo = async (table, id) => {
  try {
    const res = await fetch(url+table+id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${key}`
      }
    })

    if(!res.ok) {
      const msg = `Error has occurred: ${res.status}`
      throw new Error(msg)
    }

    const dataResponse = await res.json()
    return dataResponse

  } catch (err) {
    console.log(err.message)
  }
}

const searchTodo = () => {
  
}

const TodoContainer = ({ tableName }) => {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  
  useEffect(() => {
    fetchAirtable(tableName).then((result) => {
      setTodoList(result);
      setIsLoading(false);
    })
  }, [tableName]);

  const addTodo = (newTodo) => {
    postTodo(tableName, newTodo.task, newTodo.date).then((addingTodo) => {
      const todo = {
        id: addingTodo.id,
        task: addingTodo.fields.Task,
        date: addingTodo.fields.Date,
        stat: addingTodo.fields.Status,
        created: addingTodo.createdTime
      }

      setTodoList([...todoList, todo])
    })

    
  }

  const deleteTask = (todo) => {
    deleteTodo(tableName, todo.id)
  }
    return (
      <>
        <div className="content">
          <div className="addform column">
          <div className="folder">
              <h1 className="folderhead">Welcome!</h1>
              <div className="folderbody">
                <h2>Your Simply Favorite To-Do List App</h2>
                <p>You have come to the right place for a handy dandy productivity tool. This to-do list app will help keep you on track on a day-to-day basis.</p>
              </div>
            </div>
            <div className="folder">
              <h1 className="folderhead">Add a Task</h1>
              <div className="folderbody">
                <AddTodoForm onAddTodo={addTodo} />
              </div>
            </div>
            <div className="folder">
              <h1 className="folderhead">Sort Tasks</h1>
              <div className="folderbody">
                <p>Sort by Due Date</p>
                <p>Sort by Status</p>
                <p>Sort by Title</p>
              </div>
            </div>
          </div>
          <div className="showform column">
            <div className="folder">
            <h1 className="folderhead">Show List</h1>
            <div className="folderbody">
              { isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onDeleteTask={deleteTask} />
              )}
            </div>
            </div>
          </div>
        </div>
      </>
    )
 
}

export default TodoContainer;