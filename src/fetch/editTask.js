const editTask = async (table, id, status, task, date) => {
    
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}`
    const key = `${process.env.REACT_APP_API_KEY}`
    
    try {
        const res = await fetch(url+table+id, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${key}`
            },
            body: {
                "fields": {
                    "Status": status,
                    "Task": task,
                    "Date": date
                }
            }
        })

        if(!res.ok) {
            const msg = `Error has occured: ${res.status}`
            throw new Error(msg)
        }

        const dataResponse = await res.json()
        return dataResponse

    } catch (err) {
        console.log(err.message)
    }

}

export default editTask;