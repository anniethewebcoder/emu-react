// import { BrowserRouter, Routers, Route } from "react-router-dom";
// import axios from 'axios';
import "./app.css";
import Header from "./components/Header";
import TodoContainer from './components/TodoContainer';
import Footer from "./components/Footer";

const table = `/${process.env.REACT_APP_TABLE_NAME}/`

const App = () => {

  return (
    <>
      <div className="container">
      <Header />
      <TodoContainer tableName={table}/>
      <Footer />
      </div>
      
    </>
  )
}

export default App;
