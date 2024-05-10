import React from 'react'
import './App.css';
import { useState } from 'react';
import Content from './components/content';
import Header from './components/header';

function Counter() {
    const [count, setCount] = useState(0);
    const [employees, setEmployees] = useState({
      nama: "Budi",
      alamat: "Jl. Raya",
      tinggiBadan: 170,
      beratBadan: 70
    });
  
    const handleIncrement = () => {
      setCount(prevState => prevState + 1);
    };
  
    const handleDecrement = () => {
      if (count === 0) {
        return;
      }
      setCount(prevState => prevState - 1);
    };
  
    const handleUpdateEmployee = () => {
      setEmployees((prevState) => {
        return {
          ...prevState,
          nama: "Dian",
        };
      });
    };
  
    /* const employee = [
      {id: 1, nama: "Arif WS"},
      {id: 2, nama: "Dian"},
      {id: 3, nama: "Rahma"},
      {id: 4, nama: "Rizki"},
      {id: 5, nama: "Rizal"}
    ]; */
  
    return (
      <>
        <Header name="Arif WS"/>
        <Content items={employees}/>
        <div>
          Hello World!
        </div>
        <div>
          {count}
        </div>
        <button onClick={handleUpdateEmployee}>Update Employee</button>{" "}
        <button onClick={handleDecrement}>-</button>{" "}
        <button onClick={handleIncrement}>+</button>
        
        
        {/* {employee.map((item) => (
          <Content key={item.id} items={item} />
        ))} */}
      </>
      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
  )
}

export default Counter