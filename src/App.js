import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import TodoContainer from './components/TodoContainer';
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const table = `/${process.env.REACT_APP_TABLE_NAME}/`

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <TodoContainer tableName={table}/>
            <Footer />
          </>
        } />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
