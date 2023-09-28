import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import TodoContainer from './components/TodoContainer';
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import About from "./components/About";

const table = `/${process.env.REACT_APP_TABLE_NAME}/`

const App = () => {

  return (
    <BrowserRouter>
      <Link to="/"><Header /></Link>
      <Routes>
        <Route path="/" element={<TodoContainer tableName={table}/>} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
