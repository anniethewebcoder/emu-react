import { useState } from "react";

const AddTodoForm = () => {
    const [todoTitle, setTodoTitle] = useState("");

    return (
        <div id="form">
            <form>
                <button>New Task?</button>
                <label>Title</label>
                <input type="text" name="title"></input>
                <label>Task: </label>
                <input type="text" name="task"></input>
            </form>
        </div>
    )
}

export default AddTodoForm;