import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from 'axios';
import style from "./app.module.css";
import Header from "./components/Header";
import TodoContainer from './components/TodoContainer';
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const table = `/${process.env.REACT_APP_TABLE_NAME}/`

const App = () => {

  return (
    <BrowserRouter>
      <div className={style.container}>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <TodoContainer tableName={table}/>
            <Footer />
          </>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App;
