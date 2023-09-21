const  addTask = async (table, task, date) => {

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}`
    const key = `${process.env.REACT_APP_API_KEY}`

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

        return dataResponse
    } catch (err) {
        console.log(err.message)
    }
}


export default addTask;