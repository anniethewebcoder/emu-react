const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}`
const key = `${process.env.REACT_APP_API_KEY}`

const getList = async (table) => {
  try {
    const res = await fetch(url+table, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      }
    })
    
    if(!res.ok) {
      const msg = `Error: ${res.status}`
      throw new Error(msg)
    }

    const airtable = await res.json()

    console.log(airtable)

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

export default getList;