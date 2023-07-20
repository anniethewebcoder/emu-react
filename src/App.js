import React from 'react';
import "./app.css";
import Header from './components/Header';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  return (
    <>
      <div id="container">
        <Header />
        <AddTodoForm />
      </div>
      
    </>
  )
}

export default App;
