const deleteTask = async (table, id) => {

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}`
    const key = `${process.env.REACT_APP_API_KEY}`

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

export default deleteTask;