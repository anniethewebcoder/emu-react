import axios from "axios"
import styles from './../app.module.css'

const SortList = () => {

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_KEY}`
    const key = `${process.env.REACT_APP_API_KEY}`
    
    const fetchDueDate = async () => {
        try {

        } catch (err) {
            console.log(err.message)
        }
    }

    const fetchStatus = async () => {
        try {

        } catch (err) {
            console.log(err.message)
        }
    }

    const fetchTask = async () => {
        try {

        } catch (err) {
            console.log(err.message)
        }
    }
}

export default SortList;