import { BrowserRouter, Routers, Route } from "react-router-dom";
import axios from 'axios';
import "./app.css";
import Header from "./components/Header";
import TodoContainer from './components/TodoContainer';

const table = `/${process.env.REACT_APP_TABLE_NAME}/`

const App = () => {

  return (
    <>
      <div className="content">
        <Header />
        <TodoContainer tableName={table}/>
      </div>
      
    </>
  )
}

export default App;
