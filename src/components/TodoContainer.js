import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}`
const key = `${process.env.REACT_APP_API_KEY}`

const fetchAirtable = async (table) => {
  try {
    const res = await fetch(url+table, {
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

    console.log(JSON.stringify(airtableData))
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

  // const addExample =() => {
  //   postTodo(tableName, "Post through app", "2023-08-10", "Todo")
  // }

  const addTodo = (newTodo) => {
    postTodo(tableName, newTodo.task, newTodo.date)
  }

    return (
      <>
        <AddTodoForm onAddTodo={addTodo} />
        { isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList todoList={todoList} />
        )}
      </>
    )
 
}

export default TodoContainer;