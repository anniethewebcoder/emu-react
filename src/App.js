import "./css/app.css";
import TodoContainer from './components/TodoContainer';

const table = `/${process.env.REACT_APP_TABLE_NAME}`

const App = () => {

  return (
    <>
      <div id="container">
        <TodoContainer tableName={table}/>
      </div>
      
    </>
  )
}

export default App;
