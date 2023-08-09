import "./css/app.css";
import Header from "./components/Header";
import TodoContainer from './components/TodoContainer';

const table = `/${process.env.REACT_APP_TABLE_NAME}/`

const App = () => {

  return (
    <>
      <div id="container">
        <Header />
        <TodoContainer tableName={table}/>
      </div>
      
    </>
  )
}

export default App;
